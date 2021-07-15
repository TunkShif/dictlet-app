import React from 'react'

type LogoProp = {
  text: string
}

const Logo = ({ text }: LogoProp) => {
  return (
    <div className="text-center text-6xl py-20 text-gray-600 underline">
      {text.toUpperCase()}
    </div>
  )
}

export default Logo
