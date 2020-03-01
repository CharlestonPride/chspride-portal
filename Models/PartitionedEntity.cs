using Cosmonaut;
using Cosmonaut.Attributes;
using Newtonsoft.Json;

namespace CharlestonPride.Portal.Models
{
    public class PartitionedEntity : CosmosEntity
    {
        [JsonProperty("envId")]
        [CosmosPartitionKey]
        public string EnvId { get; set; }
    }
}