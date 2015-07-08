using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookmakerRip.Models
{
    public class Odds
    {
        public string Id { get; set; }
        public string OptionId { get; set; }
        public double Value { get; set; }
        public Bookmaker Bookmaker { get; set; }
        public Odds(string optionId, double value) : this()
        {
            OptionId = optionId;
            Value = value;
           
        }

        public Odds()
        {
            Id = Guid.NewGuid().ToString();
        }
    }
}