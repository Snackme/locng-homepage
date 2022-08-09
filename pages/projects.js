import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
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
          This is where I&apos;ll be showcasing the many projects I have
          done/will do throughout my career. Feel free to click around and
          explore.
        </Paragraph>

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            School projects
          </Heading>
        </Section>

        <Section>
          <ProjectGridItem
            id="chatbot"
            title="chatBot"
            thumbnail={thumbChatBot}
          >
            Portfolio assigmnent for subject: Networking and Cloud Computing. A
            simple interactable chatbot through a TCP connection.
          </ProjectGridItem>
        </Section>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectGridItem id="" title="" thumbnail={thumbWalknote}>
              Stock project (add later)
            </ProjectGridItem>
          </Section>

          <Section>
            <ProjectGridItem id="" title="" thumbnail={thumbWalknote}>
              Stock project (add later)
            </ProjectGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Other projects (coming soon)
          </Heading>
        </Section>

      </Container>
    </Layout>
  )
}

export default Projects
