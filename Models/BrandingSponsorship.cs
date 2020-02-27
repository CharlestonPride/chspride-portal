using System.Collections.Generic;
using CharlestonPride.Portal.Enums;
using Cosmonaut;
using Cosmonaut.Attributes;
using Newtonsoft.Json;

namespace CharlestonPride.Portal.Models
{
    [CosmosCollection("Sponsorships")]
    public class BrandingSponsorship : CosmosEntity
    {
        [JsonProperty("envId")]
        [CosmosPartitionKey]
        public string EnvId { get; set; }
        public bool Available { get; set; } = true;
        public List<string> Details { get; set; } = new List<string>();
        public string Event { get; set; }
        public SponsorshipLevels BaseLevel { get; set; } = SponsorshipLevels.Purple;
        public string Name { get; set; }
        public string Presenter { get; set; }
        public int Rate { get; set; } = 0;
    }
}
