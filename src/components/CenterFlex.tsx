import React from 'react';
import { Flex } from '@chakra-ui/core';
export const CenterFlex = (props) => {
    return <Flex
        flexDirection="column"
        {...props}
        display="flex"
        alignItems="center"
        justifyContent="center"
    />;
}
export default CenterFlex;