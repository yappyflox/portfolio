import * as React from 'react'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'

const Hero: React.FC = () => {
  return (
    <Box as="section" pt={32} pb={16}>
      <Container maxW="container.xl">
        <VStack spacing={6} align="center" textAlign="center">
          <Heading as="h1" size="2xl">
            Welcome to My Portfolio
          </Heading>
          <Text fontSize="xl" color="gray.600">
            I'm a passionate developer creating amazing web experiences
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default Hero 