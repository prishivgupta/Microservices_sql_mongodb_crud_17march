using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Users.Models;
using JwtRegisteredClaimNames = System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames;

namespace Users.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private readonly UserContext _context;
        private readonly IConfiguration _configuration;

        public AuthController(UserContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        private string GetToken(User user)
        {
            // extra layer of protection using claims
            var tokenClaims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                new Claim("UserId", user.UserId.ToString() )

            };



            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:key"]));
            var signin = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(_configuration["Jwt:Issuer"],
                _configuration["jwt:Audience"],
                tokenClaims,
                expires: DateTime.Now.AddMinutes(24000),
                signingCredentials: signin);

            return new JwtSecurityTokenHandler().WriteToken(token);

        }

        [HttpPost]
        public async Task<ActionResult<UserDTO>> LoginUser(UserDTO user)
        {
            try
            {
                if (user != null)
                {
                    var userExist = _context.Users.Where(u => u.Username == user.Username && u.Password == user.Password).FirstOrDefault();

                    if (userExist != null)
                    {
                        user.Message = "Login Successful!";
                        user.Token = GetToken(userExist);
                        Console.WriteLine(GetToken(userExist));

                        return user;
                    }
                    else
                    {
                        throw new Exception("User doesn't exist");
                    }
                }
                else
                {
                    throw new Exception("Please enter user details!");
                }
            }
            catch (Exception loginException)
            {
                throw new Exception(loginException.Message);
            }
        }
    }
}
