using FluentValidation;
using Informator.Application.Content;
using Microsoft.Extensions.DependencyInjection;

namespace Informator.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddScoped<IContentService, ContentService>();
        services.AddValidatorsFromAssemblyContaining<IContentService>();
        return services;
    }
}
