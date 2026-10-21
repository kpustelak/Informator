using Informator.Application.Content;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Informator.Api.Controllers;

[ApiController]
[Authorize]
[Route("v1/workspaces/{workspaceId:guid}/content")]
public sealed class ContentController(IContentService service) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<ContentEntryResponse>>> List(Guid workspaceId, CancellationToken ct) =>
        Ok(await service.ListAsync(workspaceId, ct));

    [HttpPost]
    public async Task<ActionResult<ContentEntryResponse>> Create(
        Guid workspaceId, CreateContentRequest request, CancellationToken ct)
    {
        var created = await service.CreateAsync(workspaceId, request, ct);
        return CreatedAtAction(nameof(List), new { workspaceId }, created);
    }
}
