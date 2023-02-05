using FunctionApp1.Models;
using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;

[assembly: FunctionsStartup(typeof(FunctionApp1.StartUp))]

namespace FunctionApp1
{
    class StartUp : FunctionsStartup
    {
        public override void Configure(IFunctionsHostBuilder builder)
        {
            string connectionString = Environment.GetEnvironmentVariable("SqlConnectionStringForReactAppAzureFunctions");
            builder.Services.AddDbContext<ReactAppDbContext>(
                options => SqlServerDbContextOptionsExtensions.UseSqlServer(options, connectionString));
        }
    }
}
