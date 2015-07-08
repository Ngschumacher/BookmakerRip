using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BookmakerRip.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Test
{
    [TestClass]
    public class BookmakerServiceTest
    {
        public List<Bookmaker> Createbookmakers()
        {
            return new List<Bookmaker>()
            {
                new Bookmaker()
                {
                    Id = "1",
                    Name = "bet365"
                },
                new Bookmaker()
                {
                    Id = "2",
                    Name = "Unibet"
                },
                new Bookmaker()
                {
                    Id = "3",
                    Name = "Betfair"
                },
                new Bookmaker()
                {
                    Id = "4",
                    Name = "Betsafe"
                }
            };
        }

        [TestMethod]
        public void GetMatchForMatchOddsEditById_EmptyMatchOdds()
        {


            //var bookmakers = Createbookmakers();
            //var match = new BookmakerRip.Models.Match()
            //{
            //    Id = "matchId",
            //    MatchOptionOdds = new List<MatchOdds>()
            //};



        }
    }
}
