using Cosmonaut;
using Cosmonaut.Attributes;
using Newtonsoft.Json;

namespace CharlestonPride.Portal.Models
{
    [CosmosCollection("Settings")]
    public class Setting : CosmosEntity
    {
        [JsonProperty("envId")]
        [CosmosPartitionKey]
        public string EnvId { get; set; }
    }
}