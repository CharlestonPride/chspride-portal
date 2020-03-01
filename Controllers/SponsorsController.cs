using CharlestonPride.Portal.Models;
using Cosmonaut;
using Microsoft.Extensions.Logging;

namespace CharlestonPride.Portal.Controllers
{
    public class SponsorsController : CosmosEntityBaseController<Sponsor>
    {
        public SponsorsController(ILogger<Sponsor> logger, ICosmosStore<Sponsor> cosmosStore)
            : base(logger, cosmosStore, "pride") {}
    }
}