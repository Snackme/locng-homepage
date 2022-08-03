import Head from "next/head";
import { Box, Container } from "@chakra-ui/react"

const Main = ({children}) => {
    return(
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device=width, initial-scale=1"></meta>
                <title>Loc Nguyen - Homepage</title>
            </Head>

            <Container maxW="container.ms" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main