"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BarChart2, Zap, Calendar, CheckCircle } from "lucide-react"

export default function VidaProjectPage() {
  const [formSubmitting, setFormSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  })
  const formRef = useRef<HTMLFormElement>(null)

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormSubmitting(true)

    try {
      // Create form data to send
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("company", formData.company)

      // Use our server-side API route to submit the form
      const response = await fetch("/api/submit-form", {
        method: "POST",
        body: formDataToSend,
      })

      const result = await response.json()

      if (response.ok && result.success) {
        // Show success message
        setFormSubmitted(true)

        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
        })
      } else {
        console.error("Form submission failed:", result.error)
        alert("There was a problem submitting the form. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was a problem submitting the form. Please try again.")
    } finally {
      setFormSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen">
      {/* Vida Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-serif font-light mb-6 animate-fade-in-up">
              Transform how <span className="text-blue-400">work</span> gets done.
            </h1>
            <p className="text-xl text-slate-300 mb-8 animate-fade-in-up animate-delay-200 max-w-2xl mx-auto">
              Meet VIDA AI - the intelligent operating system that turns organizational complexity into focused action.
            </p>
            <div className="flex justify-center animate-fade-in-up animate-delay-300">
              <Button asChild className="bg-white/10 text-white hover:bg-white/20 rounded-none">
                <a href="#partner-section">Request Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Standards-Based Problem Solving */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-sm text-blue-600 font-medium uppercase tracking-wider mb-4">
              THE SCIENCE OF SYSTEMATIC IMPROVEMENT
            </div>
            <h2 className="text-4xl font-serif font-light mb-6">Align everyone around what matters</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="relative">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl bg-slate-900">
                  <Image
                    src="/images/standards-dashboard.png"
                    alt="Standards-based continuous improvement dashboard"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/30 to-transparent flex flex-col justify-end p-4">
                    <h4 className="text-white text-lg font-medium mb-1 text-shadow-lg">
                      Continuous Improvement Dashboard
                    </h4>
                    <p className="text-blue-300 text-sm text-shadow-lg">
                      Track performance metrics, identify root causes, and drive systematic improvement through
                      standards
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-serif font-light mb-6">Standards-Based Problem Solving</h3>
              <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                Make problem-solving the natural way teams work. Every deviation from the standard becomes an
                opportunity to improve processes and results.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Clear standards that define excellence</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Structured problem-solving routines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Real-time alerts when standards aren't met</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Connect frontline activities to financial outcomes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Visualize value-added vs. non-value-added work</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Track improvements that directly impact results</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path d="M12 6V18M18 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">From process to profit</h3>
                <p className="text-slate-600">
                  Finally see how daily operations drive financial results. Our system connects frontline actions to
                  customer value and business outcomes.
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 12L12 16L16 12M8 8L12 12L16 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">360-degree alignment</h3>
                <p className="text-slate-600">
                  Teams at every level engage in structured problem-solving to achieve and evolve standards.
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path d="M12 8V16M18 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Laser-focused</h3>
                <p className="text-slate-600">
                  Transform scattered efforts into precise execution. Our system ensures every activity drives your
                  business model forward, eliminating anything that doesn't create value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Elements Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-sm text-blue-600 font-medium uppercase tracking-wider mb-4">
                THIS IS HOW IT WORKS
              </div>
              <h2 className="text-4xl font-serif font-light mb-6">
                Four elements that connect every level of your organization
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 12L12 16L16 12M8 8L12 12L16 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Business Translation</h3>
                  <p className="text-slate-600">
                    We convert your customer promise into clear operational standards. Teams understand exactly what
                    excellence looks like in their daily work.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 12L12 16L16 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Problem-Solving</h3>
                  <p className="text-slate-600">
                    Make improvement part of everyone's job. Structured routines help teams identify, solve, and prevent
                    process problems.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path d="M12 6V18M18 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Performance Analytics</h3>
                  <p className="text-slate-600">
                    Connect team actions to business results. See how process improvements drive customer satisfaction
                    and financial outcomes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Learning Architecture</h3>
                  <p className="text-slate-600">
                    Scale what works across your organization. Our system captures successful practices and deploys them
                    where they'll create the most impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating System Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm text-blue-600 font-medium uppercase tracking-wider mb-4">
              THE VIDA AI OPERATING SYSTEM
            </div>
            <h2 className="text-4xl font-serif font-light mb-16">
              Because <span className="text-blue-500">work</span> shouldn't just work. It should evolve.
              <br />
              VIDA AI makes excellence a never-ending pursuit.
            </h2>

            <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
              <div className="p-6 hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">Drive Focus</h3>
                <p className="text-slate-600">
                  Identify high-value activities and eliminate distractions to maximize impact.
                </p>
              </div>

              <div className="p-6 hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">Simplify Planning</h3>
                <p className="text-slate-600">Streamline workflows and reduce complexity with AI-powered insights.</p>
              </div>

              <div className="p-6 hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart2 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">Enable Learning</h3>
                <p className="text-slate-600">
                  Continuously improve with data-driven feedback and actionable recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Context Protocol Section */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="text-sm text-blue-400 font-medium uppercase tracking-wider mb-4">POWERED BY</div>
            <h2 className="text-4xl font-serif font-light mb-8">Model Context Protocol</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Under the hood, VIDA AI leverages the open Model Context Protocol (MCP) to connect your tools, data, and
              autonomous agents into a single, secure intelligence layer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-slate-800/70 p-8 rounded-lg backdrop-blur-sm hover:bg-slate-800 transition-all duration-300">
              <div className="relative h-48 mb-6 overflow-hidden rounded-md">
                <Image
                  src="/abstract-data-network.png"
                  alt="Unified Connectivity"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-medium mb-3 text-blue-300">Unified Connectivity</h3>
              <p className="text-slate-300">
                Every data source becomes a standardized MCP server for seamless integration.
              </p>
            </div>

            <div className="bg-slate-800/70 p-8 rounded-lg backdrop-blur-sm hover:bg-slate-800 transition-all duration-300">
              <div className="relative h-48 mb-6 overflow-hidden rounded-md">
                <Image
                  src="/images/ai-agent-orchestration.png"
                  alt="Autonomous Agents"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-medium mb-3 text-blue-300">Autonomous Agents</h3>
              <p className="text-slate-300">Spin up specialized AI agents with live context from any system.</p>
            </div>

            <div className="bg-slate-800/70 p-8 rounded-lg backdrop-blur-sm hover:bg-slate-800 transition-all duration-300">
              <div className="relative h-48 mb-6 overflow-hidden rounded-md">
                <Image
                  src="/images/secure-protocol.png"
                  alt="Secure, Extensible"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-medium mb-3 text-blue-300">Secure, Extensible</h3>
              <p className="text-slate-300">
                Zero-trust tokens, audit logs, and open SDKs ensure safety and flexibility.
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-2xl">
              <Image src="/images/modular-connector.png" alt="MCP Architecture" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent flex items-end">
                <div className="p-8">
                  <h3 className="text-2xl font-medium mb-2 text-white">Modular Architecture</h3>
                  <p className="text-slate-300 max-w-2xl">
                    The Model Context Protocol provides a flexible foundation that grows with your needs, allowing
                    seamless integration of new data sources and AI capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unlock Your Potential Section */}
      <section id="partner-section" className="py-20 bg-gradient-to-b from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-serif font-light mb-8">Partner with us</h2>
            <p className="text-xl text-center max-w-3xl mx-auto mb-12">
              Be among the first to experience VIDA AI and transform how your organization makes decisions.
            </p>

            <div className="max-w-md mx-auto p-8 rounded-lg shadow-lg">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-blue-600/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-medium mb-4">Thank You!</h4>
                  <p className="text-blue-100 mb-6">
                    Your request has been submitted. We'll be in touch with you shortly about early access to VIDA AI.
                  </p>
                  <p className="text-sm text-blue-200">
                    If you have any immediate questions, please contact us at{" "}
                    <a href="mailto:info@bmodelr.com" className="underline hover:text-white">
                      info@bmodelr.com
                    </a>
                  </p>
                </div>
              ) : (
                <>
                  <h4 className="text-2xl font-medium mb-6 text-center">VIDA AI Early Access</h4>
                  <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">
                        Your Name <span className="text-red-300">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-blue-300/30 rounded-md text-white placeholder-blue-100/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                        Your Email <span className="text-red-300">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-blue-300/30 rounded-md text-white placeholder-blue-100/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-blue-100 mb-2">
                        Company Name <span className="text-red-300">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-blue-300/30 rounded-md text-white placeholder-blue-100/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 transition-colors duration-300"
                    >
                      {formSubmitting ? "Submitting..." : "Request Early Access"}
                    </Button>
                  </form>
                  <p className="text-sm text-blue-100 mt-4 text-center">
                    We'll notify you when early access becomes available.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
