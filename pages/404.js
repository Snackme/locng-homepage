import NextLink from "next/link"
import {
    Box,
    Heading,
    Text, Container, Divider, Button
} from "@chakra-ui/react"

const NotFound =() => {
    return (
        <Container>
            <Heading as="h1">Not Found</Heading>
            <Divider my={6}></Divider>
            <Text align="center">The page you&apos;re looking for was not found</Text>
            <Text align="center">(most likely it&apos;s still a build in progress)</Text>
            <Divider my={6}></Divider>
            <Box my={6} align="left">
                <NextLink href="/" passHref>
                    <Button colorScheme="blue">Return to home</Button>
                </NextLink>
            </Box>
        </Container>
    )
}
export default NotFound