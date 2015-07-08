using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using BookmakerRip.Models;
using BookmakerRip.Repositories;
using BookmakerRip.Services.Base;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using MongoDB.Driver.Linq;
using WebGrease.Css.Extensions;


namespace BookmakerRip.Services
{
    public class BookmakerService : ServiceBase
    {
        private readonly BookmakerRepository _bookmakerRepository;
        private readonly MatchRepository _matchRepository;
        private readonly CashRepository _cashRepository;

        public BookmakerService()
        {
           _bookmakerRepository = new BookmakerRepository();
           _matchRepository = new MatchRepository();
           _cashRepository = new CashRepository();
        }

        public bool Insert(Bookmaker bookmaker)
        {

            _bookmakerRepository.Add(bookmaker);
            return true;
        }

        public List<Bookmaker> GetBookmakers()
        {
            var query = _bookmakerRepository.GetBookmakers();

            foreach (var bookmaker in query)
            {
                bookmaker.Deposits = _cashRepository.GetDepositsForBookmaker(bookmaker.Id).ToList();
            }
           
            // (bookmaker =>
            //{

            //    var list = _cashRepository.GetDepositsForBookmaker(bookmaker.Id).ToList();

            //    bookmaker.Deposits = _cashRepository.GetDepositsForBookmaker(bookmaker.Id).ToList();
                
            //});

            return query.ToList();
        }

        public void DeleteBookmakerById(string bookmakerId)
        {
            _bookmakerRepository.Delete(bookmakerId);
            _cashRepository.DeleteByBookmakerId(bookmakerId);

        }
      
        public Bookmaker GetById(string id)
        {
            return _bookmakerRepository.GetById(id);
        }
    }
}