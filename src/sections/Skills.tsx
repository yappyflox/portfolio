import * as React from 'react'
import { Box, Container, Heading, Text } from '@chakra-ui/react'

const Skills: React.FC = () => {
  return (
    <Box as="section" id="skills" py={16}>
      <Container maxW="container.xl">
        <Heading as="h2" mb={6}>Skills</Heading>
        <Text>This is the skills section. Add your content here.</Text>
      </Container>
    </Box>
  )
}

export default Skills 