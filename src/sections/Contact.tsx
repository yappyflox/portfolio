import * as React from 'react'
import { Box, Container, Heading, Text } from '@chakra-ui/react'

const Contact: React.FC = () => {
  return (
    <Box as="section" id="contact" py={16}>
      <Container maxW="container.xl">
        <Heading as="h2" mb={6}>Contact</Heading>
        <Text>This is the contact section. Add your content here.</Text>
      </Container>
    </Box>
  )
}

export default Contact 