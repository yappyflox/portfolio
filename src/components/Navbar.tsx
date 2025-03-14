import * as React from 'react'
import { Box, Flex, Link, Spacer, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.800', 'white')

  return (
    <Box as="nav" position="fixed" w="100%" bg={bgColor} boxShadow="sm" zIndex="sticky">
      <Flex maxW="container.xl" mx="auto" px={4} py={4}>
        <Link href="#" fontWeight="bold" fontSize="xl" color={textColor}>
          Portfolio
        </Link>
        <Spacer />
        <Flex gap={8} align="center">
          <Link href="#about" color={textColor}>About</Link>
          <Link href="#skills" color={textColor}>Skills</Link>
          <Link href="#projects" color={textColor}>Projects</Link>
          <Link href="#contact" color={textColor}>Contact</Link>
          <Flex gap={4}>
            <Link href="https://github.com/yourusername" isExternal>
              <IconButton
                aria-label="GitHub"
                icon={<FaGithub />}
                variant="ghost"
                color={textColor}
                _hover={{ color: 'brand.500' }}
              />
            </Link>
            <Link href="https://linkedin.com/in/yourusername" isExternal>
              <IconButton
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                variant="ghost"
                color={textColor}
                _hover={{ color: 'brand.500' }}
              />
            </Link>
            <IconButton
              aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              color={textColor}
              _hover={{ color: 'brand.500' }}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 