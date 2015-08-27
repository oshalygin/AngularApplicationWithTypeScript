namespace FT.DAL
{
    public interface IFundTrackLegacyDataAccess
    {
        int RandomizeAllReceiptTotalsUsingStoredProcedure();
        FundReceiptDetail Get(int receiptId);
    }
}