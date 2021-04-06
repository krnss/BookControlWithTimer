﻿using BookControlWithTimer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BookControlWithTimer.Controllers
{
    public class HomeController : Controller
    {
        List<Book> books = new List<Book>() { 
            new Book() { Name = "first", Autor = "Autoridze", Description = "qwe eew  h trh sf" },
            new Book() { Name = "seco", Autor = "Autoferz", Description = "qwegerh rt jrh443f" },
            new Book() { Name = "roz", Autor = "Autoridze", Description = "qweger  3 t3t erger" }
        };
        public ActionResult Index()
        {            
            return View(books);
        }        
    }
}