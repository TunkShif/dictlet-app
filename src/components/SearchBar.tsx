import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SearchBar = () => {
  let history = useHistory()
  const [query, setQuery] = useState('')

  const submit = () => {
    if (query.length != 0)
      history.push(`/dict/${query}`)
  }

  return (
    <div className="relative mx-auto md:w-2/3">
      <input type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => { if (e.key == 'Enter') submit() }}
        className="w-full mx-auto text-2xl text-gray-600 bg-transparent border-0 border-b-2 border-gray-500 focus:ring-0 focus:border-gray-400 focus:outline-none" />
      <button
        className="absolute inset-y-0 right-0 text-2xl text-gray-600 hover:text-gray-500 focus:text-gray-500 focus:outline-none"
        onClick={() => submit()}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  )
}

export default SearchBar
