using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CharlestonPride.Portal.Models;
using Cosmonaut;
using Cosmonaut.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Microsoft.Extensions.Logging;

namespace CharlestonPride.Portal.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class DirectorsController : ControllerBase
  {

    private const string EnvironmentId = "chspride";
    private readonly ILogger<DirectorsController> Logger;
    private readonly ICosmosStore<Director> CosmosStore;
    private FeedOptions Options;

    public DirectorsController(ILogger<DirectorsController> logger, ICosmosStore<Director> cosmosStore)
    {
      Logger = logger;
      CosmosStore = cosmosStore;
      Options = new FeedOptions { PartitionKey = new PartitionKey(EnvironmentId) };
    }

    [HttpGet]
    public async Task<IEnumerable<Director>> GetAsync()
    {
      var result = await CosmosStore.Query(Options).ToListAsync();
      return result.OrderByDescending(d => d.Executive).ThenBy(d => d.Order).ThenBy(d => d.DateElectedToBoard).ToList();
    }
  }

}