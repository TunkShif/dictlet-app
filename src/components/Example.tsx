import React from 'react'
import { Example as ExampleType } from '../types/WordResult'

type SentenceProps = {
  example: ExampleType
}

type ExampleProps = {
  examples: Array<ExampleType>
}

const Sentence = (props: SentenceProps) => {
  return (
    <div className="mb-2">
      <p className="sentence-es">{props.example.example}</p>
      <p className="sentence-en text-gray-700">{props.example.exampleTranslation}</p>
    </div>
  )
}

const Example = (props: ExampleProps) => {
  return (
    <div className="text-lg px-2">
      {
        props.examples.map(example =>
        <Sentence example={example} />)
      }
    </div>
  )
}

export default Example
