using MediatR;
using Microsoft.EntityFrameworkCore;
using RL.Backend.Exceptions;
using RL.Backend.Models;
using RL.Data;
using RL.Data.DataModels;
using RL.Data.Migrations;
using System.Numerics;

namespace RL.Backend.Commands.Handlers.Users
{
    public class AddUserToPlanHandler : IRequestHandler<AddUserToPlanCommand, ApiResponse<Unit>>
    {
        private readonly RLContext _context;

        public AddUserToPlanHandler(RLContext context)
        {
            _context = context;
        }

        public async Task<ApiResponse<Unit>> Handle(AddUserToPlanCommand request, CancellationToken cancellationToken)
        {
            try
            {
                //Validate request
                if (request.Name == null)
                    return ApiResponse<Unit>.Fail(new BadRequestException("Invalid Name"));
                if (request.UserId == 0)
                    return ApiResponse<Unit>.Fail(new BadRequestException("Invalid UserId"));
                if (request.ProcedureId == 0)
                    return ApiResponse<Unit>.Fail(new BadRequestException("Invalid ProcedureId"));
                if (request.PlanId == 0)
                    return ApiResponse<Unit>.Fail(new BadRequestException("Invalid PlanId"));

                var planUserAvailable = await _context.PlanUsers.FirstOrDefaultAsync(p => p.UserId == request.UserId && p.ProcedureId == request.ProcedureId && p.PlanId == request.PlanId);
                
                     
                
                //Already has the Planuser, so just succeed

                if (planUserAvailable is not null)
                    return ApiResponse<Unit>.Succeed(new Unit());

                var planUser = _context.PlanUsers.Add(new PlanUser
                {
                    ProcedureId = request.ProcedureId,
                    Name = request.Name,
                    UserId = request.UserId,
                    PlanId = request.PlanId

                });

                await _context.SaveChangesAsync();

                return ApiResponse<Unit>.Succeed(new Unit());
            }
            catch (Exception e)
            {
                return ApiResponse<Unit>.Fail(e);
            }
        }

    }
}
