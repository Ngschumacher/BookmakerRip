using System;
using System.Collections.Generic;
using System.Data.Entity;
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
    public class BookmakerRepository : RepositoryBase
    {
        private readonly MongoCollection<Bookmaker> _bookmakerCollection;
        public BookmakerRepository()
        {
            _bookmakerCollection =  Database.GetCollection<Bookmaker>("Bookmakers");
        }
        public IEnumerable<Bookmaker> GetBookmakers()
        {
            return _bookmakerCollection.AsQueryable();
            
        }

        public void Delete(string bookmakerId)
        {
            _bookmakerCollection.Remove(Query.EQ("_id", bookmakerId));
        }

        public void Add(Bookmaker bookmaker)
        {
            _bookmakerCollection.Save(bookmaker);
        }

        public Bookmaker GetById(string bookmakerId)
        {
            return _bookmakerCollection.AsQueryable().FirstOrDefault(x => x.Id == bookmakerId);
        }

        public void Update(Bookmaker bookmaker)
        {
            _bookmakerCollection.Save(bookmaker);
        }
    }
}