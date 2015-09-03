namespace FT.DAL
{
    public interface ILegacyDataAccess
    {
        int RandomizeAllReceiptTotalsUsingStoredProcedure();
        FundReceiptDetail Get(int receiptId);
    }
}