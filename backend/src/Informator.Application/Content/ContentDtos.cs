using Informator.Domain.Entities;

namespace Informator.Application.Content;

public sealed record CreateContentRequest(string Key, ContentType Type, string ValueJson);

public sealed record ContentEntryResponse(
    Guid Id, string Key, ContentType Type, string ValueJson, int Version, DateTime UpdatedAt);
