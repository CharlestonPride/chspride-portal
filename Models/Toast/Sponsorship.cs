using Cosmonaut.Attributes;

namespace CharlestonPride.Portal.Models.Toast
{
    [CosmosCollection("Sponsorships")]
    public class Sponsorship: PartitionedEntity
    {
        public const string EnvironmentId = "tte";
        
        public string Title { get; set; }
        public string Description { get; set; }
        public int Rate { get; set; }
        public int Remaining { get; set; }
        
        public int Tickets { get; set; }
        public int VipTickets { get; set; }
        
        #region Marketing
        public bool LogoOnPrideWebsite { get; set; } = false;
        public int SocialMediaPosts { get; set; } = 1;
        public bool TelevisionMarketing { get; set; } = false;
        public bool EmailMarketing { get; set; } = false;
        public bool PrintMarketing { get; set; } = false;
        public bool RadioMarketing { get; set; } = false;
        public bool FeaturedOnStage { get; set; } = false;
        #endregion

        #region Advertising
        public string GuideAdSize { get; set; }
        public string ProgramAdSize { get; set; }
        #endregion

        
        
        
        
        
        
        
    }
}
