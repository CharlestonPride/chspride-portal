using Cosmonaut.Attributes;

namespace CharlestonPride.Portal.Models
{
    [CosmosCollection("Settings")]
    public class Setting : PartitionedEntity
    {
        public bool Enabled { get; set; }
    }
}