using System.ComponentModel.DataAnnotations;
using Cosmonaut.Attributes;

namespace CharlestonPride.Portal.Models
{
  [CosmosCollection("Sponsors")]
  public class Sponsor : PartitionedEntity
  {
    [Required]
    public string Name { get; set; }

    public string Tagline { get; set; }

    public Social Social { get; set; }

    [Required]
    public Levels Level { get; set; }

    public string BrandingLevel { get; set; }

    public int AdditionalSponsorship { get; set; }

    [Required]
    public Status CurrentYearStatus { get; set; }

    public PriorYear Year2019 { get; set; }
    public PriorYear Year2018 { get; set; }

    public ContactInfo PointOfContact { get; set; }

    public string Description { get; set; }
    public string Notes { get; set; }

    public enum Levels
    {
      Red,
      Orange,
      Yellow,
      Green,
      Blue,
      Purple
    }

    public enum Status
    {
      NotContacted,
      Contacted,
      Followup,
      Confirmed,
      Paid,
      Completed
    }

    public class PriorYear
    {
      public Levels Level { get; set; }

      public string Notes { get; set; }

      public string BrandingLevel { get; set; }
      public int AdditionalSponsorship { get; set; }
    }
  }
}