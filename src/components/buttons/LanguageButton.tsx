import React from 'react'
import './button.css'

type LanguageButtonProps = {
  icon: string,
  isActive: boolean,
  onClick: () => void
}

const LanguageButton = ({ icon, isActive, onClick }: LanguageButtonProps) => {
  return (
    <button
      className={ `button ${isActive ? 'underline' : ''}` }
      onClick={onClick}>
      {icon}
    </button>
  )
}

export default LanguageButton
