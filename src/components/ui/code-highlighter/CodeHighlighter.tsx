import React, { useEffect, useState } from 'react'
import {
  createShikiHighlighter,
  renderCodeToHTML,
  runTwoSlash,
} from 'shiki-twoslash'
import type { FC } from 'react'

declare global {
  interface Window {
    Prism: any
  }
}

interface Props {
  lang: string | undefined
  content: string
}

export const HighLighter: FC<Props> = (props) => {
  const { lang: language, content: value } = props
  const [html, setHtml] = useState<string | null>(null)

  useEffect(() => {
    const highlightCode = async () => {
      const highlighter = await createShikiHighlighter({ theme: 'dark-plus' })
      const twoslash = runTwoSlash(value, language, {})
      const renderedHtml = renderCodeToHTML(
        twoslash.code,
        language || 'markup',
        { twoslash: true },
        { themeName: 'dark-plus' },
        highlighter,
        twoslash,
      )
      setHtml(renderedHtml)
    }

    highlightCode()
  }, [language, value])

  if (html === null) {
    // 返回一个占位符或加载状态
    return <div>Loading...</div>
  }

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
