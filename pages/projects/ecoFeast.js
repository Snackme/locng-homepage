import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ProjectGridItem } from '../../components/grid-item'

import thumbEcoFeast1 from '../../public/images/projects/ecoFeast1.png'
import thumbEcoFeast2 from '../../public/images/projects/ecoFeast2.png'
import thumbEcoFeast3 from '../../public/images/projects/ecoFeast3.png'

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
      <ProjectGridItem title="" id="" thumbnail={thumbEcoFeast1}></ProjectGridItem>
      <ProjectGridItem title="" id="" thumbnail={thumbEcoFeast2}></ProjectGridItem>
      <ProjectGridItem title="" id="" thumbnail={thumbEcoFeast3}></ProjectGridItem>
    </Container>
  </Layout>
)

export default EcoFeast
