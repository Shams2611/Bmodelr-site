import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-8">
              <div className="relative h-12 w-48 bg-white p-2 rounded-md shadow-sm">
                <Image src="/images/bmodelr-logo.png" alt="BModlr Logo" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-slate-300 mb-6 max-w-md text-lg">Make invisible progress visible.</p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6 font-medium text-blue-300">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-white transition-colors hover:pl-2 inline-block"
                  scroll={true}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/vida"
                  className="text-slate-300 hover:text-white transition-colors hover:pl-2 inline-block"
                  scroll={true}
                >
                  Vida AI by BModlr
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6 font-medium text-blue-300">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/shams-abrar/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon group relative"
              >
                <span className="sr-only">LinkedIn</span>
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  LinkedIn
                </span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="mailto:jeff@bmodelr.com" className="social-icon group relative">
                <span className="sr-only">Email</span>
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Email
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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

            <div className="mt-8">
              <h3 className="text-sm uppercase tracking-wider mb-4 font-medium text-blue-300">Contact</h3>
              <address className="text-slate-300 not-italic">
                145 Greenwood Ave. Ste. 400
                <br />
                Wyncote, PA 19095
                <br />
                <a href="mailto:jeff@bmodelr.com" className="text-blue-300 hover:text-white transition-colors">
                  jeff@bmodelr.com
                </a>
              </address>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} B.Modelr. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors" scroll={true}>
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors" scroll={true}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
