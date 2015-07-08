using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookmakerRip.Models
{
    public class Cash
    {
        public Cash()
        {
            Id = Guid.NewGuid().ToString();
            Date = DateTime.Now;
        }
        public string Id { get; set; }
        public string BookmakerId { get; set; }
        public double Amount { get; set; }
        public int RunThroughs { get; set; }
        public int MinOdds { get; set; }
        public DateTime Date { get; set; }   
    }
}