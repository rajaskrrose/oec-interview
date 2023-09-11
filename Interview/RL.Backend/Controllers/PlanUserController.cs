using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using RL.Backend.Commands;
using RL.Backend.Models;
using RL.Data;
using RL.Data.DataModels;
using System.Data.Entity;

namespace RL.Backend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PlanUserController : ControllerBase
    {

        private readonly ILogger<UsersController> _logger;
        private readonly RLContext _context;
        private readonly IMediator _mediator;

        public PlanUserController(ILogger<UsersController> logger, RLContext context, IMediator mediator)
        {
            _logger = logger;
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }

        [HttpGet]
        [EnableQuery]
        public IEnumerable<PlanUser> Get()
        {
            return _context.PlanUsers;
        }

        [HttpGet("FilterPlanUserByPlanId")]
        public IEnumerable<PlanUser>? Get(int planId, int procedureId)
        {
            return _context.PlanUsers.Where(p => p.PlanId == planId && p.ProcedureId == procedureId).ToList();
        }

        [HttpPost("AddUserToPlan")]
        public async Task<IActionResult> AddUserToPlan(AddUserToPlanCommand command, CancellationToken token)
        {
            var response = await _mediator.Send(command, token);

            return response.ToActionResult();
        }
    }
}
