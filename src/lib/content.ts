import contentData from '@/data/content.json'

export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
  bio: string
  summary: string
}

export interface SocialLinks {
  github: string
  linkedin: string
  twitter: string
  website: string
}

export interface Experience {
  id: number
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  description: string
  achievements: string[]
  technologies: string[]
}

export interface Skill {
  name: string
  level: number
}

export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  liveUrl: string
  githubUrl: string
  featured: boolean
}

export interface Education {
  institution: string
  degree: string
  field: string
  year: string
  location: string
}

export interface Certification {
  name: string
  issuer: string
  date: string
  credentialId: string
}

export interface Journal {
  id: number
  title: string
  excerpt: string
  content: string
  publishedDate: string
  readTime: string
  tags: string[]
  featured: boolean
  image: string
}

export interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  content: string
  rating: number
}

export interface ContentData {
  personal: PersonalInfo
  social: SocialLinks
  experience: Experience[]
  skills: {
    technical: Skill[]
    soft: string[]
    tools: string[]
  }
  projects: Project[]
  education: Education[]
  certifications: Certification[]
  journals: Journal[]
  testimonials: Testimonial[]
}

export function getContent(): ContentData {
  return contentData as ContentData
}

export function getPersonalInfo(): PersonalInfo {
  return contentData.personal
}

export function getSocialLinks(): SocialLinks {
  return contentData.social
}

export function getExperience(): Experience[] {
  return contentData.experience
}

export function getSkills() {
  return contentData.skills
}

export function getProjects(): Project[] {
  return contentData.projects
}

export function getFeaturedProjects(): Project[] {
  return contentData.projects.filter(project => project.featured)
}

export function getEducation(): Education[] {
  return contentData.education
}

export function getCertifications(): Certification[] {
  return contentData.certifications
}

export function getJournals(): Journal[] {
  return contentData.journals || []
}

export function getFeaturedJournals(): Journal[] {
  return contentData.journals?.filter(journal => journal.featured) || []
}

export function getTestimonials(): Testimonial[] {
  return contentData.testimonials
}
