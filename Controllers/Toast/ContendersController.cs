using CharlestonPride.Portal.Models.Toast;
using Cosmonaut;
using Microsoft.Extensions.Logging;

namespace CharlestonPride.Portal.Controllers.Toast
{
    public class ContendersController
        : CosmosEntityBaseController<Contender>
    {
        public ContendersController(ILogger<Contender> logger, ICosmosStore<Contender> cosmosStore)
            : base(logger, cosmosStore) {}
    }
}