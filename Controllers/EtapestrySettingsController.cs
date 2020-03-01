using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CharlestonPride.Portal.Models;
using Cosmonaut;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CharlestonPride.Portal.Controllers
{
    public class EtapestrySettingsController : CosmosEntityBaseController<EtapesterySetting>
    {
        public EtapestrySettingsController(ILogger<EtapesterySetting> logger, ICosmosStore<EtapesterySetting> cosmosStore):
            base(logger, cosmosStore, EtapesterySetting.EnvironmentId) { }
        
        [HttpGet]
        public override async Task<IEnumerable<EtapesterySetting>> GetAsync()
        {
            var settings = await base.GetAsync();
            return settings.ToList();
        }

        [HttpPut("{id}/enable")]
        public async Task<ActionResult<EtapesterySetting>> EnableAsync(string id)
        {
            return await ChangeAvailability(id, true);
        }
        
        [HttpPut("{id}/disable")]
        public async Task<ActionResult<EtapesterySetting>> DisableAsync(string id)
        {
            return await ChangeAvailability(id, false);
        }

        private async Task<ActionResult<EtapesterySetting>> ChangeAvailability(string id, bool enabled)
        {
            var result = await FindByIdAsync(id);
            if (result == null)
            {
                return NotFound();
            }

            result.Enabled = enabled;
            return await UpsertAsync(result);
        }
        
    }
}