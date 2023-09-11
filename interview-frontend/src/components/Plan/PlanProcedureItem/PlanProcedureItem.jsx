import React, { useState, useEffect } from "react";
import ReactSelect from "react-select";
import {
    addUserToPlan, getPlanProcedureUsers
} from "../../../api/api";

const PlanProcedureItem = ({ planProcedure, procedure, users }) => {
    const [selectedUsers, setSelectedUsers] = useState(null);
    useEffect(() => {
        (async () => {
            var userOptions = [];
            setSelectedUsers(null);
            console.log(procedure.procedureId + planProcedure.planId);
            var UsersfromPLan = await getPlanProcedureUsers(planProcedure.planId, planProcedure.procedureId);
            console.log(UsersfromPLan);
            for (var i = 0; i < UsersfromPLan.length; i++) {
                userOptions.push({ label: UsersfromPLan[i].name, value: UsersfromPLan[i].userId });

            }
            console.log(userOptions);
            setSelectedUsers(userOptions);
            console.log(selectedUsers);
            console.log(users);

        })();
    }, [planProcedure]);

    const handleAssignUserToProcedure = async (e) => {
        setSelectedUsers(e);
        //setselectedProcedureid(procedure);
        // TODO: Remove console.log and add missing logic

        var userOptions = [];
        console.log(typeof (userOptions));
        if (e.length > 0) {
            console.log(e);
            e.map((e) => userOptions.push({ label: e.label, value: e.value }));
            console.log(userOptions);
            await addUserToPlan(userOptions, planProcedure);
        }

    };



    return (
        <div className="py-2">
            <div>
                {procedure.procedureTitle}
            </div>

            <ReactSelect
                className="mt-2"
                placeholder="Select User to Assign"
                isMulti={true}
                options={users}
                value={selectedUsers}
                onChange={(e) => handleAssignUserToProcedure(e)}
            />
        </div>
    );
};

export default PlanProcedureItem;
