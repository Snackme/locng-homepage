import Image from 'next/image'
import {Text} from '@chakra-ui/react'
import styled from '@emotion/styled'
import Section from './section'
import Paragraph from '../components/paragraph'
const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items:center;
  height:30px
  line-height: 20px;
  padding: 20px;


  
`
const Skills = () => {
  const javaLogo = `/images/skills/java.png`
  const cLogo = `/images/skills/c-lang.png`
  const pythonLogo = `/images/skills/python-lang.png`

  const reactLogo = `/images/skills/react.png`

  return (
    <Section>
      <Section>
        <Paragraph>
          These are the languages I have somewhat mastery over
        </Paragraph>
        <LogoBox>
          <Image src={javaLogo} width={40} height={50} alt="logo"></Image>
          <Text ml={3}>Java</Text>
        </LogoBox>

        <LogoBox>
          <Image src={cLogo} width={35} height={40} alt="logo"></Image>
          <Text ml={3}>C</Text>
        </LogoBox>
      </Section>

      <Section>
        <Paragraph>
          These are the languages I&apos;m still working on mastering
        </Paragraph>
        <LogoBox>
          <Image src={reactLogo} width={40} height={40} alt="logo"></Image>
          <Text ml={3}>React</Text>
        </LogoBox>

        <LogoBox>
          <Image src={pythonLogo} width={40} height={40} alt="logo"></Image>
          <Text ml={3}>Python</Text>
        </LogoBox>
      </Section>
    </Section>
  )
}

export default Skills
