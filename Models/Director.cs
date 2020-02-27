using System;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using Cosmonaut;
using Cosmonaut.Attributes;
using Newtonsoft.Json;

namespace CharlestonPride.Portal.Models
{
  [CosmosCollection("Directors")]
  public class Director : CosmosEntity
  {
    public const string EnvironmentId = "chspride";
    
    [JsonProperty("envId")]
    [CosmosPartitionKey]
    public string EnvId { get; set; }
    [Required]
    public string FirstName { get; set; }
    [Required]
    public string LastName { get; set; }

    [Required]
    public string Title { get; set; }
    public bool Executive { get; set; } = false;

    public int Order { get; set; } = 0;

    [Required]
    public DateTime DateElected { get; set; }

    public DateTime DateElectedToBoard { get; set; }

    public Pronouns Pronouns { get; set; }

    public string Bio { get; set; }
  }

  public class Pronouns
  {
    [Required]
    public string Subjective { get; set; }

    [Required]
    public string Objective { get; set; }

    [Required]
    public string Possessive { get; set; }

    public override string ToString()
    {
      return CultureInfo.CurrentCulture.TextInfo.ToTitleCase($"{Subjective}/{Objective}/{Possessive}");
    }
  }

}
