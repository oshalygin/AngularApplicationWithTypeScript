using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;

namespace FT.DAL.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<FT.DAL.FundTrackContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(FT.DAL.FundTrackContext context)
        {

            Database.SetInitializer(new DropCreateDatabaseAlways<FundTrackContext>());
            //FTSeeder.SeedData(context);

        }
    }
}

