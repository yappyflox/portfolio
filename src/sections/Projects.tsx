import React from 'react'
import { Box, Container, Heading, SimpleGrid, Text, Image, Stack, Tag, Link, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const MotionBox = motion(Box)

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
}

const ProjectCard = ({ title, description, image, technologies, githubUrl, liveUrl }: ProjectCardProps) => {
  const cardBg = useColorModeValue('white', 'gray.700')
  
  return (
    <Box
      bg={cardBg}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      transition="transform 0.2s"
      _hover={{ transform: 'translateY(-5px)' }}
    >
      <Image src={image} alt={title} height="200px" width="100%" objectFit="cover" />
      <Stack p={6} spacing={4}>
        <Heading as="h3" size="md">{title}</Heading>
        <Text>{description}</Text>
        <Stack direction="row" flexWrap="wrap" spacing={2}>
          {technologies.map((tech) => (
            <Tag key={tech} colorScheme="blue" size="sm">
              {tech}
            </Tag>
          ))}
        </Stack>
        <Stack direction="row" spacing={4}>
          <Link href={githubUrl} isExternal>
            <FaGithub size={20} />
          </Link>
          <Link href={liveUrl} isExternal>
            <FaExternalLinkAlt size={20} />
          </Link>
        </Stack>
      </Stack>
    </Box>
  )
}

const Projects = () => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.800', 'white')

  const projects = [
    {
      title: 'Project One',
      description: 'A sample project showcasing various features and technologies. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['React', 'TypeScript', 'Node.js'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Project Two',
      description: 'Another example project with different technologies and implementations. Sed do eiusmod tempor incididunt.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['Next.js', 'Tailwind CSS', 'MongoDB'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Project Three',
      description: 'A third project demonstrating more skills and capabilities. Ut enim ad minim veniam, quis nostrud exercitation.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['React', 'Firebase', 'Material-UI'],
      githubUrl: '#',
      liveUrl: '#'
    }
  ]

  return (
    <Box
      as="section"
      id="projects"
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
          <Heading as="h2" size="xl" mb={12}>
            Featured Projects
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {projects.map((project, index) => (
              <MotionBox
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <ProjectCard {...project} />
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default Projects 