import Link from "next/link"

export default function VidaLogo({ className = "" }: { className?: string }) {
  return (
    <Link href="/projects/vida" className={`flex items-center ${className}`}>
      <div className="relative flex items-center">
        <svg className="w-6 h-6 text-blue-500 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M12 6V18M18 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="font-medium text-lg">
          VIDA<span className="text-blue-500">Labs</span>
        </span>
      </div>
    </Link>
  )
}
