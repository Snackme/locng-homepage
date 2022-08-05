import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { Head } from 'next/document'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { WorkGridItem } from '../components/layouts/grid-item'

const Projects = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects ッ
      </Heading>
      <Paragraph>
        This is where I&apos;ll be showcasing the many projects I have done/will
        do throughout my career. Feel free to click around and explore.
      </Paragraph>

      <Section>
        <Heading as="h3" variant="section-title" align="center">
          School-projects
        </Heading>
      </Section>

      <Section>
        <Heading as="h3" variant="section-title" align="center">
          Personal projects
        </Heading>
      </Section>

      <Section>
        <Heading as="h3" variant="section-title" align="center">
          Work
        </Heading>
      </Section>
    </Container>
  )
}

export default Projects
