import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Portfolio from '@/components/Portfolio'
import Journals from '@/components/Journals'
import Speaking from '@/components/Speaking'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Portfolio />
      <Journals />
      <Speaking />
      <Contact />
      <Footer />
    </main>
  )
}