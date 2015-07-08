using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BookmakerRip.Models;
using BookmakerRip.Repositories;
using BookmakerRip.Services.Base;
using MongoDB.Driver;
using MongoDB.Driver.Linq;

namespace BookmakerRip.Services
{
    public class CashService :ServiceBase
    {
        private readonly CashRepository _cashRepository;
        private readonly BookmakerRepository _bookmakerRepository;

         public CashService()
        {
             _bookmakerRepository = new BookmakerRepository();
             _cashRepository = new CashRepository();
        }
        public void AddCash(Cash cash)
        {
            var bookmaker = _bookmakerRepository.GetById(cash.BookmakerId);
            bookmaker.TotalAmount += cash.Amount;
            bookmaker.Deposits.Add(cash);
            _bookmakerRepository.Update(bookmaker);
            _cashRepository.Insert(cash);
        }

        public List<Cash> GetDepositsForBookmaker(string bookmakerId)
        {
            ;
            var list = _cashRepository.GetDepositsForBookmaker(bookmakerId).ToList();
            return list;
        }
    }
}