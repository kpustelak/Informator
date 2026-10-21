namespace Informator.Domain.Entities;

public enum ContentType { Text, RichText, Image }

public class ContentEntry
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid WorkspaceId { get; set; }
    public required string Key { get; set; }
    public ContentType Type { get; set; }
    public required string ValueJson { get; set; }
    public int Version { get; set; } = 1;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
