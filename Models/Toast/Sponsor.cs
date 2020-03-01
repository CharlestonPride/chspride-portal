using Cosmonaut.Attributes;

namespace CharlestonPride.Portal.Models.Toast
{
    [CosmosCollection("Sponsors")]
    public class Sponsor : PartitionedEntity
    {
        public const string EnvironmentId = "tte";

        public string Name { get; set; }
        public Social Social { get; set; } = new Social();
        public string Level { get; set; }
    }
}