"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, ClipboardCheck, Shield } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section - Exact BModlr style */}
      <section className="relative h-[600px] w-full">
        <div className="absolute inset-0 bg-slate-900/80 z-10" />
        <Image src="/images/hero-background.png" alt="Modern architecture" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-light text-white mb-4 animate-fade-in-up">
              Achieve <span className="font-normal">Sustainable</span>
              <br />
              Business Performance
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-fade-in-up animate-delay-200">
              We empower organizations to connect decisions to fundamental value for focused and consistent
              decision-making
            </p>
          </div>
        </div>
      </section>

      {/* Manage What Matters Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="w-3 h-3 bg-blue-600 transform rotate-45"></div>
          </div>
          <h3 className="text-blue-600 font-medium uppercase tracking-wider text-center mb-4">MANAGE WHAT MATTERS</h3>
          <h2 className="text-4xl font-light text-center mb-16 max-w-3xl mx-auto">
            Drive performance through focused decision-making
          </h2>

          <div className="container-narrow">
            <p className="text-slate-700 text-lg mb-12 text-center">
              At B.Modelr, we simplify decision-making by guiding organizations to focus on what truly matters—value
              creation. Our process helps you measure and manage key performance indicators that align with customer
              satisfaction and financial success. By targeting the most impactful areas, we enable informed decisions
              that lead to sustainable growth and long-term success.
            </p>
          </div>

          <div className="container-narrow mt-16 text-center">
            <div className="h-px bg-blue-200 w-32 mx-auto mb-12"></div>
            <p className="text-2xl text-slate-500 font-light">
              We create standards so that problems are simply a deviation from an ideal.
            </p>
            <div className="h-px bg-blue-200 w-32 mx-auto mt-12"></div>
          </div>
        </div>
      </section>

      {/* Discover Our Journey Section */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16">Discover our journey</h2>

          <div className="container-medium relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-blue-200"></div>

            {/* Mobile timeline - visible only on mobile */}
            <div className="md:hidden w-2 bg-blue-200 absolute left-4 top-0 bottom-0"></div>

            <div className="flex md:flex-row flex-col justify-between items-start relative">
              {/* 2013 */}
              <div className="md:w-1/3 pr-12 md:text-center text-left pl-12 md:pl-0 relative mb-12 md:mb-0">
                {/* Mobile timeline marker */}
                <div className="absolute left-0 top-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center md:hidden">
                  <span className="text-white text-xs font-bold">2013</span>
                </div>
                <h3 className="text-2xl font-medium mb-4">2013</h3>
                <h4 className="text-xl font-medium mb-3">Your Outsourced CFO</h4>
                <p className="text-slate-600">Pioneered the fractional CFO model to support SMBs</p>
              </div>

              {/* Timeline marker for desktop */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 hidden md:block">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>

              {/* Empty space */}
              <div className="md:w-1/3 hidden md:block"></div>
            </div>

            <div className="flex md:flex-row flex-col justify-between items-start relative md:mt-24">
              {/* Empty space */}
              <div className="md:w-1/3 hidden md:block"></div>

              {/* Timeline marker for desktop */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 hidden md:block">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>

              {/* 2021 */}
              <div className="md:w-1/3 md:pl-12 pl-12 md:text-center text-left relative mb-12 md:mb-0">
                {/* Mobile timeline marker */}
                <div className="absolute left-0 top-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center md:hidden">
                  <span className="text-white text-xs font-bold">2021</span>
                </div>
                <h3 className="text-2xl font-medium mb-4">2021</h3>
                <h4 className="text-xl font-medium mb-3">B.Modelr</h4>
                <p className="text-slate-600">
                  Transformed challenges into growth with actionable insights and continuous improvement
                </p>
              </div>
            </div>

            <div className="flex md:flex-row flex-col justify-between items-start relative md:mt-24">
              {/* 2024 */}
              <div className="md:w-1/3 pr-12 md:text-center text-left pl-12 md:pl-0 relative">
                {/* Mobile timeline marker */}
                <div className="absolute left-0 top-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center md:hidden">
                  <span className="text-white text-xs font-bold">2024</span>
                </div>
                <h3 className="text-2xl font-medium mb-4">2024</h3>
                <h4 className="text-xl font-medium mb-3">VIDA AI</h4>
                <p className="text-slate-600">
                  Our first digital product – an intelligent performance system that delivers real-time insights for
                  effective decision-making
                </p>
                <Link
                  href="/projects/vida"
                  className="text-blue-500 hover:text-blue-700 inline-flex items-center mt-4 group"
                >
                  Discover VIDA AI
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Timeline marker for desktop */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 hidden md:block">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>

              {/* Empty space */}
              <div className="md:w-1/3 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Turning Ideas Into Reality - About Us Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="w-3 h-3 bg-blue-600 transform rotate-45"></div>
          </div>
          <h3 className="text-blue-600 font-medium uppercase tracking-wider text-center mb-4">
            TURNING IDEAS INTO REALITY
          </h3>
          <h2 className="text-4xl font-light text-center mb-16">About us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 container-medium">
            <div className="text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gB00lGFcZ3ubsBCuSywAS3cxcGexqN.png"
                  alt="Jeff Bruno"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Jeff Bruno</h3>
              <p className="text-slate-700 mb-4">Co-founder</p>
              <div className="flex justify-center space-x-3">
                <a
                  href="https://www.linkedin.com/in/jeffreybruno/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="mailto:jeff@bmodelr.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <span className="sr-only">Email</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qDGUHSR671HnxRplJDPhytKBWOfRfS.png"
                  alt="Julian Wright"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Julian Wright</h3>
              <p className="text-slate-700 mb-4">Co-founder</p>
              <div className="flex justify-center space-x-3">
                <a
                  href="https://www.linkedin.com/in/julianjwright/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="mailto:julian@bmodelr.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <span className="sr-only">Email</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/my_linkedin_picture.jfif-qXgExRLGq5kiVuMNIGde3CoIPTQELV.jpeg"
                  alt="Shams Abrar"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Shams Abrar</h3>
              <p className="text-slate-700 mb-4">Tech Lead</p>
              <div className="flex justify-center space-x-3">
                <a
                  href="https://www.linkedin.com/in/shams-abrar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="mailto:shams@bmodelr.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <span className="sr-only">Email</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting to Product Transition */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-serif font-light mb-8">We're transforming how work gets done.</h2>
            <p className="text-xl mb-16 max-w-3xl mx-auto leading-relaxed">
              From years of management consulting expertise to cutting-edge AI technology, our journey has led us to
              create something revolutionary. Vida AI is an intelligent operating system that turns organizational
              complexity into focused action.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-blue-800/50 backdrop-blur-sm p-8 rounded-lg hover:bg-blue-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-600/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-medium mb-4">Systematic Improvement</h3>
                <p className="text-blue-100">
                  Transform scattered efforts into a structured approach that consistently delivers measurable results.
                </p>
              </div>

              <div className="bg-blue-800/50 backdrop-blur-sm p-8 rounded-lg hover:bg-blue-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-600/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ClipboardCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-medium mb-4">Standards-Based Problem Solving</h3>
                <p className="text-blue-100">
                  Create clear standards that make problems simply a deviation from an ideal, making improvement
                  straightforward.
                </p>
              </div>

              <div className="bg-blue-800/50 backdrop-blur-sm p-8 rounded-lg hover:bg-blue-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-600/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-medium mb-4">Natural Way Teams Work</h3>
                <p className="text-blue-100">
                  Embed continuous improvement directly into daily workflows, making excellence the default way teams
                  operate.
                </p>
              </div>
            </div>

            <div className="mt-16">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-800 hover:bg-blue-50 rounded-none px-8 py-6 text-lg"
              >
                <Link
                  href="/projects/vida"
                  className="flex items-center"
                  onClick={() => {
                    // Ensure scroll to top on navigation
                    window.scrollTo(0, 0)
                  }}
                  scroll={true}
                >
                  See Vida in Action
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
