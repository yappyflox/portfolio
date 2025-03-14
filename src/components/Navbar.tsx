import * as React from 'react'
import { Box, Flex, Link, Spacer } from '@chakra-ui/react'

const Navbar: React.FC = () => {
  return (
    <Box as="nav" position="fixed" w="100%" bg="white" boxShadow="sm" zIndex="sticky">
      <Flex maxW="container.xl" mx="auto" px={4} py={4}>
        <Link href="#" fontWeight="bold" fontSize="xl">Portfolio</Link>
        <Spacer />
        <Flex gap={8}>
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 