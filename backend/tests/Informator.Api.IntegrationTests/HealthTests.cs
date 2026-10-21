using Microsoft.AspNetCore.Mvc.Testing;

namespace Informator.Api.IntegrationTests;

public class HealthTests(WebApplicationFactory<Program> factory) : IClassFixture<WebApplicationFactory<Program>>
{
    [Fact]
    public async Task Health_ReturnsOk()
    {
        var res = await factory.CreateClient().GetAsync("/health");
        res.EnsureSuccessStatusCode();
    }
}
