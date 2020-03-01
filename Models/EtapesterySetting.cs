using Cosmonaut.Attributes;

namespace CharlestonPride.Portal.Models
{
    [CosmosCollection("Settings")]
    public class EtapesterySetting : Setting
    {
        public const string EnvironmentId = "etap";
    }
}