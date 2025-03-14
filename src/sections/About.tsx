import * as React from 'react'
import { Box, Container, Heading, Text, VStack, HStack, useColorModeValue, Image, Icon, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaCode, FaLaptopCode, FaServer } from 'react-icons/fa'

const MotionBox = motion(Box)

const About: React.FC = () => {
  const textColor = useColorModeValue('gray.800', 'white')
  const bgColor = useColorModeValue('white', 'gray.800')
  const accentColor = useColorModeValue('brand.500', 'brand.300')

  const features = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable and efficient code following best practices'
    },
    {
      icon: FaLaptopCode,
      title: 'Responsive Design',
      description: 'Creating beautiful and responsive user interfaces'
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      description: 'Building robust and scalable server-side applications'
    }
  ]

  return (
    <Box as="section" id="about" py={20} bg={bgColor}>
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
              About Me
            </Text>
            <Heading as="h2" size="2xl" color={textColor} mb={4}>
              Who I Am
            </Heading>
          </MotionBox>

          <HStack spacing={8} align="start" w="full">
            <Box flex={1}>
              <MotionBox
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/profile-image.jpg"
                  alt="Profile"
                  borderRadius="lg"
                  maxW="400px"
                  mx="auto"
                  fallback={<Box w="400px" h="400px" bg={accentColor} opacity={0.1} borderRadius="lg" />}
                />
              </MotionBox>
            </Box>
            <VStack flex={1} align="start" spacing={6}>
              <MotionBox
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Text fontSize="lg" color={textColor} opacity={0.8}>
                  I'm a passionate Full Stack Developer with a strong foundation in web development.
                  I love creating elegant solutions to complex problems and am constantly learning
                  new technologies to stay at the forefront of web development.
                </Text>
                <Text fontSize="lg" color={textColor} opacity={0.8} mt={4}>
                  With several years of experience in both frontend and backend development,
                  I specialize in building modern web applications that are both beautiful and functional.
                </Text>
              </MotionBox>
              <Flex gap={6} flexWrap="wrap">
                {features.map((feature, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Box
                      p={4}
                      borderRadius="lg"
                      bg={useColorModeValue('gray.50', 'gray.700')}
                      _hover={{ transform: 'translateY(-4px)', transition: 'all 0.2s' }}
                    >
                      <Icon as={feature.icon} w={6} h={6} color={accentColor} mb={2} />
                      <Text fontWeight="bold" color={textColor} mb={1}>
                        {feature.title}
                      </Text>
                      <Text color={textColor} opacity={0.8} fontSize="sm">
                        {feature.description}
                      </Text>
                    </Box>
                  </MotionBox>
                ))}
              </Flex>
            </VStack>
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default About 