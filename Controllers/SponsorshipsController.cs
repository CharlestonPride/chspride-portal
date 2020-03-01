using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CharlestonPride.Portal.Models;
using Cosmonaut;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CharlestonPride.Portal.Controllers
{
    public class SponsorshipsController: CosmosEntityBaseController<Sponsorship>
    {
        public SponsorshipsController(ILogger<Sponsorship> logger, ICosmosStore<Sponsorship> cosmosStore):
            base(logger, cosmosStore) { }
        
        [HttpGet]
        public override async Task<IEnumerable<Sponsorship>> GetAsync()
        {
            var sponsorships = await base.GetAsync();
            return sponsorships.OrderByDescending(d => d.Rate).ToList();
        }
    }
}