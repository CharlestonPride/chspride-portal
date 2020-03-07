using CharlestonPride.Portal.Models.Toast;
using Cosmonaut;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CharlestonPride.Portal.Controllers.Toast
{
    [Route("api/toast/[controller]")]
    public class FoodTrucksController
        : CosmosEntityBaseController<FoodTruck>
    {
        public FoodTrucksController(ILogger<FoodTruck> logger, ICosmosStore<FoodTruck> cosmosStore)
            : base(logger, cosmosStore, FoodTruck.EnvironmentId) {}
    }
}