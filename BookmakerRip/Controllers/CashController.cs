using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using BookmakerRip.Models;
using BookmakerRip.Services;

namespace BookmakerRip.Controllers
{
    public class CashController : ApiController
    {
        private readonly CashService _cashService;
        private readonly BookmakerService _bookmakerService;
        public CashController()
        {
            _cashService = new CashService();
            _bookmakerService = new BookmakerService();
        }

        public Bookmaker AddCash(Cash cash)
        {
            _cashService.AddCash(cash);
            var bookmaker = _bookmakerService.GetById(cash.BookmakerId);
            return bookmaker;
        }

    }
}