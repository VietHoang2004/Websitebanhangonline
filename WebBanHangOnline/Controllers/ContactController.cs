﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebBanHangOnline.Controllers
{
    public class ContactController : Controller
    {
        // GET: Contact
        public ActionResult Index(string id)
        {
            return View();
        }
    }
}