using System;
using System.Collections.Generic;
using System.Web.Http;
using BookmakerRip.Models;
using BookmakerRip.Services;

namespace BookmakerRip.Controllers
{
    public class BookmakerController : ApiController
    {
        private readonly BookmakerService _bookmakerService;
        public BookmakerController()
        {
            _bookmakerService = new BookmakerService();
        }
        public List<Bookmaker> GetBookmakers()
        {
            var bookmakerList = _bookmakerService.GetBookmakers();

            return bookmakerList;
        }

        [HttpPost]
        public List<Bookmaker> AddBookmaker(Bookmaker bookmaker)
        {
            if (_bookmakerService.Insert(bookmaker))
            {
                return GetBookmakers();
            }

            return null;
        }
        public Bookmaker GetById(string id)
        {
            var match = _bookmakerService.GetById(id);
            return match;
        }
        public List<Bookmaker> Delete(string id)
        {
            _bookmakerService.DeleteBookmakerById(id);
            return GetBookmakers();
        }
       
        
        
    }
}