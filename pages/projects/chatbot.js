import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="ChatBot">
    <Container>
      <Title>
        ChatBot <Badge>2022</Badge>
      </Title>
      <P>
        This was an individual portfolio assignment for DATA2410--Networking and
        Cloud Computing. The task was to create a chatroom with the programming
        language of our choosing (I chose python) with a host and some bots that
        could interact with each other through a TCP-socket.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link>
            https://github.com/Snackme/Datanettverk-og-Skytjenester-LastAssignment/blob/main/README.MD{' '}
            <ExternalLinkIcon mx="2px"></ExternalLinkIcon>
          </Link>
        </ListItem>
      </List>

      <ProjectImage src="/images/projects/chatbot.png"></ProjectImage>
    </Container>
  </Layout>
)

export default Project
