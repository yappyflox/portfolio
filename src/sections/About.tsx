import * as React from 'react'
import { Box, Container, Heading, Text } from '@chakra-ui/react'

const About: React.FC = () => {
  return (
    <Box as="section" id="about" py={16}>
      <Container maxW="container.xl">
        <Heading as="h2" mb={6}>About Me</Heading>
        <Text>This is the about section. Add your content here.</Text>
      </Container>
    </Box>
  )
}

export default About 