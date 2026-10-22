using Informator.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Informator.Infrastructure.Persistence;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<ContentEntry> ContentEntries => Set<ContentEntry>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ContentEntry>(e =>
        {
            e.HasIndex(x => new { x.WorkspaceId, x.Key }).IsUnique();
            e.Property(x => x.Key).HasMaxLength(200);
            e.Property(x => x.ValueJson).HasColumnType("jsonb");
            e.Property(x => x.Type).HasConversion<string>();
        });
    }
}
