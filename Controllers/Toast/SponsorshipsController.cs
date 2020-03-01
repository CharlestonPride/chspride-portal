using Cosmonaut;
using Microsoft.Extensions.Logging;
using Sponsorship = CharlestonPride.Portal.Models.Toast.Sponsorship;

namespace CharlestonPride.Portal.Controllers.Toast
{
    public class SponsorshipsController
        : CosmosEntityBaseController<Sponsorship>
    {
        public SponsorshipsController(ILogger<Sponsorship> logger, ICosmosStore<Sponsorship> cosmosStore)
            : base(logger, cosmosStore) {}
    }
}