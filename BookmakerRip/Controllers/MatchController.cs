using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using BookmakerRip.Models;
using BookmakerRip.Services;

namespace BookmakerRip.Controllers
{
    public class MatchController : ApiController
    {
        private readonly CashService _cashService;
        private readonly BookmakerService _bookmakerService;
        private MatchService _matchService;

        public MatchController()
        {
            _cashService = new CashService();
            _bookmakerService = new BookmakerService();
            _matchService = new MatchService();
        }
        public List<Match> GetMatches()
        {
            var matches = _matchService.GetMatches();
            return  matches;
        }

        public Match GetById(string id)
        {
            var match = _matchService.GetById(id);
            return match;
        }
        public List<Match> Delete(string id)
        {
            _matchService.Delete(id);
            return GetMatches();
        }

        [HttpPost]
        public Match AddMatch(Match match)
        {
            var newMatch = _matchService.Save(match);
            return newMatch;
        }
    }
}