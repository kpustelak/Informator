using Informator.Domain.Entities;

namespace Informator.Application.Content;

public interface IContentService
{
    Task<IReadOnlyList<ContentEntryResponse>> ListAsync(Guid workspaceId, CancellationToken ct);
    Task<ContentEntryResponse> CreateAsync(Guid workspaceId, CreateContentRequest request, CancellationToken ct);
}

public sealed class ContentService(IContentRepository repository) : IContentService
{
    public async Task<IReadOnlyList<ContentEntryResponse>> ListAsync(Guid workspaceId, CancellationToken ct) =>
        (await repository.ListAsync(workspaceId, ct)).Select(ToResponse).ToList();

    public async Task<ContentEntryResponse> CreateAsync(
        Guid workspaceId, CreateContentRequest request, CancellationToken ct)
    {
        var entry = new ContentEntry
        {
            WorkspaceId = workspaceId,
            Key = request.Key,
            Type = request.Type,
            ValueJson = request.ValueJson,
        };
        await repository.AddAsync(entry, ct);
        await repository.SaveChangesAsync(ct);
        return ToResponse(entry);
    }

    private static ContentEntryResponse ToResponse(ContentEntry e) =>
        new(e.Id, e.Key, e.Type, e.ValueJson, e.Version, e.UpdatedAt);
}
