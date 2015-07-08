using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookmakerRip.Models
{
    public class MatchOption
    {
        public string Id { get; set; }  
        public string Name { get; set; }
        public List<MatchOddsOption> MatchOddsOptions { get; set; }
        public List<MatchOdds> MatchOdds { get; set; }

        public MatchOption()
        {
            Id = Guid.NewGuid().ToString();
            MatchOddsOptions = new List<MatchOddsOption>();
            MatchOdds = new List<MatchOdds>();
        }
    }
}