using CharlestonPride.Portal.Models;
using Cosmonaut;
using Microsoft.Extensions.Logging;

namespace CharlestonPride.Portal.Controllers
{
    public class SettingsController : CosmosEntityBaseController<Setting>
    {
        public SettingsController(ILogger<Setting> logger, ICosmosStore<Setting> cosmosStore)
            : base(logger, cosmosStore)
        {
        }
    }
}