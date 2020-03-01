using Cosmonaut;
using Microsoft.Extensions.Logging;
using Sponsor = CharlestonPride.Portal.Models.Toast.Sponsor;

namespace CharlestonPride.Portal.Controllers.Toast
{
    public class SponsorsController
        : CosmosEntityBaseController<Sponsor>
    {
        public SponsorsController(ILogger<Sponsor> logger, ICosmosStore<Sponsor> cosmosStore)
            : base(logger, cosmosStore) {}
    }
}