import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const EcoFeast = () => (
  <Layout title="ChatBot">
    <Container>
      <Title>
        EcoFeast <Badge>2020</Badge>
      </Title>
      <P>
        This was a group assignment for DAFE1200 Web development
        and inclusive design. This task asked me and my group to create a
        concept of an app that tackles one of UN&apos;s sustainability goals.
        Prerequisites were to only use HTML and CSS, no javascript. This was
        certainly a challenge for my and my group back in 2020, but has since
        been a valuable memory to cherish.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/s351890-Ole/Inclusive-Web-Design-Final-Assignment-/">
            https://github.com/s351890-Ole/Inclusive-Web-Design-Final-Assignment-{' '}
            <ExternalLinkIcon mx="2px"></ExternalLinkIcon>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://s351890-ole.github.io/Inclusive-Web-Design-Final-Assignment-/index.html">
          https://s351890-ole.github.io/Inclusive-Web-Design-Final-Assignment-/index.html{' '}
            <ExternalLinkIcon mx="2px"></ExternalLinkIcon>
          </Link>
        </ListItem>
      </List>
      <ProjectImage src="/images/projects/ecofeast1.png"></ProjectImage>
      <ProjectImage src="/images/projects/ecofeast2.png"></ProjectImage>
      <ProjectImage src="/images/projects/ecofeast3.png"></ProjectImage>
    </Container>
  </Layout>
)

export default EcoFeast
