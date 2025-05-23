import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      <div className="text-center bg-black/30 p-5">
        <h1 className="text-9xl font-bold text-white drop-shadow-lg">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-primary-100 mt-4">
          Page Not Found
        </h2>
        <p className="text-lg text-primary-200 mt-2 max-w-md mx-auto">
          Oops! It looks like you're lost in space. The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-accent text-white font-medium py-3 px-6 rounded-lg hover:bg-accent/80 transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
