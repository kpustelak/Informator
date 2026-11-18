using System.Net;

namespace Informator.Api.ExceptionHandling;

public class AppException : Exception
{
    public HttpStatusCode StatusCode { get; }
    public AppException(string message, HttpStatusCode statusCode = HttpStatusCode.InternalServerError)
        : base(message)
    {
        StatusCode = statusCode;
    }
}
