using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BookmakerRip.Models;
using BookmakerRip.Repositories;

namespace BookmakerRip.Services
{
    public class MatchService
    {
        private readonly CashRepository _cashRepository;
        private readonly BookmakerRepository _bookmakerRepository;
        private MatchRepository _matchRepository;

        public MatchService()
        {
             _bookmakerRepository = new BookmakerRepository();
             _cashRepository = new CashRepository();
             _matchRepository = new MatchRepository();
        }

        public List<Match> GetMatches()
        {
            return _matchRepository.GetMatches().ToList();
        }

        public Match GetById(string matchId)
        {
            return _matchRepository.GetById(matchId);
        }

        public Match Save(Match match)
        {
            return _matchRepository.Save(match);
        }

        public MatchOdds AddMatchOdds(string matchId, MatchOdds matchOdds)
        {
            var bookmaker = _bookmakerRepository.GetById(matchOdds.BookmakerId);
            matchOdds.BookmakerName = bookmaker.Name;
            _matchRepository.AddMatchOdds(matchId, matchOdds);


            return matchOdds;
        }

        public void Delete(string id)
        {
            _matchRepository.Delete(id);
        }
    }
}