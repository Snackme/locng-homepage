import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: BeforeUnloadEvent;
  font-size: 18px;
  display: inline-flex;
  align-items:center;
  height:30px
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform:rotate(50deg);
  }
`
const Logo = () => {
  const nameLogo = `/images/catmotorcycle${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={nameLogo} width={20} height={20} alt="logo"></Image>
          <Text
            color={useColorModeValue('gray.800', 'whiteaAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}>
            Loc Nguyen
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo