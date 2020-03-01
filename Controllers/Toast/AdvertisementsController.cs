using CharlestonPride.Portal.Models.Toast;
using Cosmonaut;
using Microsoft.Extensions.Logging;

namespace CharlestonPride.Portal.Controllers.Toast
{
    public class AdvertisementController
        : CosmosEntityBaseController<Advertisement>
    {
        public AdvertisementController(ILogger<Advertisement> logger, ICosmosStore<Advertisement> cosmosStore)
            : base(logger, cosmosStore) {}
    }
}