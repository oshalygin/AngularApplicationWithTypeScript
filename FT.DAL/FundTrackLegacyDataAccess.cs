using System.Data.Entity;
using System.Linq;

namespace FT.DAL
{
    public class FundTrackLegacyDataAccess : IFundTrackLegacyDataAccess
    {
        private readonly FundTrackContext _context;

        public FundTrackLegacyDataAccess()
        {
            Database.SetInitializer<FundTrackContext>(null);
            _context = new FundTrackContext();
            _context.Database.Initialize(false);
        }


        public int RandomizeAllReceiptTotalsUsingStoredProcedure()
        {
            return _context.Database.ExecuteSqlCommand("EXEC [dbo].usp_RandomizeAllReceiptTotals");
        }

        public FundReceiptDetail Get(int receiptId)
        {
            return _context
                .FundReceiptDetails
                .AsNoTracking()
                .FirstOrDefault(x => x.Id == receiptId);
        }
    }
}