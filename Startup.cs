using System.Collections.Generic;
using CharlestonPride.Portal.Models;
using CharlestonPride.Portal.Models.Toast;
using Cosmonaut;
using Cosmonaut.Extensions.Microsoft.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Sponsor = CharlestonPride.Portal.Models.Sponsor;
using Sponsorship = CharlestonPride.Portal.Models.Sponsorship;
using ToastSponsor = CharlestonPride.Portal.Models.Toast.Sponsor;
using ToastSponsorship = CharlestonPride.Portal.Models.Toast.Sponsorship;
using ToastAdvertisement = CharlestonPride.Portal.Models.Toast.Advertisement;

namespace CharlestonPride.Portal
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {

      services.AddControllersWithViews();

      // In production, the React files will be served from this directory
      services.AddSpaStaticFiles(configuration =>
      {
        configuration.RootPath = "client/build";
      });

      SetupCosmos(services);

      services.AddMvc()
        .AddNewtonsoftJson(options =>
        {
          options.SerializerSettings.ContractResolver =
            new CamelCasePropertyNamesContractResolver();
          options.SerializerSettings.Converters.Add(new Newtonsoft.Json.Converters.StringEnumConverter());
          options.SerializerSettings.NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore;
        });
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      else
      {
        app.UseExceptionHandler("/Error");
        // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
        app.UseHsts();
      }

      app.UseHttpsRedirection();
      app.UseStaticFiles();
      app.UseSpaStaticFiles();

      app.UseRouting();

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllerRoute(
                  name: "default",
                  pattern: "{controller}/{action=Index}/{id?}");
      });

      app.UseSpa(spa =>
      {
        spa.Options.SourcePath = "client";

        if (env.IsDevelopment())
        {
          spa.UseReactDevelopmentServer(npmScript: "start");
        }
      });
    }
    private void SetupCosmos(IServiceCollection services)
    {
      var databaseName = Configuration.GetValue<string>("CosmosDb:DatabaseName");
      var endpointUrl = Configuration.GetValue<string>("CosmosDb:Account");
      var authKey = Configuration.GetValue<string>("CosmosDb:AuthKey");
      var settings = new CosmosStoreSettings(databaseName, endpointUrl, authKey)
      {
        JsonSerializerSettings = new JsonSerializerSettings()
        {
          ContractResolver = new CamelCasePropertyNamesContractResolver(),
          Converters =  new List<JsonConverter>{new Newtonsoft.Json.Converters.StringEnumConverter()},
          NullValueHandling = NullValueHandling.Ignore
        }
      };

      //Register stores here
      services.AddCosmosStore<Director>(settings);
      services.AddCosmosStore<Sponsor>(settings);
      services.AddCosmosStore<BrandingSponsorship>(settings);
      services.AddCosmosStore<Sponsorship>(settings);
      services.AddCosmosStore<Setting>(settings);
      services.AddCosmosStore<Advertisement>(settings);
      services.AddCosmosStore<Contender>(settings);
      services.AddCosmosStore<FoodTruck>(settings);
      services.AddCosmosStore<Liquor>(settings);
      services.AddCosmosStore<ToastAdvertisement>(settings);
      services.AddCosmosStore<ToastSponsor>(settings);
      services.AddCosmosStore<ToastSponsorship>(settings);

    }
  }
}
