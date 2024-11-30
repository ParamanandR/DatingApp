using API.Controllers;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;

namespace API;
public class BuggyController(DataContext context): BaseApiController
{
    [HttpGet("auth")]
    public ActionResult<string> GetAuth()
    {
        return "Secret text";
    }

    [HttpGet("not-found")]
    public ActionResult<AppUser> GetNotFound()
    {
        var thing = context.Users.Find(-1);
        if (thing ==null) return NotFound();
        return thing;
    }
    [HttpGet("server-error")]
    public ActionResult<AppUser> GetServerError()
    {
            var thing = context.Users.Find(-1) ?? throw new Exception("A bad thing has happend");
            return thing;
    }

      [HttpGet("bad-request")]
    public ActionResult<string> GetBadRequest()
    {
        return BadRequest("This was not a good request");
    }

}