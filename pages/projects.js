import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Center
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'

import thumbChatBot from '../public/images/works/chatbot.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'

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

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <ProjectGridItem
            id="walknote"
            title="Walknote"
            thumbnail={thumbWalknote}
          >
            Music recommendation app for iOS
          </ProjectGridItem>
        </Section>

        <Section>
          <ProjectGridItem
            id="chatbot"
            title="ChatBot"
            thumbnail={thumbChatBot}
          >
            bababoye
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem
            id="walknote"
            title="Walknote"
            thumbnail={thumbWalknote}
          >
            Music recommendation app for iOS
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Projects
