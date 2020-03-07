using CharlestonPride.Portal.Models.Toast;
using Cosmonaut;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CharlestonPride.Portal.Controllers.Toast
{
    [Route("api/toast/[controller]")]
    public class ContendersController
        : CosmosEntityBaseController<Contender>
    {
        public ContendersController(ILogger<Contender> logger, ICosmosStore<Contender> cosmosStore)
            : base(logger, cosmosStore, Contender.EnvironmentId) {}
    }
}