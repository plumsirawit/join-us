import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { Box, Heading, useTheme, Grid, Text, Icon, Link, Code } from "@chakra-ui/core";
import CenterFlex from "../components/CenterFlex";

import "./index.css";

const DownArrow = () => {
    return (
        <>
            <Icon
                name="chevron-down"
                className="animated infinite flash"
            ></Icon>
            <Icon
                name="chevron-down"
                className="animated infinite flash delay-1"
            ></Icon>
            <Icon
                name="chevron-down"
                className="animated infinite flash delay-2"
            ></Icon>
        </>
    );
};

const Index = () => {
    const theme = useTheme();
    return (
        <>
            <CenterFlex className="main-content">
                <Heading size="2xl">Join</Heading>
                <Heading size="sm">the teams</Heading>
                <br />
                <Box w="60vmin" textAlign="left" paddingLeft="20px" borderLeftWidth="2px">
                    <Text>
                        As of the COVID-19 situation, and the fairly long
                        educational break. There are many projects where I've
                        ideated, inspired, and discussed about. As a graduated
                        science high school student, I want to create something
                        to contribute to the communities I've lived in.
                    </Text>
                    <br />
                    <Text>
                        But just only by thinking and dreaming won't be enough
                        to relay the ideas to implementation. We need extra help
                        from people who want to contribute with an aligning idea
                        with mine. So, if you are a passionate and charitable
                        developer, we want your help! Feel free to explore a
                        short list of projects below and write a team member
                        application below.
                    </Text>
                    <br />
                    <Text>
                        If you are interested in donating me instead, here is my Ethereum address:
                    </Text>
                    <br />
                    <Box w="100%" textAlign="center">
                        <Code>0xdDadf37235666D699d8f03b2002E93Eac56018e7</Code>
                    </Box>
                    <br />
                    <Text>
                        Lastly, I would like to thank everyone for the help.
                        Without your help, the projects could not be succeeded.
                        Below will be a list of interesting projects I'm
                        interested to build.
                    </Text>
                </Box>
                <br />
                <CenterFlex h="20vh">
                    <Heading size="lg">Projects List</Heading>
                    <CenterFlex h="10vh">
                        <DownArrow />
                    </CenterFlex>
                </CenterFlex>
            </CenterFlex>
            <Box
                className="main-content"
                backgroundColor={theme.colors.gray[600]}
                color={theme.colors.gray[50]}
            >
                <Box
                    h="80vh"
                >
                </Box>
                <Box
                    textAlign="center"
                    marginTop="5vmin"
                    marginLeft="auto"
                    marginRight="auto"
                >
                    <Heading>Thank you for all of your support!</Heading>
                    <br />
                    <Text>Sirawit Pongnakintr (plumsirawit)</Text>
                </Box>
            </Box>
        </>
    );
};
const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Join Us" />
            <Index />
        </Layout>
    );
};

export default IndexPage;
