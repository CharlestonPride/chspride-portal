using CharlestonPride.Portal.Models.Toast;
using Cosmonaut;
using Microsoft.Extensions.Logging;

namespace CharlestonPride.Portal.Controllers.Toast
{
    public class FoodTrucksController
        : CosmosEntityBaseController<FoodTruck>
    {
        public FoodTrucksController(ILogger<FoodTruck> logger, ICosmosStore<FoodTruck> cosmosStore)
            : base(logger, cosmosStore) {}
    }
}