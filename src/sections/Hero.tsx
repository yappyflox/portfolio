import * as React from 'react'
import { Box, Container, Heading, Text, VStack, Button, useColorModeValue, Flex, Image, HStack } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const Hero: React.FC = () => {
  const textColor = useColorModeValue('gray.800', 'white')
  const bgColor = useColorModeValue('white', 'gray.800')
  const accentColor = useColorModeValue('brand.500', 'brand.300')

  return (
    <Box as="section" pt={32} pb={16} bg={bgColor} position="relative" overflow="hidden">
      <Container maxW="container.xl">
        <HStack spacing={8} align="center" justify="space-between">
          <VStack flex={1} align="start" spacing={6}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Text color={accentColor} fontWeight="bold" fontSize="lg" mb={2}>
                Hello, I'm
              </Text>
              <Heading as="h1" size="2xl" color={textColor} mb={4}>
                Your Name
              </Heading>
              <Text fontSize="xl" color={textColor} opacity={0.8}>
                Full Stack Developer
              </Text>
            </MotionBox>
            <Text fontSize="lg" color={textColor} opacity={0.8} maxW="600px">
              I create beautiful and functional web applications with modern technologies.
              Passionate about building great user experiences.
            </Text>
            <Flex gap={4}>
              <Button
                leftIcon={<FaGithub />}
                colorScheme="brand"
                variant="solid"
                size="lg"
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
                size="lg"
                as="a"
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
            </Flex>
          </VStack>
          <Box flex={1} display={{ base: 'none', md: 'block' }}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/hero-image.svg"
                alt="Hero illustration"
                maxW="500px"
                mx="auto"
                fallback={<Box w="500px" h="400px" bg={accentColor} opacity={0.1} borderRadius="lg" />}
              />
            </MotionBox>
          </Box>
        </HStack>
      </Container>
    </Box>
  )
}

export default Hero 