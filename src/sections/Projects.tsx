import * as React from 'react'
import { Box, Container, Heading, Text, VStack, HStack, useColorModeValue, Image, Icon, Button, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaChartLine, FaUsers, FaRocket } from 'react-icons/fa'

const MotionBox = motion(Box)

const Projects: React.FC = () => {
  const textColor = useColorModeValue('gray.800', 'white')
  const bgColor = useColorModeValue('white', 'gray.800')
  const accentColor = useColorModeValue('brand.500', 'brand.300')

  const projects = [
    {
      title: 'E-commerce Platform Redesign',
      description: 'Led the complete redesign of an e-commerce platform, resulting in a 40% increase in conversion rate and 25% improvement in user engagement.',
      image: '/ecommerce-project.jpg',
      metrics: [
        { icon: FaChartLine, label: '40% increase in conversion rate' },
        { icon: FaUsers, label: '25% improvement in user engagement' },
        { icon: FaRocket, label: 'Launched in 3 months' }
      ]
    },
    {
      title: 'Mobile App Launch',
      description: 'Spearheaded the development and launch of a new mobile app, achieving 100k downloads in the first month and maintaining a 4.8/5 rating.',
      image: '/mobile-app-project.jpg',
      metrics: [
        { icon: FaUsers, label: '100k downloads in first month' },
        { icon: FaChartLine, label: '4.8/5 app store rating' },
        { icon: FaRocket, label: 'Featured in App Store' }
      ]
    },
    {
      title: 'SaaS Platform Growth',
      description: 'Managed the growth strategy for a SaaS platform, resulting in 200% revenue growth and 150% increase in active users over 12 months.',
      image: '/saas-project.jpg',
      metrics: [
        { icon: FaChartLine, label: '200% revenue growth' },
        { icon: FaUsers, label: '150% increase in active users' },
        { icon: FaRocket, label: 'Expanded to 3 new markets' }
      ]
    }
  ]

  return (
    <Box as="section" id="projects" py={20} bg={bgColor}>
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
              Featured Projects
            </Text>
            <Heading as="h2" size="2xl" color={textColor} mb={4}>
              Product Success Stories
            </Heading>
            <Text fontSize="lg" color={textColor} opacity={0.8} maxW="800px">
              A collection of successful product launches and transformations I've led
            </Text>
          </MotionBox>

          <VStack spacing={12} w="full">
            {projects.map((project, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                w="full"
              >
                <Box
                  p={6}
                  borderRadius="lg"
                  bg={useColorModeValue('gray.50', 'gray.700')}
                  _hover={{ transform: 'translateY(-4px)', transition: 'all 0.2s' }}
                >
                  <HStack spacing={8} align="start">
                    <Box flex={1}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        borderRadius="lg"
                        maxW="400px"
                        fallback={<Box w="400px" h="300px" bg={accentColor} opacity={0.1} borderRadius="lg" />}
                      />
                    </Box>
                    <VStack flex={1} align="start" spacing={4}>
                      <Heading as="h3" size="xl" color={textColor}>
                        {project.title}
                      </Heading>
                      <Text color={textColor} opacity={0.8}>
                        {project.description}
                      </Text>
                      <VStack align="start" spacing={2}>
                        {project.metrics.map((metric, idx) => (
                          <Flex key={idx} align="center" gap={2}>
                            <Icon as={metric.icon} color={accentColor} />
                            <Text color={textColor}>{metric.label}</Text>
                          </Flex>
                        ))}
                      </VStack>
                      <Button
                        rightIcon={<FaArrowRight />}
                        colorScheme="brand"
                        variant="ghost"
                        size="sm"
                      >
                        Learn More
                      </Button>
                    </VStack>
                  </HStack>
                </Box>
              </MotionBox>
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Projects 