﻿using System;
using System.Collections.Generic;

namespace FunctionApp.Models
{
    public partial class ContactUs
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
        public string UserName { get; set; }
    }
}
