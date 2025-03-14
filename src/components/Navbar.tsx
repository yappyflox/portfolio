import React from 'react'
import { Box, Flex, Link, useColorMode, IconButton, Container } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box 
      position="fixed" 
      top={0} 
      width="100%" 
      zIndex={1000} 
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      boxShadow="sm"
    >
      <Container maxW="container.lg">
        <Flex px={4} py={4} justifyContent="space-between" alignItems="center">
          <Link 
            href="#" 
            fontSize="xl" 
            fontWeight="bold"
            _hover={{ textDecoration: 'none' }}
          >
            Your Name
          </Link>
          
          <Flex gap={8} alignItems="center">
            <Link href="#about" _hover={{ color: 'blue.500' }}>About</Link>
            <Link href="#skills" _hover={{ color: 'blue.500' }}>Skills</Link>
            <Link href="#projects" _hover={{ color: 'blue.500' }}>Projects</Link>
            <Link href="#contact" _hover={{ color: 'blue.500' }}>Contact</Link>
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
              onClick={toggleColorMode}
              variant="ghost"
              _hover={{ bg: colorMode === 'light' ? 'gray.100' : 'gray.700' }}
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar 