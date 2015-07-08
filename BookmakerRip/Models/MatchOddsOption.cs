using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookmakerRip.Models
{
    public class MatchOddsOption
    {
        public string Id { get; set; }
        public string Name { get; set; }

        public MatchOddsOption()
        {
            Id = Guid.NewGuid().ToString();
        }
    }
}