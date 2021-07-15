import { useEffect, useState } from "react"
import { Languages } from "../types/Languages"
import { WordResult } from "../types/WordResult"

type Response = {
  status: number,
  success: boolean,
  message: string,
  result: WordResult
}

function useWordResult(query: string, language: Languages) {
  const apis = {
    es: `https://dictlet.herokuapp.com/spanishdict/query/${query}?isPosAbbr=false`,
    en: `https://dictlet.herokuapp.com/youdao-collins/query/${query}`,
    tr: `https://dictlet.herokuapp.com/seslisozluk/query/${query}`
  }
  let url = apis[language]
  
  const [wordResult, setWordResult] = useState<WordResult | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then((data: Response) => {
        if (data.success) {
          setWordResult(data.result)
        } else {
          setError(true)
        }
      })
      .catch(e => {
        setError(true)
        console.log(`!ERROR: ${e}`)
      })
  }, [query, language])
  return { wordResult, error }
}

export default useWordResult
