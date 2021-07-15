import React from 'react'
import CurrentLanguage from '../containers/CurrentLanguage'
import { Languages } from '../types/Languages'
import LanguageButton from './buttons/LanguageButton'

const LanguageSwitcher = function() {

  const languages: Array<{ name: Languages, icon: string }> = [
    {
      name: 'es',
      icon: '🇪🇸'
    },
    {
      name: 'en',
      icon: '🇺🇸'
    },
    {
      name: 'tr',
      icon: '🇹🇷'
    }
  ]

  const { currentLanguage, setCurrentLanguage } = CurrentLanguage.useContainer()

  return (
    <>{
    languages.map(language =>
        <LanguageButton
          key={language.name}
          icon={language.icon}
          isActive={currentLanguage == language.name}
          onClick={() => setCurrentLanguage(language.name)} />)
    }</>
  )
}

export default LanguageSwitcher
