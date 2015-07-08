using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Bson;

namespace BookmakerRip.Models
{
    public class Bookmaker
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public List<Cash> Deposits { get; set; }
        public double TotalAmount { get; set; }
        public Bookmaker()
        {
            Id = Guid.NewGuid().ToString();
            Deposits = new List<Cash>();
        }
    }
}