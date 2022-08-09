import {
  Container,
  Heading,
  SimpleGrid,
  Divider
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'

import thumbChatBot from '../public/images/projects/chatbot.png'
import thumbWalknote from '../public/images/projects/walknote_eyecatch.png'

const Projects = () => {
  return (
    <Layout>
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
            id=""
            title=""
            thumbnail={thumbWalknote}
          >
            Stock project (add later)
          </ProjectGridItem>
        </Section>

        <Section>
          <ProjectGridItem
            id="chatbot"
            title="chatBot"
            thumbnail={thumbChatBot}
          >

            bababoye
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem
            id=""
            title=""
            thumbnail={thumbWalknote}
          >
            Stock project (add later)
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
    </Layout>
  )
}

export default Projects
