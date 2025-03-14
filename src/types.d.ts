/// <reference types="react" />

declare module '*.tsx'
declare module '*.ts'

// Component type declarations
declare module 'components/Navbar' {
  import { FC } from 'react'
  const Navbar: FC
  export default Navbar
}

// Section type declarations
declare module 'sections/Hero' {
  import { FC } from 'react'
  const Hero: FC
  export default Hero
}

declare module 'sections/About' {
  import { FC } from 'react'
  const About: FC
  export default About
}

declare module 'sections/Skills' {
  import { FC } from 'react'
  const Skills: FC
  export default Skills
}

declare module 'sections/Projects' {
  import { FC } from 'react'
  const Projects: FC
  export default Projects
}

declare module 'sections/Contact' {
  import { FC } from 'react'
  const Contact: FC
  export default Contact
} 