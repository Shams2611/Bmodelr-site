"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white text-slate-900 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-48">
              <Image src="/images/bmodelr-logo.png" alt="BModlr Logo" fill className="object-contain" />
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-slate-800 hover:text-blue-600 transition-colors text-sm uppercase tracking-wide relative"
              scroll={true}
              onClick={() => {
                // Ensure scroll to top on navigation
                window.scrollTo(0, 0)
              }}
            >
              Home
            </Link>
            <Link
              href="/projects/vida"
              className="text-slate-800 hover:text-blue-600 transition-colors text-sm uppercase tracking-wide relative"
              scroll={true}
              onClick={() => {
                // Ensure scroll to top on navigation
                window.scrollTo(0, 0)
              }}
            >
              Vida AI by B.MODELR
            </Link>
            <Button asChild className="bg-blue-600 text-white hover:bg-blue-700 rounded-none">
              <a href="mailto:jeff@bmodelr.com">Contact Us</a>
            </Button>
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-slate-900">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white text-slate-900">
              <nav className="flex flex-col space-y-6 mt-10">
                <Link
                  href="/"
                  className="text-slate-800 hover:text-blue-600 transition-colors text-lg"
                  onClick={() => {
                    setIsOpen(false)
                    // Ensure scroll to top on navigation
                    window.scrollTo(0, 0)
                  }}
                  scroll={true}
                >
                  Home
                </Link>
                <Link
                  href="/projects/vida"
                  className="text-slate-800 hover:text-blue-600 transition-colors text-lg"
                  onClick={() => {
                    setIsOpen(false)
                    // Ensure scroll to top on navigation
                    window.scrollTo(0, 0)
                  }}
                  scroll={true}
                >
                  Vida AI by B.MODELR
                </Link>
                <Button
                  asChild
                  className="bg-blue-600 text-white hover:bg-blue-700 rounded-none w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <a href="mailto:jeff@bmodelr.com">Contact Us</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
