using Informator.Domain.Entities;

namespace Informator.Application.Content;

public interface IContentRepository
{
    Task<IReadOnlyList<ContentEntry>> ListAsync(Guid workspaceId, CancellationToken ct);
    Task<ContentEntry?> GetAsync(Guid workspaceId, Guid id, CancellationToken ct);
    Task AddAsync(ContentEntry entry, CancellationToken ct);
    Task SaveChangesAsync(CancellationToken ct);
}
