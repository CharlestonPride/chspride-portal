using CharlestonPride.Portal.Enums;
using Cosmonaut.Attributes;

namespace CharlestonPride.Portal.Models
{
    [CosmosCollection("Sponsorships")]
    public class Sponsorship : PartitionedEntity
    {
        
        public string Name { get; set; }
        public int Rate { get; set; } = 0;
        public int NamingRights { get; set; } = 0;
        public int MediaPosts { get; set; } = 0;
        public bool Shirt { get; set; } = false;
        public int PrismParty { get; set; } = 0;
        public bool BoothDiscount { get; set; } = false;
        public double AdSpace { get; set; } = 0.0;
        public bool VipTent { get; set; } = true;
        public bool Website { get; set; } = true;
        public bool PrideGuide { get; set; } = true;
        public bool Marketing { get; set; } = true;
        public bool ParadeEntryFeeWaived { get; set; } = true;
        public int Columns { get; set; } = 1;
        public string Color { get; set; }
        public SponsorshipLevel Level { get; set; } = SponsorshipLevel.Purple;
        
    }
}