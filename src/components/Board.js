import React, { useEffect, useState, useRef } from 'react'
import Excalidraw from '@excalidraw/excalidraw'

import '../stylesheets/components/Board.scss';

const Board = () => {
  const boardRef = useRef(null)

  const handleChange = (elements, state) => {
    console.log('elements', elements)
    console.log('state', state)
  }

  return(
    <div className="Board">
      <Excalidraw
       ref={boardRef}
       onChange={handleChange}
       viewModeEnabled={false}
       theme={"dark"} />
    </div>
  )
}

export default Board