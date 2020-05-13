import React, { useState, useEffect, createRef } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import CenterFlex from "../components/CenterFlex";

import {
    Box,
    Flex,
    Button,
    useTheme,
    Heading,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Textarea,
    Text,
    PseudoBox
} from "@chakra-ui/core";

import { navigate } from "gatsby";

const FileInput = (props) => {
    const fileInputRef = createRef<HTMLInputElement>();
    const promptFileUpload = () => {
        fileInputRef.current.click();
    };
    const trackFiles = (files) => {
        props.setFile(files[0]);
    };
    return (
        <FormControl>
            <FormLabel>Attach CV/Resume (optional)</FormLabel>
            <br />
            <input
                ref={fileInputRef}
                style={{ visibility: "hidden", position: "absolute" }}
                type="file"
                id="cvfile"
                name="cvfile"
                onChange={(e) => trackFiles(e.target.files)}
                accept=".pdf,.jpg,.jpeg,.png"
            />
            <Input as="div" p="0.5rem" height="auto">
                <Button onClick={promptFileUpload} height="2rem">Select File</Button>
                <Text textAlign="right" width="100%" pr="0.5rem">{props.file?.name}</Text>
            </Input>
            <FormHelperText>
                Only PDF, JPG and PNG formats will be accepted.
            </FormHelperText>
        </FormControl>
    );
};

const Apply = (props) => {
    const [email, setEmail] = useState<string>("");
    const handleEmailChange = (evt) => {
        evt.preventDefault();
        if (evt.target.value.length <= 128) setEmail(evt.target.value);
    };
    const [name, setName] = useState<string>("");
    const handleNameChange = (evt) => {
        evt.preventDefault();
        if (evt.target.value.length <= 32) setName(evt.target.value);
    };
    const [statement, setStatement] = useState<string>("");
    const handleStatementChange = (evt) => {
        evt.preventDefault();
        if (evt.target.value.length <= 1000) setStatement(evt.target.value);
    };
    const [file, setFile] = useState<File>(null);
    const theme = useTheme();
    return (
        <>
            <CenterFlex
                backgroundColor={theme.colors.gray[700]}
                paddingTop="5vh"
                paddingBottom="5vh"
            >
                <Flex
                    backgroundColor={theme.colors.white}
                    p="3vmin"
                    w="80vmin"
                    borderWidth="1px"
                    rounded="lg"
                    overflow="hidden"
                    className="main-content"
                    flexDirection="column"
                    alignItems="stretch"
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
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <Input
                            type="text"
                            id="name"
                            aria-describedby="name-helper-text"
                            value={name}
                            onChange={handleNameChange}
                        />
                        <FormHelperText id="name-helper-text">
                            Enter your nickname, username or whatever you want
                            me to call you, in either Thai or English.
                            <br />
                            Maximum 32 characters.{" "}
                            {name.length === 0
                                ? ""
                                : `${32 - name.length} characters left.`}
                        </FormHelperText>
                    </FormControl>
                    <br />
                    <FormControl
                        isRequired
                        flex="1"
                        display="flex"
                        flexDirection="column"
                    >
                        <FormLabel htmlFor="email">
                            Describe your proficiencies in related field
                        </FormLabel>
                        <Textarea
                            flex="1"
                            placeholder="What exceptional work have you done in software, hardware, marketing, management or other involved areas?"
                            value={statement}
                            onChange={handleStatementChange}
                            resize="none"
                        />
                        <FormHelperText id="email-helper-text">
                            You can write in either Thai or English.
                            <br />
                            Maximum 1000 characters.{" "}
                            {statement.length === 0
                                ? ""
                                : `${1000 - statement.length} characters left.`}
                        </FormHelperText>
                    </FormControl>
                    <br />
                    <FileInput file={file} setFile={setFile} />
                    <br />
                    <CenterFlex w="100%">
                        <Button>Apply</Button>
                    </CenterFlex>
                </Flex>
            </CenterFlex>
        </>
    );
};
const ApplyPage = (props) => {
    useEffect(() => {
        if (!props?.location?.state?.id) navigate("/404");
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
