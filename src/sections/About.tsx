import React from 'react'
import { Box, Container, Heading, Text, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const About = () => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.800', 'white')

  return (
    <Box
      as="section"
      id="about"
      py={20}
      bg={bgColor}
      color={textColor}
    >
      <Container maxW="container.lg">
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h2" size="xl" mb={8}>
            About Me
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box>
              <Text fontSize="lg" mb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris.
              </Text>
              <Text fontSize="lg">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg" mb={4}>
                What I bring to the table:
              </Text>
              <Text fontSize="lg" as="ul" pl={4}>
                <li>Strong problem-solving abilities</li>
                <li>Attention to detail</li>
                <li>Team collaboration</li>
                <li>Continuous learning mindset</li>
              </Text>
            </Box>
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default About 