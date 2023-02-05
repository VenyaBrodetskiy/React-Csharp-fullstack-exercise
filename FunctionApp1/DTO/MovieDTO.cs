
namespace FunctionApp.DTO
{
    public record MovieDTO
    {
        public int Id { get; set; }
        public string MovieName { get; set; }
        public int Year { get; set; }
        public string Rating { get; set; }
    }
}
