using Informator.Infrastructure.Persistence;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Testcontainers.PostgreSql;
using Xunit;
namespace Informator.Api.IntegrationTests;

public class InformatorApiFactory : WebApplicationFactory<Program>, IAsyncLifetime
{
    private readonly PostgreSqlContainer _postgreSqlContainer;


    public InformatorApiFactory()
    {
        _postgreSqlContainer = new PostgreSqlBuilder("postgres:17").Build();
    }

    override protected void ConfigureWebHost(IWebHostBuilder builder)
    {
        builder.UseEnvironment("Testing");
        builder.UseSetting("Jwt:Key","test-only-2nIaovCLCCFWzrrFcEzGPT");
        builder.UseSetting("ConnectionStrings:Postgres", _postgreSqlContainer.GetConnectionString());
    }

    public async Task InitializeAsync()
    {
        await _postgreSqlContainer.StartAsync();
        using var scope = base.Services.CreateScope();
        var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
        await db.Database.MigrateAsync();
    }

    async Task IAsyncLifetime.DisposeAsync()
    {
        await _postgreSqlContainer.DisposeAsync();
        await base.DisposeAsync();
    }
}
