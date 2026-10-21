using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;

namespace Informator.Api.Hubs;

/// <summary>Admin panel only: sends "ContentChanged(id, version)" signals, never payloads.</summary>
[Authorize]
public sealed class ContentHub : Hub;
