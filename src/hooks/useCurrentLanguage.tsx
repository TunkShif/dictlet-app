import { useState } from 'react'
import { Languages } from '../types/Languages'

function useCurrentLanguage(initialState:Languages = 'es') {
  const [currentLanguage, setCurrentLanguage] = useState<Languages>(initialState)
  return {currentLanguage, setCurrentLanguage}
}

export default useCurrentLanguage
