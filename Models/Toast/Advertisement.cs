using Cosmonaut.Attributes;

namespace CharlestonPride.Portal.Models.Toast
{
    [CosmosCollection("Advertisements")]
    public class Advertisement : PartitionedEntity
    {
        public const string EnvironmentId = "tte";

        public string Name { get; set; }
        public int Rate { get; set; }
        public string AdWidth { get; set; }
        public string AdHeight { get; set; }

        public int Remaining { get; set; }
        public int Total { get; set; }
    }
}