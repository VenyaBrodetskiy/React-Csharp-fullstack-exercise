
namespace FunctionApp.DTO
{
    public record GameDTO
    {
        public int Id { get; set; }
        public string GameName { get; set; }
        public int Year { get; set; }
        public string Rating { get; set; }
    }
}
