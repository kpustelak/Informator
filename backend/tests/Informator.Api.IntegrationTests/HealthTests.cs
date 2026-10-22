using Microsoft.AspNetCore.Mvc.Testing;
using Xunit;

namespace Informator.Api.IntegrationTests;

public class HealthTests(WebApplicationFactory<Program> factory) : IClassFixture<WebApplicationFactory<Program>>
{
    [Fact]
    public async Task HealthReturnsOk()
    {
        var res = await factory.CreateClient().GetAsync("/health");
        res.EnsureSuccessStatusCode();
    }
}
