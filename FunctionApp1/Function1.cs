using System;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using FunctionApp1.DTO;
using FunctionApp1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Attributes;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;

namespace FunctionApp1
{
    public class Function1
    {
        private readonly ILogger<Function1> _logger;
        private readonly ReactAppDbContext _dbContext;

        public Function1(ILogger<Function1> log, ReactAppDbContext dbContext)
        {
            _logger = log;
            _dbContext = dbContext;
        }

        // example
        [FunctionName("Function1")]
        [OpenApiOperation(operationId: "Run", tags: new[] { "name" })]
        [OpenApiSecurity("function_key", SecuritySchemeType.ApiKey, Name = "code", In = OpenApiSecurityLocationType.Query)]
        [OpenApiParameter(name: "name", In = ParameterLocation.Query, Required = true, Type = typeof(string), Description = "The **Name** parameter")]
        [OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "text/plain", bodyType: typeof(string), Description = "The OK response")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req)
        {
            _logger.LogInformation("C# HTTP trigger function processed a request.");

            string name = req.Query["name"];

            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            dynamic data = JsonConvert.DeserializeObject(requestBody);
            name = name ?? data?.name;

            string responseMessage = string.IsNullOrEmpty(name)
                ? "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response."
                : $"Hello, {name}. This HTTP triggered function executed successfully.";

            return new OkObjectResult(responseMessage);
        }

        [FunctionName("games")]
        [OpenApiOperation(operationId: "GetGames", tags: new[] { "React-app-API" })]
        [OpenApiSecurity("function_key", SecuritySchemeType.ApiKey, Name = "code", In = OpenApiSecurityLocationType.Query)]
        [OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "text/plain", bodyType: typeof(string), Description = "The OK response")]
        public async Task<IActionResult> GetGames(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req)
        {
            _logger.LogInformation("C# HTTP trigger function processed a request.");

            try
            {
                var games = await _dbContext.Games
                    .Select(g => new GameDTO()
                    {
                        Id = g.Id,
                        GameName = g.GameName,
                        Year = g.Year,
                        Rating = g.Rating.RatingTitle
                    })
                    .ToListAsync();
                return new OkObjectResult(games);

            }
            catch (Exception ex)
            {
                return new BadRequestObjectResult(ex);
            }

        }

        [FunctionName("movies")]
        [OpenApiOperation(operationId: "GetGames", tags: new[] { "React-app-API" })]
        [OpenApiSecurity("function_key", SecuritySchemeType.ApiKey, Name = "code", In = OpenApiSecurityLocationType.Query)]
        [OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "text/plain", bodyType: typeof(string), Description = "The OK response")]
        public async Task<IActionResult> GetMovies(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req)
        {
            _logger.LogInformation("C# HTTP trigger function processed a request.");

            var movies = await _dbContext.Movies
                .Select(m => new MovieDTO()
                {
                    Id = m.Id,
                    MovieName = m.MovieName,
                    Year = m.Year,
                    Rating = m.Rating.RatingTitle
                })
                .ToListAsync();

            return new OkObjectResult(movies);
        }
    }
}

