using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CharlestonPride.Portal.Models;
using Cosmonaut;
using Microsoft.Extensions.Logging;

namespace CharlestonPride.Portal.Controllers
{
  
  public class DirectorsController : CosmosEntityBaseController<Director> {
    public DirectorsController(ILogger<Director> logger, ICosmosStore<Director> cosmosStore) 
      : base(logger, cosmosStore, Director.EnvironmentId) { }

    public override async Task<IEnumerable<Director>> GetAsync()
    {
      var result = await base.GetAsync();
      return result.OrderByDescending(d => d.Executive).ThenBy(d => d.Order).ThenBy(d => d.DateElectedToBoard).ToList();
    }
  }

}