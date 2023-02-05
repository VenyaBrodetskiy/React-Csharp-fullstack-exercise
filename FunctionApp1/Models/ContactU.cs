using System;
using System.Collections.Generic;

namespace FunctionApp1.Models
{
    public partial class ContactU
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
        public string UserName { get; set; }
    }
}
