import React, { useState } from "react";
import ReactSelect from "react-select";

const PlanProcedureItem = ({ procedure, users }) => {
    const [selectedUser, setSelectedUser] = useState(null);

    const assignUserToProcedure = (e) => {
        setSelectedUser(e.value);
    };

    return (
        <div className="py-2">
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="procedureCheckbox"
                    checked={true}
                    onChange={() =>
                        console.log("Remove procedure from plan not built")
                    }
                ></input>
                <label className="form-check-label" htmlFor="procedureCheckbox">
                    {procedure.ProcedureTitle}
                </label>
            </div>

            <ReactSelect
                className="mt-2"
                placeholder="Select User to Assign"
                isMulti={true}
                options={users}
                value={selectedUser}
                onChange={(e) => assignUserToProcedure(e)}
            />
        </div>
    );
};

export default PlanProcedureItem;
