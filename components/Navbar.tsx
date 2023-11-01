import { Container, Flex, Heading } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
    return (
        <Container maxW={"1200px"} py={4}>
        <Flex direction={"row"} justifyContent={"space-between"}>
            <Heading>Dojo Energy Pool</Heading>
            <ConnectWallet /> 
        </Flex>
        </Container>
    )
}