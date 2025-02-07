/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/core";

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CSSReset />
            <main>{children}</main>
        </ThemeProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
