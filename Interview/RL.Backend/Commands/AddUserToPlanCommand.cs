using MediatR;
using RL.Backend.Models;

namespace RL.Backend.Commands
{
    public class AddUserToPlanCommand : IRequest<ApiResponse<Unit>>
    {
        public string Name { get; set; }
        public int UserId { get; set; }
        public int PlanId { get; set; }
        public int ProcedureId { get; set; }
    }
}
