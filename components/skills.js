import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Section from './section'

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
  const pythonLogo = `/images/skills/python-lang.jpg`

  const reactLogo = `/images/catmotorcycle${useColorModeValue('', '-dark')}.png`
  const nextLogo = `/images/catmotorcycle${useColorModeValue('', '-dark')}.png`
  const catLogo = `/images/catmotorcycle${useColorModeValue('', '-dark')}.png`

  return (
    <Section>
      <LogoBox>
        <Image src={javaLogo} width={30} height={40} alt="logo"></Image>
        <Text
          color={useColorModeValue('gray.800', 'whiteaAlpha.900')}
          fontFamily="Noto Sans, sans-serif"
          fontWeight="bold"
          ml={3}
        >
          Java
        </Text>
      </LogoBox>

      <LogoBox>
        <Image src={cLogo} width={40} height={40} alt="logo"></Image>
        <Text
          color={useColorModeValue('gray.800', 'whiteaAlpha.900')}
          fontFamily="Noto Sans, sans-serif"
          fontWeight="bold"
          ml={3}
        >
          C
        </Text>
      </LogoBox>

      <LogoBox>
        <Image src={pythonLogo} width={70} height={40} alt="logo"></Image>
        <Text
          color={useColorModeValue('gray.800', 'whiteaAlpha.900')}
          fontFamily="Noto Sans, sans-serif"
          fontWeight="bold"
          ml={3}
        >
          Python
        </Text>
      </LogoBox>
    </Section>
  )
}

export default Skills
