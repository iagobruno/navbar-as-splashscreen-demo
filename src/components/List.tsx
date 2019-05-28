import React, { FunctionComponent, useState, useRef } from 'react'
import { Group, Rover, useRoverState } from 'reakit'
import { shuffle } from '../utils'
import seriesData from '../data'

import Thumbnail from './Thumbnail';

type Props = {
  title: string,
  gridMode?: boolean,
  children?: never,
}

const List: FunctionComponent<Props> = ({ title, gridMode = false }) => {
  const [series] = useState(() => shuffle(seriesData))
  const rover = useRoverState({ loop: true, orientation: 'horizontal' })
  const wrapperRef = useRef<HTMLDivElement>(null)
console.log('rendred')
  function handleThumbFocus(index: number) {
    // Colocar o elemento em foco alinhado a esquerda da tela
    const originalWidth = (355 + 20)
    wrapperRef.current.style.left = `-${originalWidth * index}px`

    // Colocar a lista no centro vertical da tela (movendo o scroll da página)
    const navbarHeight = 72 / 2
    const halfHeightOfWrapper = wrapperRef.current.offsetHeight / 2
    const halfHeightOfWindow = window.innerHeight / 2
    const scrollTop = wrapperRef.current.offsetTop - navbarHeight - halfHeightOfWindow + halfHeightOfWrapper
    window.scrollTo(0, scrollTop)
  }

  return (
    <>
      <div className="list__title">{title} <img src="/arrow-forward.svg" /></div>

      <Group
        className={`list ${gridMode ? ' grid' : ''}`}
        tabIndex={-1}
        ref={wrapperRef}
      >
        {series.map((item, index) => (
          <Rover key={item.title} {...rover} onFocus={handleThumbFocus.bind(null, index)}>
            {props => (
              <Thumbnail title={item.title} image={item.image} otherProps={props} />
            )}
          </Rover>
        ))}
      </Group>
    </>
  )
}

export default List
