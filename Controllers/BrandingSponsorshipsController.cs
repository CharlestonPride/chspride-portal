using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CharlestonPride.Portal.Models;
using Cosmonaut;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CharlestonPride.Portal.Controllers
{
    public class BrandingSponsorshipsController: CosmosEntityBaseController<BrandingSponsorship>
    {
        public BrandingSponsorshipsController(ILogger<BrandingSponsorship> logger, ICosmosStore<BrandingSponsorship> cosmosStore):
            base(logger, cosmosStore, BrandingSponsorship.EnvironmentId) { }
        
        [HttpGet]
        public override async Task<IEnumerable<BrandingSponsorship>> GetAsync()
        {
            var sponsorships = await base.GetAsync();
            return sponsorships.OrderByDescending(d => d.Rate).ToList();
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
            var result = await FindByIdAsync(id);
            if (result == null)
            {
                return NotFound();
            }

            result.Available = available;
            return await UpsertAsync(result);
        }
    }
}