using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace Informator.Api.ExceptionHandling;

public sealed partial class GlobalExceptionHandler(
    IProblemDetailsService problemDetailsService,  ILogger<GlobalExceptionHandler> logger) : IExceptionHandler
{
    public async ValueTask<bool> TryHandleAsync(
        HttpContext httpContext,
        Exception exception,
        CancellationToken cancellationToken
        )
    {
        var (statusCode, title) = MapException(exception);
        LogUnhandledException(logger, exception, httpContext.Request.Path);


        httpContext.Response.StatusCode = statusCode;

        var problemDetails = new ProblemDetails
        {
            Status = statusCode,
            Title = title,
            Instance = httpContext.Request.Path,
            Detail = GetSafeErrorMessage(exception, httpContext)
        };

        return await problemDetailsService.TryWriteAsync(new ProblemDetailsContext
        {
            HttpContext = httpContext,
            ProblemDetails = problemDetails
        });
    }

    private static (int StatusCode, string Title) MapException(Exception exception) => exception switch
    {
        AppException appEx => ((int)appEx.StatusCode, appEx.Message),
        _ => (StatusCodes.Status500InternalServerError, "An unexpected error occurred")
    };


    private static string? GetSafeErrorMessage(Exception exception, HttpContext context)
    {
        var env = context.RequestServices.GetRequiredService<IHostEnvironment>();
        if (env.IsDevelopment())
        {
            return exception.Message;
        }

        return exception is AppException ? exception.Message : null;
    }

    [LoggerMessage(Level = LogLevel.Error, Message = "Unhandled exception for {Path}")]
    private static partial void LogUnhandledException(ILogger logger, Exception exception, PathString path);

}
