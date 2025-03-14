import * as React from 'react'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Container,
  Collapse,
  VStack,
  Text
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

interface NavLinkProps {
  children: React.ReactNode
  href: string
  onClick?: () => void
}

const NavLink = ({ children, href, onClick }: NavLinkProps) => (
  <Box
    as="a"
    px={2}
    py={1}
    rounded="md"
    href={href}
    fontSize={{ base: "md", md: "lg" }}
    fontWeight="medium"
    color={useColorModeValue('gray.800', 'white')}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    onClick={onClick}
  >
    {children}
  </Box>
)

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

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
      transition="background-color 0.2s"
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
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              color={useColorModeValue('gray.800', 'white')}
              _hover={{
                color: useColorModeValue('brand.500', 'brand.300'),
              }}
              cursor="pointer"
              as="a"
              href="#"
            >
              PM Portfolio
            </Text>
          </Flex>

          <Flex align="center">
            <IconButton
              onClick={toggleColorMode}
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              aria-label="Toggle color mode"
              variant="ghost"
              mr={{ base: 2, md: 4 }}
              size={{ base: "sm", md: "md" }}
            />

            <IconButton
              display={{ base: 'flex', md: 'none' }}
              onClick={onToggle}
              icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
              variant="ghost"
              aria-label="Toggle navigation"
              size={{ base: "sm", md: "md" }}
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

        <Collapse in={isOpen} animateOpacity>
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} href={link.href} onClick={onToggle}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        </Collapse>
      </Container>
    </Box>
  )
}

export default Navbar 