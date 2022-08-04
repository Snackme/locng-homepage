import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'

const Page = () => {
  const pic = `/images/catmotorcycle${useColorModeValue('', '-dark')}.png`
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")} p={3} mb={6} textalign="center">
        Hello! I&apos;m Loc. Welcome to my page!
      </Box>

      <Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Loc Nguyen
            </Heading>
            <p>
              Computer Science student specializing in ( Java / C / Python )
            </p>
          </Box>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textalign="center"
        >
          <Box

            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              src={pic}
              borderColor={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              
              alt="Profile Image"
              width="100px"
              height="100px"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
