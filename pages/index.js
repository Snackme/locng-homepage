import NextLink from 'next/link'
import {
  Container,
  Button,
  Box,
  Heading,
  Image,
 /* Link, */
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/layouts/bio'

const Page = () => {
  const pic = `/images/PFP${useColorModeValue('', '-dark')}.png`
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
        mb={6}
        p={3}
        textalign="center"
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <p align="center">Hello, and welcome to my page!</p>
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Loc Nguyen
          </Heading>
          <p>Computer Science student at Oslomet</p>
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
              borderColor={useColorModeValue(
                'blackAlpha.800',
                'whiteAlpha.800'
              )}
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

      <Section delay="0.1">
        <Heading as="h3" variant="section-title">
          About me.
        </Heading>
        <Section>
          <Paragraph>
            I&apos;m a computer engineer student, studying at Oslomet
            university. I am currently working towards my bachelor thesis next
            spring, by learning as much I can about computer engineering as
            possible.
          </Paragraph>
          <Paragraph>
            I am doing this by making small projects here and there in languages
            I am interested in, including this portfolio-ish page right here, in
            the hopes of one day becoming a fullstack engineer! Feel free to
            snoop around. I&apos;m also available through my various links down
            below.
          </Paragraph>
        </Section>

        <Box align="right" my={4}>
          <NextLink href="/projects">
            <Button centerIcon={<ChevronRightIcon />} colorScheme="blue">
              My projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>

        <BioSection>
          <BioYear>1999</BioYear>
          Born in Hanoi, Vietnam
        </BioSection>

        <BioSection>
          <BioYear>2019-2020</BioYear>
          Completed Military service in the Norwegian Army as second
          team-leader.
        </BioSection>

        <BioSection>
          <BioYear>2020 - present</BioYear>
          Student on a bachelor&apos;s program in Computer Science at the Oslo
          Metropolitan University
        </BioSection>
      </Section>

      <Section delay="0.3">
        <Heading as="h3" variant="section-title">
          Hobbies and interests
        </Heading>
        <Paragraph>-Hiking</Paragraph>

        <Paragraph>-Camping</Paragraph>

        <Paragraph>-Football</Paragraph>

        <Paragraph>-AI</Paragraph>

        <Paragraph>-Data-Security</Paragraph>

        <Paragraph>-SoftwareDesign and development</Paragraph>
      </Section>
    </Container>
  )
}

export default Page
