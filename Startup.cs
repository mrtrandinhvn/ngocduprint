using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(NgocDuPrint.Startup))]
namespace NgocDuPrint
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
