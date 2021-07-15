import React from 'react'
import { useParams } from 'react-router-dom'
import AudioButton from '../components/buttons/AudioButton'
import Item from '../components/Item'
import LoadingSkeleton from '../components/LoadingSkeleton'
import Logo from '../components/Logo'
import CurrentLanguage from '../containers/CurrentLanguage'
import useWordResult from '../hooks/useWordResult'

const Dict = () => {
  const { query } = useParams<{ query: string }>()
  const { currentLanguage } = CurrentLanguage.useContainer()
  const { wordResult, error } = useWordResult(query, currentLanguage)

  return (
    <div>
      { error && <Logo text="404 NOT FOUND :(" /> }
      { wordResult == null && !error && <LoadingSkeleton />}
      { wordResult && 
        <div>
          <div className="flex justify-between items-center px-2 py-8">
            <div className="flex">
              <span className="text-4xl font-bold text-gray-800 pr-4">
                {wordResult.word}
              </span>
              { wordResult.phonetics &&
                <span className="text-2xl font-bold text-gray-600 self-end">
                  {wordResult.phonetics}
                </span>
              }
            </div>
 
            { wordResult.audioUrl && <AudioButton audioUrl={wordResult.audioUrl} /> }

          </div>

          {wordResult.definitions.map(item =>
            <Item item={item}/>
          )}

        </div>
      }
    </div>
  )
}

export default Dict
