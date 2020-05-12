import React, { useState, useEffect } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import CenterFlex from "../components/CenterFlex";

import {
    Box,
    Button,
    useTheme,
    Heading,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Textarea
} from "@chakra-ui/core";

import "./applyCSS.css";
import { navigate } from "gatsby";

const Apply = (props) => {
    const [email, setEmail] = useState<string>("");
    const handleEmailChange = (evt) => {
        evt.preventDefault();
        if(evt.target.value.length <= 128)
            setEmail(evt.target.value);
    }
    const [name, setName] = useState<string>("");
    const handleNameChange = (evt) => {
        evt.preventDefault();
        if(evt.target.value.length <= 32)
            setName(evt.target.value);
    }
    const [statement, setStatement] = useState<string>("");
    const handleStatementChange = (evt) => {
        evt.preventDefault();
        if(evt.target.value.length <= 1000)
            setStatement(evt.target.value);
    }
    const theme = useTheme();
    return (
        <>
            <CenterFlex
                className="main-background"
                backgroundColor={theme.colors.gray[700]}
            >
                <Box
                    backgroundColor={theme.colors.white}
                    p="3vmin"
                    w="80vmin"
                    h="80vh"
                    borderWidth="1px"
                    rounded="lg"
                    overflow="hidden"
                    className="main-content"
                >
                    <Heading w="100%" textAlign="center">
                        {props.name}
                    </Heading>
                    <br />
                    <FormControl isRequired>
                        <FormLabel htmlFor="email">Email address</FormLabel>
                        <Input
                            type="email"
                            id="email"
                            aria-describedby="email-helper-text"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <FormHelperText id="email-helper-text">
                            We'll never share your email.
                        </FormHelperText>
                    </FormControl>
                    <br />
                    <FormControl isRequired>
                        <FormLabel htmlFor="email">Name</FormLabel>
                        <Input
                            type="text"
                            id="name"
                            aria-describedby="name-helper-text"
                            value={name}
                            onChange={handleNameChange}
                        />
                        <FormHelperText id="name-helper-text">
                            Enter your nickname, username or whatever you want me to call you, in either Thai or English.
                            <br />
                            Maximum 32 characters. {name.length === 0 ? "" : `${32 - name.length} characters left.`}
                        </FormHelperText>
                    </FormControl>
                    <br />
                    <FormControl isRequired>
                        <FormLabel htmlFor="email">
                            Describe your proficiencies in related field
                        </FormLabel>
                        <Textarea
                            placeholder="What exceptional work have you done in software, hardware, marketing, management or other involved areas?"
                            value={statement}
                            onChange={handleStatementChange}
                            resize="none"
                        />
                        <FormHelperText id="email-helper-text">
                            You can write in either Thai or English.
                            <br />
                            Maximum 1000 characters. {statement.length === 0 ? "" : `${1000 - statement.length} characters left.`}
                        </FormHelperText>
                    </FormControl>
                    <br />
                    <CenterFlex w="100%">
                        <Button>Apply</Button>
                    </CenterFlex>
                </Box>
            </CenterFlex>
        </>
    );
};
const ApplyPage = (props) => {
    useEffect(() =>{
        if(!props?.location?.state?.id) navigate("/404");
    });
    return (
        <Layout>
            <SEO title="Apply" />
            <Apply
                id={props?.location?.state?.id}
                name={props?.location?.state?.name}
            />
        </Layout>
    );
};
export default ApplyPage;
