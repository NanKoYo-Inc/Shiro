import { bundledLanguages } from 'shiki'
import type {
  BundledLanguage,
  BundledTheme,
  CodeToHastOptions,
  HighlighterCore,
} from 'shiki'

import {
  transformerMetaHighlight,
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from '@shikijs/transformers'

export function codeHighlighter(
  highlighter: HighlighterCore,
  {
    lang,
    attrs,
    code,
  }: {
    lang: string
    attrs: string
    code: string
  },
) {
  const codeOptions: CodeToHastOptions<BundledLanguage, BundledTheme> = {
    lang,
    meta: {
      __raw: attrs,
    },
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
  }

  return highlighter.codeToHtml(code, {
    ...codeOptions,
    transformers: [
      ...(codeOptions.transformers || []),
      transformerNotationDiff(),
      transformerNotationHighlight(),
      transformerNotationWordHighlight(),
      transformerMetaHighlight(),
    ],
  })
}

export const parseFilenameFromAttrs = (attrs: string) => {
  // filename=""

  const match = attrs.match(/filename="([^"]+)"/)
  if (match) {
    return match[1]
  }
  return null
}

export const isSupportedShikiLang = (lang: string) => {
  return Object.keys(bundledLanguages).includes(lang)
}
