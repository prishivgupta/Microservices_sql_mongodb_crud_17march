namespace Users.Models
{
    public class UserDTO
    {
        public int UserId { get; set; }

        public string Username { get; set; } = null!;

        public string Password { get; set; } = null!;

        public string? Message { get; set; }

        public string? Token { get; set; }
    }
}
