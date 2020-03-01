using Cosmonaut.Attributes;

namespace CharlestonPride.Portal.Models.Toast
{
    [CosmosCollection("Advertisements")]
    public class FoodTruck : PartitionedEntity
    {
        public const string EnvironmentId = "trucks";
        
        public string Name { get; set; }
        public string Logo { get; set; }
        public bool Active { get; set; } = false;
        public Social Social { get; set; }
    }
}