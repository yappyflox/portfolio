import * as React from 'react'
import { Box, Container, Heading, Text, VStack, Button, useColorModeValue, Flex } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero: React.FC = () => {
  const textColor = useColorModeValue('gray.800', 'white')
  const bgColor = useColorModeValue('white', 'gray.800')

  return (
    <Box as="section" pt={32} pb={16} bg={bgColor}>
      <Container maxW="container.xl">
        <VStack spacing={6} align="center" textAlign="center">
          <Heading as="h1" size="2xl" color={textColor}>
            Welcome to My Portfolio
          </Heading>
          <Text fontSize="xl" color={textColor}>
            I'm a passionate developer creating amazing web experiences
          </Text>
          <Flex gap={4}>
            <Button
              leftIcon={<FaGithub />}
              colorScheme="brand"
              variant="solid"
              as="a"
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
            <Button
              leftIcon={<FaLinkedin />}
              colorScheme="brand"
              variant="outline"
              as="a"
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
          </Flex>
        </VStack>
      </Container>
    </Box>
  )
}

export default Hero 