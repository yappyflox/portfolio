import * as React from 'react'
import { Box, Container, Heading, Text } from '@chakra-ui/react'

const Projects: React.FC = () => {
  return (
    <Box as="section" id="projects" py={16}>
      <Container maxW="container.xl">
        <Heading as="h2" mb={6}>Projects</Heading>
        <Text>This is the projects section. Add your content here.</Text>
      </Container>
    </Box>
  )
}

export default Projects 