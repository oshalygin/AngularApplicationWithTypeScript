

namespace FT.DAL.Migrations
{
    using System.Data.Entity.Migrations;


    internal sealed class Configuration : DbMigrationsConfiguration<FT.DAL.FundTrackContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(FT.DAL.FundTrackContext context)
        {

            //Database.SetInitializer(new DropCreateDatabaseAlways<FundTrackContext>());
            //FTSeeder.SeedData(context);

        }
    }
}

