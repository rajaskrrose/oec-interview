## Installation

To start, read the `Installation.txt`. This will give you all the required downloads you will need to run the interview question.

## Start

To use docker to develop, run the following command from this folder:
docker-compose up -d --build

Frontend will load on url `http://localhost:3001`
Backend will load on url `http://localhost:10010`

## Additional Information

For information outline the existing backend table structure, take a look at `DataModel.PNG` in this folder

## Instructions for assignment

The objective of this assignment is to test your knowledge on some key technologies we use. We have provided a working example of a website which can:

1. Create a `Plan`
    - This happens when you click `Start` on the home page of the frontend project when it's running.
2. Load a list of procedures available for the plan
    - They load automatically when a plan is created from step 1. These procedures will show up in `Procedures` list on plans page after clicking `Start`.
3. Add procedures to the plan when the checkbox is clicked
    - Procedures are added to a plan when you click a checkbox from the `Procedures` list on the left side of the plans component.
    - After being added, the procedure checkbox will show up selected along with being added to the `Added to Plan` list on the right side of plans page

We would like you to extend the project and add the ability to `assign users to procedures` that have been added to the plan. You will notice, when a procedure is added to a plan, the front end will show a dropdown below the procedure which when clicked will display list of available users.

You will need to

1. Create table structure to store the assigned users
2. Create endpoint(s) to interact with new table structure
3. Hook up endpoint(s) to the frontend so when a user is selected, they are correctly assigned to that procedure
