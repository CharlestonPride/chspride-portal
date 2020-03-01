using System.Collections.Generic;
using CharlestonPride.Portal.Enums;
using Cosmonaut.Attributes;

namespace CharlestonPride.Portal.Models
{
    [CosmosCollection("Sponsorships")]
    public class BrandingSponsorship : PartitionedEntity
    {
        public const string EnvironmentId = "branding";
        public bool Available { get; set; } = false;
        public List<string> Details { get; set; } = new List<string>();
        public string Event { get; set; }
        public SponsorshipLevel BaseLevel { get; set; } = SponsorshipLevel.Purple;
        public string Name { get; set; }
        public string Presenter { get; set; }
        public int Rate { get; set; } = 0;
    }
}
