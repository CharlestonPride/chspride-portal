using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
    public class CosmosEntityBaseController<T>: ControllerBase where  T : CosmosEntity
    {
        private readonly string _environmentId;
        private readonly ILogger<T> _logger;
        private readonly ICosmosStore<T> _cosmosStore;
        private readonly FeedOptions _feedOptions;
        private readonly RequestOptions _requestOptions;

        public CosmosEntityBaseController(ILogger<T> logger, ICosmosStore<T> cosmosStore, string environmentId)
        {
            _logger = logger;
            _cosmosStore = cosmosStore;
            _environmentId = environmentId;
            _feedOptions = new FeedOptions {PartitionKey = new PartitionKey(environmentId)};
            _requestOptions = new RequestOptions {PartitionKey = new PartitionKey(environmentId)};

        }
        
        [HttpGet]
        public virtual async Task<IEnumerable<T>> GetAsync()
        {
            var result = await _cosmosStore.Query(_feedOptions).ToListAsync();
            return result.ToList();
        }
        
        [HttpGet("{id}")]
        public virtual async Task<ActionResult<T>> GetByIdAsync(string id)
        {
            if (string.IsNullOrEmpty(id))
            {
                return BadRequest();
            }

            var result = await _cosmosStore.FindAsync(id, _environmentId);
            if (result == null)
            {
                return NotFound();
            }
            return new OkObjectResult(result);
        }

        [HttpPost]
        public virtual async Task<ActionResult<T>> PostAsync(T entity)
        {
            return await UpsertAsync(entity);
        }

        [HttpDelete("{id}")]
        public virtual async Task<IActionResult> DeleteAsync(string id)
        {
            if (string.IsNullOrEmpty(id))
            {
                return BadRequest();
            }

            var response = await _cosmosStore.RemoveByIdAsync(id, _requestOptions);
            if (!response.IsSuccess)
            {
                _logger.LogInformation("Error deleting {nameof(T)} {id}. The status of the operation is {cosmosResponse.CosmosOperationStatus}", response.Exception);
            }

            return new OkResult();
        }


        protected async Task<T> FindByIdAsync(string id)
        {
            return await _cosmosStore.FindAsync(id, _environmentId);
        }
        protected async Task<ActionResult<T>> UpsertAsync(T entity)
        {
            var cosmosResponse =  await _cosmosStore.UpsertAsync(entity, _requestOptions);
            if (cosmosResponse.IsSuccess)
            {
                return new OkObjectResult(cosmosResponse.Entity);
            }
            _logger.LogError(cosmosResponse.Exception, $"There was an error upserting the {nameof(T)}. The status of the operation is {cosmosResponse.CosmosOperationStatus}");
            return new StatusCodeResult(StatusCodes.Status500InternalServerError);
        }
    }
}