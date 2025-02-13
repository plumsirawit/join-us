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
    PseudoBox,
    useToast,
} from "@chakra-ui/core";

import { navigate } from "gatsby";

const submitHandlerURL =
    "https://asia-east2-join-plummmm.cloudfunctions.net/submitApplication";

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
                <Button onClick={promptFileUpload} height="2rem">
                    Select File
                </Button>
                <Text textAlign="right" width="100%" pr="0.5rem">
                    {props.file?.name}
                </Text>
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
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const toast = useToast();
    const submitApplication = () => {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("name", name);
        formData.append("statement", statement);
        formData.append("file", file);
        setIsLoading(true);
        console.log("Submitting");
        fetch(submitHandlerURL, {
            method: "POST",
            mode: "cors",
            body: formData,
        })
            .then((res) => {
                setIsLoading(false);
                if (res.ok) {
                    toast({
                        title: "Application submitted.",
                        description: "Your application will be processed soon.",
                        status: "success",
                        duration: 5000,
                        isClosable: false,
                    });
                } else if (res.status >= 400 && res.status < 500) {
                    toast({
                        title: "Invalid data.",
                        description: `The server responded with status ${res.status}: ${res.statusText}.`,
                        status: "error",
                        duration: 5000,
                        isClosable: false,
                    });
                } else if (res.status >= 500) {
                    toast({
                        title: "Internal server error.",
                        description: `The server responded with status ${res.status}: ${res.statusText}. Please contact the admin to report this problem.`,
                        status: "error",
                        duration: 5000,
                        isClosable: false,
                    });
                }
            })
            .catch((err) => {
                setIsLoading(false);
                toast({
                    title: "Fetch error.",
                    description: `Fetch responded with ${err}. Please contact the admin to report this problem.`,
                    status: "error",
                    duration: 5000,
                    isClosable: false,
                });
            });
    };
    const theme = useTheme();
    return (
        <>
            <CenterFlex
                backgroundColor={theme.colors.gray[700]}
                paddingTop="5vh"
                paddingBottom="5vh"
                minHeight="100vh"
            >
                <Box
                    backgroundColor={theme.colors.white}
                    p="3vmin"
                    w="80vmin"
                    h="100%"
                    borderWidth="1px"
                    rounded="lg"
                    overflow="hidden"
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
                    <FormControl isRequired>
                        <FormLabel htmlFor="statement">
                            Describe your proficiencies in related field
                        </FormLabel>
                        <Textarea
                            h="15vmin"
                            placeholder="What exceptional work have you done in software, hardware, marketing, management or other involved areas?"
                            value={statement}
                            onChange={handleStatementChange}
                            resize="none"
                        />
                        <FormHelperText id="statement-helper-text">
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
                        <Button
                            isLoading={isLoading}
                            loadingText="Submitting"
                            variantColor="teal"
                            onClick={submitApplication}
                        >
                            Apply
                        </Button>
                    </CenterFlex>
                </Box>
            </CenterFlex>
        </>
    );
};
const ApplyPage = (props) => {
    const id = props?.location?.state?.id;
    const name = props?.location?.state?.name;
    useEffect(() => {
        if (!id) navigate("/");
    });
    return (
        <Layout>
            <SEO title="Apply" />
            {id && <Apply id={id} name={name} />}
        </Layout>
    );
};
export default ApplyPage;
