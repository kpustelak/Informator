using Informator.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Xunit;

namespace Informator.Api.IntegrationTests;

public class HealthTests(InformatorApiFactory factory) : IClassFixture<InformatorApiFactory>
{
    [Fact]
    public async Task HealthReturnsOk()
    {
        var res = await factory.CreateClient().GetAsync("/health");
        res.EnsureSuccessStatusCode();
    }

    [Fact]
    public async Task DatabaseHasNoPendingMigrations()
    {
        using var scope = factory.Services.CreateScope();
        var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

        Assert.Empty(await db.Database.GetPendingMigrationsAsync());
    }
}
