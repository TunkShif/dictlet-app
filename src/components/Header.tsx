import React from 'react'
import Button from './buttons/Button'
import LanguageSwitcher from './LanguageSwitcher'
import { useHistory } from 'react-router-dom'

const Header = () => {
  let history = useHistory()

  return (
      <header className="flex justify-between text-3xl">
        <div className="flex justify-start">
          <Button icon="🌎" onClick={() => history.push('/')} />
            <LanguageSwitcher />
        </div>

        <div>
          <Button icon="⚙️" />
        </div>
      </header>
  )
}

export default Header
