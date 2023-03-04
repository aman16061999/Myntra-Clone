import { Box, Image } from "@chakra-ui/react";
import React from "react";
const LoadingPage = () => {
  return <div>
    <Box position={"fixed" } top={"50%"}  left={"50%"} transform={"translate(-50% , -50%)"}>
         <Image w={"200px"} m={"auto"} align={"center"} src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif' alt="loading" />
    </Box>
  </div>;
};

export default LoadingPage;
