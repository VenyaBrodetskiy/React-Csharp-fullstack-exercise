using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FunctionApp.DTO
{
    public record ContactUsDTO
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
        public string UserName { get; set; }
    }
}
