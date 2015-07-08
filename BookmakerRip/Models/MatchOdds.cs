using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookmakerRip.Models
{
    public class MatchOdds
    {
        public string Id { get; set; }
        public string BookmakerId { get; set; }
        public List<Odds> Odds { get; set; }
        public string BookmakerName { get; set; }

        public double RepaymentProcent
        {
            get
            {
                var oddsSum = Odds.Sum(x => (100.00/x.Value));
                return 100/oddsSum*100;
            }
        }

        public MatchOdds(string bookmakerId, string bookmakerName) : this()
        {
            BookmakerId = bookmakerId;
            BookmakerName = bookmakerName;
            
        }

        public MatchOdds()
        {
            Id = Guid.NewGuid().ToString();
            Odds = new List<Odds>();
        }
    }
}