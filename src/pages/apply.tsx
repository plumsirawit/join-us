import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Apply = (props) => {
    return <>
        You are currently applying for {props.id}.
    </>;
}
const ApplyPage = (props) => {
    return (
        <Layout>
            <SEO title="Apply" />
            <Apply id={props.location.state.id} />
        </Layout>
    );
}
export default ApplyPage;