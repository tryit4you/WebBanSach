using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebBanSach.Startup))]
namespace WebBanSach
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            
        }
    }
}
