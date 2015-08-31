using System;
using System.Collections.Generic;
using FT.Models;


namespace FT.DAL
{
    public static class FTSeeder
    {
        public static void SeedData(FundTrackContext context)
        {
            int NUMBER_OF_RECEIPTS = 600;
            int MAX_NUMBER_OF_COMMENTS = 20;

            var receiptList = new List<FundTrackReceipt>();


            var cenlarSubServicer = new FundTrackSubservicer
            {
                Name = "Cenlar",
                IsEnabled = true
            };

            var loanCareSubServicer = new FundTrackSubservicer
            {
                Name = "LoanCare",
                IsEnabled = true
            };

            var olegsSubServicer = new FundTrackSubservicer
            {
                Name = "Olegs Subservice",
                IsEnabled = false
            };

            var checkType = new FundTrackReceiptType
            {
                Name = "Check",
                Description =
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae scelerisque tortor. Fusce ac augue in nulla lobortis auctor fringilla id urna. Aenean eleifend metus mi, non fringilla libero tempus ac. Curabitur vitae posuere ligula, ac faucibus ex. Cras placerat est lectus, condimentum dictum est volutpat quis. Proin bibendum vel tortor sit amet lobortis. Curabitur bibendum porttitor erat vel molestie. Morbi auctor cursus nisl et posuere. Donec ac placerat mauris, quis rutrum turpis."
            };

            var wireType = new FundTrackReceiptType
            {
                Name = "Wire",
                Description =
                    "Aenean sed fringilla lectus, vitae placerat mi. Proin non ante interdum, congue metus dignissim, gravida enim. Praesent pulvinar vehicula sodales. In congue hendrerit vestibulum. Sed vitae interdum quam. Maecenas nec quam urna. Nulla sollicitudin, nisi a vulputate luctus, leo neque luctus turpis, quis ultrices mauris dui sit amet diam. Nunc imperdiet quam id lectus convallis, eget condimentum lorem consectetur. Sed dignissim bibendum ultrices. Proin in sem ac dolor vestibulum sodales a nec lacus. Praesent lectus quam, interdum a condimentum accumsan, congue in ante. Phasellus at mi euismod, mollis dui in, ornare nisl."
            };

            context.FundTrackSubservicers.Add(cenlarSubServicer);
            context.FundTrackSubservicers.Add(loanCareSubServicer);
            context.FundTrackSubservicers.Add(olegsSubServicer);
            context.FundTrackReceiptTypes.Add(checkType);
            context.FundTrackReceiptTypes.Add(wireType);
            

            var random = new Random();

            for (int i = 0; i < NUMBER_OF_RECEIPTS; i++)
            {
                var receipt = new FundTrackReceipt
                {
                    CheckNumber = string.Concat("AmeriHome:", i.ToString()),
                    ReceivedDate = new DateTime(2005, 1, 1),
                    TotalAmount = random.Next(1000000),
                    ReceiptType = i%2 == 0 ? checkType : wireType,
                    Servicer = i%3 == 0 ? cenlarSubServicer : loanCareSubServicer
                };


                if (i == 10)
                {
                    receipt.Servicer = olegsSubServicer;
                }

                receipt.Comments.AddRange(BuildCommentList(random.Next(MAX_NUMBER_OF_COMMENTS)));

                receiptList.Add(receipt);
            }


            context.FundTrackReceipts
                .AddRange(receiptList);

            context.SaveChanges();
        }

        public static List<FundTrackReceiptComment> BuildCommentList(int commentSize)
        {
            var commentList = new List<FundTrackReceiptComment>();
            for (int i = 0; i < commentSize; i++)
            {
                var comment = new FundTrackReceiptComment
                {
                    CreatedDate = DateTime.UtcNow,
                    Text = i%3 == 0
                        ? "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                        : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"
                };


                commentList.Add(comment);
            }
            return commentList;
        }
    }
}