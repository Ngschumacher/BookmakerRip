using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;
using BookmakerRip.Models;
using BookmakerRip.Services;

namespace BookmakerRip.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public void MongoFix()
        {
            
        }
    }
}