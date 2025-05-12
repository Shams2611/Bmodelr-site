import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      {/* Projects Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-light mb-8">Our Projects</h1>
          <div className="max-w-3xl">
            <p className="text-xl text-slate-300">
              Discover our innovative solutions designed to transform decision-making and drive business performance.
            </p>
          </div>
        </div>
      </section>

      {/* Vida Project Showcase */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-light mb-6">
                  <span className="font-medium text-blue-600">Vida</span> by B.Modelr
                </h2>
                <p className="text-slate-700 mb-6 text-lg">
                  Vida is our AI-driven management consulting tool that transforms how organizations make decisions. By
                  leveraging artificial intelligence and machine learning, Vida helps identify patterns, predict
                  outcomes, and generate actionable insights.
                </p>
                <p className="text-slate-700 mb-8 text-lg">
                  Our platform connects to your existing data sources, analyzes complex business information, and
                  provides clear recommendations focused on value creation.
                </p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700 rounded-none group">
                  <Link href="/projects/vida" className="flex items-center">
                    Learn More About Vida
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/images/vida-card.jpg" alt="Vida by BModlr" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Projects */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-16 text-center">Future Innovations</h2>

          <div className="border border-dashed border-slate-300 rounded-lg p-16 text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-2xl font-light text-slate-700 mb-4">More Innovative Solutions Coming Soon</h3>
            <p className="text-slate-500 mb-8 max-w-lg mx-auto">
              We're constantly working on new ways to help organizations make better decisions and achieve sustainable
              business performance.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-100 rounded-none"
            >
              <Link href="/contact">Stay Updated</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
