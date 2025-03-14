import React from 'react'
import { Box, Container, Heading, Text, Button, VStack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const Hero = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.800', 'white')

  return (
    <Box
      as="section"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      bg={bgColor}
      color={textColor}
    >
      <Container maxW="container.lg">
        <VStack spacing={6} alignItems="flex-start">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Text fontSize="xl" color="blue.500">
              Hi, I'm
            </Text>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Heading as="h1" size="2xl" fontWeight="bold">
              Your Name
            </Heading>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Text fontSize="2xl" color="gray.500">
              Frontend Developer & UI/UX Enthusiast
            </Text>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              colorScheme="blue"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in touch
            </Button>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  )
}

export default Hero 