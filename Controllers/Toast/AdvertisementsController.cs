using CharlestonPride.Portal.Models.Toast;
using Cosmonaut;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CharlestonPride.Portal.Controllers.Toast
{
    [Route("api/toast/[controller]")]
    public class AdvertisementController
        : CosmosEntityBaseController<Advertisement>
    {
        public AdvertisementController(ILogger<Advertisement> logger, ICosmosStore<Advertisement> cosmosStore)
            : base(logger, cosmosStore) {}
    }
}