﻿namespace Hypomos.Api.Controllers
{
    public class WhoAmI
    {
        public bool IsLoggedIn { get; set; }
        public WhoAmIDetails UserDetails { get; set; }
    }
}