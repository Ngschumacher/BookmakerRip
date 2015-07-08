using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BookmakerRip.Models;
using BookmakerRip.Repositories.Base;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using MongoDB.Driver.Linq;

namespace BookmakerRip.Repositories
{
    public class MatchRepository : RepositoryBase
    {
          private readonly MongoCollection<Match> _matchCollection;
          public MatchRepository()
        {
            _matchCollection = Database.GetCollection<Match>("Matches");
        }

        public IEnumerable<Match> GetMatches()
        {
            return _matchCollection.AsQueryable();
        }

        public Match GetById(string matchId)
        {
            return _matchCollection.AsQueryable().FirstOrDefault(x => x.Id == matchId);
        }

        public Match Save(Match match)
        {
            _matchCollection.Save(match);
            return GetById(match.Id);
        }

        public Match AddMatchOdds(string matchId, MatchOdds matchOdds)
        {
            var match = GetById(matchId);
            //match.MatchOptionOdds.Add(matchOdds);
            //Save(match);
            return match;
        }

        public void Delete(string id)
        {
            _matchCollection.Remove(Query.EQ("_id", id));
        }
    }
}