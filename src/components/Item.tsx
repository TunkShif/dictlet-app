import React from 'react'
import { Definition as DefinitionType } from '../types/WordResult'
import Definition from './Definition'
import Example from './Example'

type ItemProps = {
  item: DefinitionType
}

const Item = (props: ItemProps) => {
  return (
    <>
      <Definition pos={props.item.pos} sense={props.item.sense} />
      <Example examples={props.item.examples}/>
    </>
  )
}

export default Item
