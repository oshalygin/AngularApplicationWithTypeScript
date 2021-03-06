﻿using System.Data.Entity;
namespace FT.DAL
{
    public abstract class BaseDomainContext : DbContext
    {
        static BaseDomainContext()
        {
            // This is a hack to ensure that Entity Framework SQL Provider is copied across to the output folder.
            // As it is installed in the GAC, Copy Local does not work. It is required for probing.
            // Fixed "Provider not loaded" error
            var ensureDLLIsCopied = System.Data.Entity.SqlServer.SqlProviderServices.Instance;
        }
    }
}
