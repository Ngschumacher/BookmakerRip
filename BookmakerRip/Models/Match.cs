using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookmakerRip.Models
{
    public class Match
    {
        public string Id {get; set; }
        public string Name { get; set; }
        public List<MatchOption> MatchOptions { get; set; }

        public Match()
        {
            Id = Guid.NewGuid().ToString();
            MatchOptions = new List<MatchOption>();
            
        }

    }
}