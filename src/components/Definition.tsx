import React from 'react'

type DefinitionProps = {
  pos: string | null,
  sense: string | null
}

const Definition = (props: DefinitionProps) => {
  return (
    <div className="bg-gray-200 p-2 mb-2 text-lg text-gray-800 shadow-sm rounded">
      <span className="definition font-bold pr-2">{props.pos}</span>
      <span>{props.sense}</span>
    </div>
  )
}

export default Definition
