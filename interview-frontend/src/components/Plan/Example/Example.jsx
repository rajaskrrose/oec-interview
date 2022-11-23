import React, { useState, useEffect } from "react";
import ProcedureItem from "../ProcedureItem/ProcedureItem";
import {
    addProcedureToPlan,
    getPlanProcedures,
    getProcedures,
    getUsers,
} from "../../../api/api";
import PlanProcedureItem from "../PlanProcedureItem/PlanProcedureItem";
import { useParams } from "react-router-dom";

const Example = () => {
    let { id } = useParams();
    const [procedures, setProcedures] = useState([]);
    const [planProcedures, setPlanProcedures] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            var procs = await getProcedures();
            var planProcs = await getPlanProcedures(id);
            var users = await getUsers();

            var userOptions = [];
            users.map((u) =>
                userOptions.push({ label: u.name, value: u.userId })
            );

            setUsers(userOptions);
            setProcedures(procs);
            setPlanProcedures(planProcs);
        })();
    }, [id]);

    const onCheckboxChange = async (procedure) => {
        await addProcedureToPlan(id, procedure.procedureId);
        setPlanProcedures((prevState) => {
            return [
                ...prevState,
                {
                    PlanId: id,
                    ProcedureId: procedure.procedureId,
                    Procedure: {
                        ProcedureId: procedure.procedureId,
                        ProcedureTitle: procedure.procedureTitle,
                    },
                },
            ];
        });
    };

    return (
        <div className="card shadow">
            <h5 className="card-header">Example</h5>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <h4>Procedures</h4>
                        <div>
                            {procedures.map((p) => (
                                <ProcedureItem
                                    key={p.procedureId}
                                    procedure={p}
                                    onChange={onCheckboxChange}
                                    planProcedures={planProcedures}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="col">
                        <h4>Added to Plan</h4>
                        <div>
                            {planProcedures.map((p) => (
                                <PlanProcedureItem
                                    key={p.Procedure.ProcedureId}
                                    procedure={p.Procedure}
                                    onChange={onCheckboxChange}
                                    users={users}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Example;
