// @ts-nocheck
import * as React from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
  Stack,
  Container,
  Text,
  HStack
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

interface NavLinkProps {
  children: React.ReactNode
  href: string
  onClick?: () => void
}

const NavLink = ({ children, href, onClick }: NavLinkProps) => (
  <Link to={href.replace('#', '')}>
    <Box
      px={2}
      py={1}
      rounded="md"
      fontSize={{ base: "md", md: "lg" }}
      fontWeight="medium"
      color={useColorModeValue('gray.800', 'sage.50')}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.100', 'sage.800'),
        color: useColorModeValue('gray.900', 'white'),
      }}
      onClick={onClick}
    >
      {children}
    </Box>
  </Link>
)

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('white', 'sage.900')
  const borderColor = useColorModeValue('gray.200', 'sage.700')

  const Links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <Box 
      position="fixed" 
      top="0" 
      left="0" 
      right="0" 
      zIndex="sticky"
      bg={bgColor}
      borderBottom="1px"
      borderColor={borderColor}
      transition="all 0.2s"
      backdropFilter="blur(10px)"
      backgroundColor={useColorModeValue(
        'rgba(255, 255, 255, 0.8)',
        'rgba(34, 43, 35, 0.8)'
      )}
    >
      <Container maxW="container.xl">
        <Flex
          minH="60px"
          py={{ base: 2 }}
          px={{ base: 4, md: 8 }}
          align="center"
          justify="space-between"
        >
          <Flex align="center">
            <Link to="/">
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                color={useColorModeValue('gray.800', 'sage.50')}
                _hover={{
                  color: useColorModeValue('sage.600', 'sage.300'),
                }}
                cursor="pointer"
              >
                PM Portfolio
              </Text>
            </Link>
          </Flex>

          <Flex align="center">
            <IconButton
              onClick={toggleColorMode}
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              aria-label="Toggle color mode"
              variant="ghost"
              mr={{ base: 2, md: 4 }}
              size={{ base: "sm", md: "md" }}
              color={useColorModeValue('gray.800', 'sage.50')}
              _hover={{
                bg: useColorModeValue('gray.100', 'sage.800'),
              }}
            />

            <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.name} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar 