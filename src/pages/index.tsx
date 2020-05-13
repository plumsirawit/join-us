import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { navigate } from 'gatsby';

import {
    Box,
    Heading,
    useTheme,
    Text,
    Icon,
    Code,
    Accordion,
    AccordionHeader,
    AccordionPanel,
    AccordionItem,
} from "@chakra-ui/core";
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
interface ProjectProps {
    id: string,
    name: string
}
const Project = (props : React.PropsWithChildren<ProjectProps>) => {
    const startApplication = () => {
        console.log(props.id);
        navigate(`/apply/`, { state: {id: props.id, name: props.name} });
    }
    return (
        <AccordionItem isOpen={true} onChange={() => startApplication()}>
            <AccordionHeader>
                <Box flex="1" textAlign="left">
                    {props.name}
                </Box>
                <Icon name="arrow-forward" size="24px" />
            </AccordionHeader>
            <AccordionPanel pb="2em" borderTopWidth="1px">
                {props.children}
            </AccordionPanel>
        </AccordionItem>
    );
};
const Index = () => {
    const theme = useTheme();
    return (
        <>
            <CenterFlex className="main-content">
                <Heading size="2xl" marginTop="20px">Join</Heading>
                <Heading size="sm">the teams</Heading>
                <br />
                <Box
                    w="60vmin"
                    textAlign="left"
                    paddingLeft="20px"
                    borderLeftWidth="2px"
                >
                    <Text>
                        As of the COVID-19 situation, and the fairly long
                        educational break. There are many projects where I've
                        ideated, inspired, and discussed about. As a graduated
                        student from science high school, I want to create
                        something to contribute to the communities I've lived
                        in.
                    </Text>
                    <br />
                    <Text>
                        But just only by thinking and dreaming won't be enough
                        to relay the ideas to implementation. We need extra help
                        from people who want to contribute with an aligning idea
                        with mine. So, if you are a passionate and charitable
                        developer, we want your help! Feel free to explore a
                        short list of projects below and write a team member
                        application below. If you are interested in more than
                        one project, you can also apply to multiple projects!
                    </Text>
                    <br />
                    <Text>
                        If you are interested in donating me instead, here is my
                        Ethereum address:
                    </Text>
                    <br />
                    <Box w="100%" textAlign="center">
                        <Code overflowWrap="anywhere">0xdDadf37235666D699d8f03b2002E93Eac56018e7</Code>
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
            <CenterFlex
                w="100%"
                minHeight="100vh"
                backgroundColor={theme.colors.gray[700]}
                color={theme.colors.gray[50]}
            >
                <Box w="60vmin" pt="5vh" pb="5vh" mt="5vh">
                    <Accordion>
                        <Project name="Lopoly" id="lopoly">
                            As a competitive programmer and an informatics
                            olympiad camp assistant, there are many problems
                            involving camp management. Lopoly will be the
                            complete tool to help instructors and problem
                            designers to build up contents, contests and coding
                            problems. Furthermore, Lopoly also provide a ready
                            online judge and also contestant score analysis.
                        </Project>
                        <Project name="Yaggy's Quarterly Challenge" id="yqc">
                            As a previous IOI contestant, there are only few
                            OI's to practice prior to IOI. To help facilitate
                            the practice, Yaggy's Quarterly Challenge will be a
                            platform holding 4 IOI-style contests per year.
                            Anyone can submit a problem before each round (which
                            will be selected by the moderators and coordinators
                            later). The platform will be similar to Codeforces,
                            but just different contest format and interface.
                        </Project>
                        <Project name="Fodeld" id="fodeld">
                            We want to build a better food delivery system. Due
                            to the COVID-19 crisis, we want to mitiage the
                            spread of the coronavirus. Instead of having human
                            drivers, we try to use drones instead, to prevent
                            potential spread of disease. Not only COVID-19,
                            Fodeld can also be used for delivery business
                            because it will be significantly faster than most
                            traditional vehicles.
                        </Project>
                    </Accordion>
                </Box>
                <CenterFlex marginTop="5vh" marginBottom="5vh">
                    <Box
                        textAlign="center"
                        marginLeft="5vmin"
                        marginRight="5vmin"
                    >
                        <Heading>Thank you for all of your support!</Heading>
                        <br />
                        <Text>Sirawit Pongnakintr (plumsirawit)</Text>
                    </Box>
                </CenterFlex>
            </CenterFlex>
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
