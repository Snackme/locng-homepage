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
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform:rotate(30deg);
  }
`
const Skills = () => {
  const javaLogo = `/images/skills/java${useColorModeValue('', '-dark')}.png`
  const cLogo = `/images/catmotorcycle${useColorModeValue('', '-dark')}.png`
  const pythonLogo = `/images/catmotorcycle${useColorModeValue(
    '',
    '-dark'
  )}.png`

  const reactLogo = `/images/catmotorcycle${useColorModeValue('', '-dark')}.png`
  const nextLogo = `/images/catmotorcycle${useColorModeValue('', '-dark')}.png`
  const catLogo = `/images/catmotorcycle${useColorModeValue('', '-dark')}.png`

  return (
    <Section>
      <LogoBox>
        <Image src={javaLogo} width={28} height={40} alt="logo"></Image>
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
        <Image src={javaLogo} width={28} height={40} alt="logo"></Image>
        <Text
          color={useColorModeValue('gray.800', 'whiteaAlpha.900')}
          fontFamily="Noto Sans, sans-serif"
          fontWeight="bold"
          ml={3}
        >
          Java
        </Text>
      </LogoBox>
    </Section>
    
  )
}

export default Skills
