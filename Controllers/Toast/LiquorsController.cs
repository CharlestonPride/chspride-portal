using CharlestonPride.Portal.Models.Toast;
using Cosmonaut;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CharlestonPride.Portal.Controllers.Toast
{
    [Route("api/toast/[controller]")]
    public class LiquorsController
        : CosmosEntityBaseController<Liquor>
    {
        public LiquorsController(ILogger<Liquor> logger, ICosmosStore<Liquor> cosmosStore)
            : base(logger, cosmosStore) {}
    }
}