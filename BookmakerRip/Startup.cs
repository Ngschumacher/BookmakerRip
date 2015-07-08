using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BookmakerRip.Startup))]
namespace BookmakerRip
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
