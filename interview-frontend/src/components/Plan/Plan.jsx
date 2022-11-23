import React from "react";
import Example from "./Example/Example";
import Layout from "../Layout/Layout";

const Plan = () => {
    return (
        <Layout>
            <div className="container pt-4">
                <div className="d-flex justify-content-center">
                    <h2>OEC Interview Frontend</h2>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <Example />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Plan;
