#############################################
### Entity Framework core useful commands ###
#############################################
## All Commands in here are meant to be run from the command line, from one of the project folders.
## https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/?tabs=dotnet-core-cli ##

-Interview 
--RL.Backend <-- Run commands from here
--RL.BackendUnitTests
--RL.Data <-- Run commands from here

### Add Migration ###
# Allows you to create a new migration based on the changes made to the data model
dotnet ef migrations add InitialCreate --startup-project ..\RL.Backend\RL.Backend.csproj --project ..\RL.Data\RL.Data.csproj --context RLContext --output-dir Migrations

### Apply Migration ###
# Applies the latest migration to the SQL Lite database found in the RL.Backend project 
dotnet ef database update --startup-project ..\RL.Backend\RL.Backend.csproj --project ..\RL.Data\RL.Data.csproj --context RLContext 