using Informator.Application.Content;
using Informator.Domain.Entities;
using Xunit;

namespace Informator.Application.Tests;

public class ContentServiceTests
{
    private sealed class FakeRepo : IContentRepository
    {
        public List<ContentEntry> Items { get; } = [];
        public Task<IReadOnlyList<ContentEntry>> ListAsync(Guid w, CancellationToken ct) =>
            Task.FromResult<IReadOnlyList<ContentEntry>>(Items.Where(x => x.WorkspaceId == w).ToList());
        public Task<ContentEntry?> GetAsync(Guid w, Guid id, CancellationToken ct) =>
            Task.FromResult(Items.FirstOrDefault(x => x.WorkspaceId == w && x.Id == id));
        public Task AddAsync(ContentEntry e, CancellationToken ct) { Items.Add(e); return Task.CompletedTask; }
        public Task SaveChangesAsync(CancellationToken ct) => Task.CompletedTask;
    }

    [Fact]
    public async Task CreateReturnsEntryWithVersion1()
    {
        var service = new ContentService(new FakeRepo());
        var result = await service.CreateAsync(Guid.NewGuid(), new("home.title", ContentType.Text, "\"Hi\""), default);
        Assert.Equal("home.title", result.Key);
        Assert.Equal(1, result.Version);
    }
}
