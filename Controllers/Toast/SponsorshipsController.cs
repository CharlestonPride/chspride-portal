using Cosmonaut;
using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.Logging;
using Sponsorship = CharlestonPride.Portal.Models.Toast.Sponsorship;

namespace CharlestonPride.Portal.Controllers.Toast
{
    [Route("api/toast/[controller]")]
    public class SponsorshipsController
        : CosmosEntityBaseController<Sponsorship>
    {
        public SponsorshipsController(ILogger<Sponsorship> logger, ICosmosStore<Sponsorship> cosmosStore)
            : base(logger, cosmosStore, Sponsorship.EnvironmentId) {}
    }
}