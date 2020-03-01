using Cosmonaut.Attributes;

namespace CharlestonPride.Portal.Models.Toast
{
    [CosmosCollection("Advertisements")]
    public class Contender : PartitionedEntity
    {
        public const string EnvironmentId = "contenders";

        public string Name { get; set; }
        public string Logo { get; set; }
        public bool Active { get; set; } = false;
        public Social Social { get; set; } = new Social();
    }
}