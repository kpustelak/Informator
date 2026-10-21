using Informator.Application.Content;
using Informator.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Informator.Infrastructure.Persistence;

public sealed class ContentRepository(AppDbContext db) : IContentRepository
{
    public async Task<IReadOnlyList<ContentEntry>> ListAsync(Guid workspaceId, CancellationToken ct) =>
        await db.ContentEntries.AsNoTracking()
            .Where(x => x.WorkspaceId == workspaceId).OrderBy(x => x.Key).ToListAsync(ct);

    public Task<ContentEntry?> GetAsync(Guid workspaceId, Guid id, CancellationToken ct) =>
        db.ContentEntries.FirstOrDefaultAsync(x => x.WorkspaceId == workspaceId && x.Id == id, ct);

    public async Task AddAsync(ContentEntry entry, CancellationToken ct) =>
        await db.ContentEntries.AddAsync(entry, ct);

    public Task SaveChangesAsync(CancellationToken ct) => db.SaveChangesAsync(ct);
}
