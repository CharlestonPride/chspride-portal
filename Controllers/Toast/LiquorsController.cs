using CharlestonPride.Portal.Models.Toast;
using Cosmonaut;
using Microsoft.Extensions.Logging;

namespace CharlestonPride.Portal.Controllers.Toast
{
    public class LiquorsController
        : CosmosEntityBaseController<Liquor>
    {
        public LiquorsController(ILogger<Liquor> logger, ICosmosStore<Liquor> cosmosStore)
            : base(logger, cosmosStore) {}
    }
}