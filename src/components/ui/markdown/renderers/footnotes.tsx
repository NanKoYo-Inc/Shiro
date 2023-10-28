import React from 'react'
import type { FC, PropsWithChildren } from 'react'

import { springScrollToElement } from '~/lib/scroller'

import { Divider } from '../../divider'

export const MFootNote: FC<PropsWithChildren> = (props) => {
  return (
    <div className="children:my-2 children:leading-6 children:text-base mt-4">
      <Divider />
      {React.Children.map(props.children, (child, index) => {
        return (
          <div id={`fn:${index + 1}`}>
            {child}
            <a
              href={`#fnref:${index + 1}`}
              onClick={(e) => {
                e.preventDefault()
                springScrollToElement(
                  document.getElementById(`fnref:${index + 1}`)!,
                  -window.innerHeight / 2,
                )
                highlight(`${index + 1}`)
              }}
            >
              ↩
            </a>
          </div>
        )
      })}
    </div>
  )
}

function highlight(id: string) {
  const fnRefElement = document.getElementById(`fnref:${id}`)
  if (fnRefElement) {
    fnRefElement.style.color = 'red'
    setTimeout(() => {
      fnRefElement.style.color = ''
    }, 5000)
  } else {
    console.log(`Element with id fnref:${id} not found.`)
  }
}
