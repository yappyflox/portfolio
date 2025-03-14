import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useColorModeValue,
  HStack,
  Link,
  Icon
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const MotionBox = motion(Box)

const Contact = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.800', 'white')
  const cardBg = useColorModeValue('white', 'gray.700')

  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:example@example.com', label: 'Email' }
  ]

  return (
    <Box
      as="section"
      id="contact"
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
          <VStack spacing={8} alignItems="flex-start">
            <Heading as="h2" size="xl">
              Get In Touch
            </Heading>
            
            <Text fontSize="lg">
              Interested in working together? Feel free to reach out using the form below
              or connect with me on social media.
            </Text>

            <Box
              w="100%"
              p={8}
              borderRadius="lg"
              bg={cardBg}
              boxShadow="md"
            >
              <form>
                <VStack spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" placeholder="Your name" />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="your.email@example.com" />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea placeholder="Your message" rows={6} />
                  </FormControl>

                  <Button colorScheme="blue" size="lg" w="100%">
                    Send Message
                  </Button>
                </VStack>
              </form>
            </Box>

            <VStack spacing={4} w="100%" alignItems="center" pt={8}>
              <Text fontSize="lg" fontWeight="medium">
                Or connect with me on:
              </Text>
              <HStack spacing={6}>
                {socialLinks.map((social, index) => (
                  <MotionBox
                    key={index}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href={social.href} isExternal aria-label={social.label}>
                      <Icon as={social.icon} w={6} h={6} />
                    </Link>
                  </MotionBox>
                ))}
              </HStack>
            </VStack>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default Contact 