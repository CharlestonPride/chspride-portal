using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CharlestonPride.Portal.Models;
using Cosmonaut;
using Cosmonaut.Extensions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Microsoft.Extensions.Logging;

namespace CharlestonPride.Portal.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BrandingSponsorshipsController: ControllerBase
    {
        private const string EnvironmentId = "branding";
        private readonly ILogger<DirectorsController> _logger;
        private readonly ICosmosStore<BrandingSponsorship> _cosmosStore;
        private readonly FeedOptions _feedOptions;
        private readonly RequestOptions _requestOptions;

        public BrandingSponsorshipsController(ILogger<DirectorsController> logger, ICosmosStore<BrandingSponsorship> cosmosStore)
        {
            _logger = logger;
            _cosmosStore = cosmosStore;
            _feedOptions = new FeedOptions { PartitionKey = new PartitionKey(EnvironmentId) };
            _requestOptions = new RequestOptions {PartitionKey = new PartitionKey(EnvironmentId)};
        }
        
        [HttpGet]
        public async Task<IEnumerable<BrandingSponsorship>> GetAsync()
        {
            var result = await _cosmosStore.Query(_feedOptions).ToListAsync();
            return result.OrderByDescending(d => d.Rate).ToList();
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<BrandingSponsorship>> GetByIdAsync(string id)
        {
            if (string.IsNullOrEmpty(id))
            {
                return BadRequest();
            }

            var result = await _cosmosStore.FindAsync(id, EnvironmentId);
            if (result == null)
            {
                return NotFound();
            }
            return new OkObjectResult(result);
        }

        [HttpPost]
        public async Task<ActionResult<BrandingSponsorship>> PostAsync(BrandingSponsorship sponsorship)
        {
            return await UpsertAsync(sponsorship);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(string id)
        {
            if (string.IsNullOrEmpty(id))
            {
                return BadRequest();
            }

            var response = await _cosmosStore.RemoveByIdAsync(id, _requestOptions);
            if (!response.IsSuccess)
            {
                _logger.LogInformation("Error deleting {id}. The status of the operation is {cosmosResponse.CosmosOperationStatus}", response.Exception);
            }

            return new OkResult();
        }

        [HttpPut("{id}/enable")]
        public async Task<ActionResult<BrandingSponsorship>> EnableAsync(string id)
        {
            return await ChangeAvailability(id, true);
        }
        
        [HttpPut("{id}/disable")]
        public async Task<ActionResult<BrandingSponsorship>> DisableAsync(string id)
        {
            return await ChangeAvailability(id, false);
        }

        private async Task<ActionResult<BrandingSponsorship>> ChangeAvailability(string id, bool available)
        {
            var result = await _cosmosStore.FindAsync(id, EnvironmentId);
            if (result == null)
            {
                return NotFound();
            }

            result.Available = available;
            return await UpsertAsync(result);
        }
        
        private async Task<ActionResult<BrandingSponsorship>> UpsertAsync(BrandingSponsorship sponsorship)
        {
            var cosmosResponse =  await _cosmosStore.UpsertAsync(sponsorship, _requestOptions);
            if (cosmosResponse.IsSuccess)
            {
                return new OkObjectResult(cosmosResponse.Entity);
            }
            _logger.LogError(cosmosResponse.Exception, $"There was an error upserting the sponsorship. The status of the operation is {cosmosResponse.CosmosOperationStatus}");
            return new StatusCodeResult(StatusCodes.Status500InternalServerError);
        }
    }
}