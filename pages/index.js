import { Container, Box, Heading } from '@chakra-ui/react'


const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello! I&apos;m Loc. Welcome to my page!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Loc Nguyen
          </Heading>
          <p>Computer Science student specializing in ( Java / C / Python )</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
