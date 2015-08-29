﻿using System;
using System.Data.Entity;
using FT.Models;

namespace FT.DAL
{
    public class FundTrackContext : DbContext

    {
        public FundTrackContext()
            : base("DefaultConnection")
        {
        }

        public DbSet<FundTrackReceipt> FundTrackReceipts { get; set; }

        public DbSet<FundTrackReceiptComment> FundTrackReceiptComments { get; set; }

        public DbSet<FundTrackReceiptType> FundTrackReceiptTypes { get; set; }

        public DbSet<FundTrackSubservicer> FundTrackSubservicers { get; set; }

        public DbSet<FundReceiptDetail> FundReceiptDetails { get; set; }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<FundTrackReceipt>()
                .HasRequired(x => x.Type);

            modelBuilder.Properties<DateTime>()
                .Configure(x => x.HasColumnType("datetime2"));
        }
    }
}