import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'

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

      <SimpleGrid columns={[1, 1]} gap={6}>
        <Section>
          <ProjectGridItem id="chat">

          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Projects
