using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BookmakerRip.Models;
using BookmakerRip.Repositories.Base;
using BookmakerRip.Services;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using MongoDB.Driver.Linq;

namespace BookmakerRip.Repositories
{
    public class CashRepository : RepositoryBase
    {
        private readonly MongoCollection<Cash> _cashCollection;
        public CashRepository()
        {
            _cashCollection = Database.GetCollection<Cash>("Cash");
        }

        public IQueryable<Cash> GetDepositsForBookmaker(string bookmakerId)
        {
            return _cashCollection.AsQueryable().Where(x => x.BookmakerId == bookmakerId);
        }

        public void Insert(Cash cash)
        {
            _cashCollection.Insert(cash);
        }

        public void DeleteByBookmakerId(string bookmakerId)
        {
            _cashCollection.Remove(Query.EQ("BookmakerId", bookmakerId));
            
        }
    }
}