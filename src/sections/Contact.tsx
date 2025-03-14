import * as React from 'react'
import { Box, Container, Heading, Text, VStack, HStack, useColorModeValue, Icon, Button, Input, Textarea, FormControl, FormLabel } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa'

const MotionBox = motion(Box)

const Contact: React.FC = () => {
  const textColor = useColorModeValue('gray.800', 'white')
  const bgColor = useColorModeValue('white', 'gray.800')
  const accentColor = useColorModeValue('brand.500', 'brand.300')
  const inputBg = useColorModeValue('gray.50', 'gray.700')

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/yourprofile'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/yourusername'
    },
    {
      icon: FaTwitter,
      label: 'Twitter',
      href: 'https://twitter.com/yourhandle'
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      href: 'mailto:your.email@example.com'
    }
  ]

  return (
    <Box as="section" id="contact" py={20} bg={bgColor}>
      <Container maxW="container.xl">
        <VStack spacing={12} align="center">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            textAlign="center"
          >
            <Text color={accentColor} fontWeight="bold" fontSize="lg" mb={2}>
              Let's Connect
            </Text>
            <Heading as="h2" size="2xl" color={textColor} mb={4}>
              Product Collaboration
            </Heading>
            <Text fontSize="lg" color={textColor} opacity={0.8} maxW="800px">
              Interested in discussing product strategy, user experience, or potential collaborations? Let's connect and explore opportunities together.
            </Text>
          </MotionBox>

          <Box w="full" maxW="800px">
            <VStack spacing={8} w="full">
              <FormControl>
                <FormLabel color={textColor}>Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Your name"
                  bg={inputBg}
                  border="none"
                  _focus={{ boxShadow: `0 0 0 2px ${accentColor}` }}
                />
              </FormControl>

              <FormControl>
                <FormLabel color={textColor}>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  bg={inputBg}
                  border="none"
                  _focus={{ boxShadow: `0 0 0 2px ${accentColor}` }}
                />
              </FormControl>

              <FormControl>
                <FormLabel color={textColor}>Message</FormLabel>
                <Textarea
                  placeholder="Share your thoughts on potential collaboration..."
                  bg={inputBg}
                  border="none"
                  _focus={{ boxShadow: `0 0 0 2px ${accentColor}` }}
                  rows={6}
                />
              </FormControl>

              <Button
                colorScheme="brand"
                size="lg"
                w="full"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
              >
                Send Message
              </Button>
            </VStack>
          </Box>

          <VStack spacing={6}>
            <Text fontSize="lg" fontWeight="bold" color={textColor}>
              Or connect with me on social media
            </Text>
            <HStack spacing={4}>
              {socialLinks.map((link, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Button
                    as="a"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    colorScheme="brand"
                    variant="ghost"
                    size="lg"
                    _hover={{ transform: 'translateY(-2px)' }}
                  >
                    <Icon as={link.icon} w={6} h={6} />
                  </Button>
                </MotionBox>
              ))}
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Contact 