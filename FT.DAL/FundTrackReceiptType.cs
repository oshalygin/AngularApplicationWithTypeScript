﻿using System.Data.Entity.ModelConfiguration.Conventions;

namespace FT.DAL
{
    public class FundTrackReceiptType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}