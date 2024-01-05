'use client'

import { useMemo } from 'react'
import Balancer from 'react-wrap-balancer'
import { useIsomorphicLayoutEffect } from 'foxact/use-isomorphic-layout-effect'
import { atom, useAtomValue } from 'jotai'
import type {
  NoteModel,
  NoteWrappedPayload,
  PageModel,
  PostModel,
} from '@mx-space/api-client'

import { simpleCamelcaseKeys } from '@mx-space/api-client'

import { previewDataAtom } from '~/atoms/preview'
import { ErrorBoundary } from '~/components/common/ErrorBoundary'
import { Paper } from '~/components/layout/container/Paper'
import { NoteMetaBar, NoteRootBanner } from '~/components/modules/note'
import { ArticleRightAside } from '~/components/modules/shared/ArticleRightAside'
import { ReadIndicatorForMobile } from '~/components/modules/shared/ReadIndicator'
import { jotaiStore } from '~/lib/store'
import { isNoteModel, isPageModel, isPostModel } from '~/lib/url-builder'
import {
  CurrentNoteDataAtomProvider,
  CurrentNoteDataProvider,
} from '~/providers/note/CurrentNoteDataProvider'
import {
  CurrentPageDataAtomProvider,
  CurrentPageDataProvider,
} from '~/providers/page/CurrentPageDataProvider'
import {
  CurrentPostDataAtomProvider,
  CurrentPostDataProvider,
} from '~/providers/post/CurrentPostDataProvider'
import {
  LayoutRightSidePortal,
  LayoutRightSideProvider,
} from '~/providers/shared/LayoutRightSideProvider'
import { WrappedElementProvider } from '~/providers/shared/WrappedElementProvider'

import {
  MarkdownImageRecordProviderInternal,
  PageMarkdown,
  PageSubTitle,
  PageTitle,
} from '../(page-detail)/[slug]/pageExtra'
import {
  IndentArticleContainer,
  NoteHeaderDate,
  NoteMarkdown,
  NoteMarkdownImageRecordProvider,
  NoteTitle,
} from '../notes/[id]/pageExtra'
import {
  HeaderMetaInfoSetting,
  PostMarkdown,
  PostMarkdownImageRecordProvider,
  PostMetaBarInternal,
} from '../posts/(post-detail)/[category]/[slug]/pageExtra'

export default function PreviewPage() {
  useIsomorphicLayoutEffect(() => {
    const search = location.search
    const searchParams = new URLSearchParams(search)

    let targetOrigin = searchParams.get('origin')

    if (!targetOrigin) {
      return
    }
    targetOrigin = decodeURIComponent(targetOrigin)

    const handler = (e: MessageEvent) => {
      const parsedData = (() => {
        try {
          const parsedData = JSON.parse(e.data)
          return parsedData
        } catch {
          console.debug('preview page receive data', e?.data)
          return null
        }
      })()

      if (!parsedData) return
      const PREVIEW_HASH = new URLSearchParams(location.search).get('key')
      if (!PREVIEW_HASH) return
      console.debug('preview page receive data', parsedData)
      if (parsedData.key !== PREVIEW_HASH) {
        return
      }

      if (parsedData.type === 'preview') {
        if (
          JSON.stringify(jotaiStore.get(previewDataAtom)) ===
          JSON.stringify(parsedData.data)
        )
          return
        jotaiStore.set(previewDataAtom, simpleCamelcaseKeys(parsedData.data))
      }
    }
    window.addEventListener('message', handler)

    console.debug('preview page ready')
    window.opener.postMessage('ok', targetOrigin)

    const timer = setInterval(() => {
      window.opener.postMessage('ok', targetOrigin)
    }, 3000)
    return () => {
      window.removeEventListener('message', handler)
      clearInterval(timer)
    }
  }, [])

  const previewData = useAtomValue(previewDataAtom)

  if (!previewData) {
    return null
  }

  switch (true) {
    case isNoteModel(previewData):
      return <NotePreview />
    case isPostModel(previewData):
      return <PostPreview />

    case isPageModel(previewData):
      return <PagePreview />
  }

  return null
}

const PostPreview = () => {
  const data = useAtomValue(previewDataAtom) as PostModel
  const overrideAtom = useMemo(() => atom(null! as PostModel), [])
  return (
    <div className="container m-auto mt-[120px] max-w-7xl px-2 md:px-6 lg:p-0">
      <CurrentPostDataAtomProvider overrideAtom={overrideAtom}>
        <CurrentPostDataProvider data={data} />
        <div className="relative flex min-h-[120px] grid-cols-[auto,200px] lg:grid">
          <article className="prose relative w-full min-w-0">
            <header className="mb-8">
              <h1 className="text-center">
                <Balancer>{data.title}</Balancer>
              </h1>

              <PostMetaBarInternal className="mb-8 justify-center" />
            </header>
            <WrappedElementProvider>
              <PostMarkdownImageRecordProvider>
                <ErrorBoundary>
                  <PostMarkdown />
                </ErrorBoundary>
              </PostMarkdownImageRecordProvider>

              <LayoutRightSidePortal>
                <ArticleRightAside />
              </LayoutRightSidePortal>
            </WrappedElementProvider>
          </article>

          <LayoutRightSideProvider className="relative hidden lg:block" />
        </div>
      </CurrentPostDataAtomProvider>
    </div>
  )
}

const NotePreview = () => {
  const data = useAtomValue(previewDataAtom) as NoteModel

  const overrideAtom = useMemo(() => atom(null! as NoteWrappedPayload), [])
  return (
    <div className="mx-auto mt-[100px] max-w-[60rem]">
      <CurrentNoteDataAtomProvider overrideAtom={overrideAtom}>
        <CurrentNoteDataProvider
          data={useMemo(() => {
            return {
              prev: undefined,
              next: undefined,
              data: {
                ...data,

                created: new Date().toISOString(),
                images: data.images ?? [],
                count: data.count ?? {
                  read: 0,
                  like: 0,
                },
              },
            } as NoteWrappedPayload
          }, [data])}
        />
        <Paper>
          <IndentArticleContainer>
            <header>
              <NoteTitle />
              <span className="flex flex-wrap items-center text-sm text-neutral-content/60">
                <NoteHeaderDate />
                <NoteMetaBar />
              </span>
              <NoteRootBanner />
            </header>

            <WrappedElementProvider>
              <NoteMarkdownImageRecordProvider>
                <ErrorBoundary>
                  <NoteMarkdown />
                </ErrorBoundary>

                <LayoutRightSidePortal>
                  <ArticleRightAside />
                </LayoutRightSidePortal>
              </NoteMarkdownImageRecordProvider>
            </WrappedElementProvider>
          </IndentArticleContainer>
        </Paper>
      </CurrentNoteDataAtomProvider>
    </div>
  )
}

const PagePreview = () => {
  const data = useAtomValue(previewDataAtom) as PageModel

  const overrideAtom = useMemo(() => atom(null! as PageModel), [])

  return (
    <div className="relative m-auto mt-[120px] min-h-[300px] w-full max-w-5xl px-2 md:px-6 lg:p-0">
      <CurrentPageDataAtomProvider overrideAtom={overrideAtom}>
        <CurrentPageDataProvider data={data} />
        <div className="relative w-full min-w-0">
          <HeaderMetaInfoSetting />
          <article className="prose">
            <header className="mb-8">
              <PageTitle />

              <PageSubTitle />
            </header>

            <WrappedElementProvider>
              <ReadIndicatorForMobile />
              <MarkdownImageRecordProviderInternal>
                <PageMarkdown />
              </MarkdownImageRecordProviderInternal>

              <LayoutRightSidePortal>
                <ArticleRightAside />
              </LayoutRightSidePortal>
            </WrappedElementProvider>
          </article>
        </div>

        <LayoutRightSideProvider className="absolute bottom-0 right-0 top-0 hidden translate-x-full lg:block" />
      </CurrentPageDataAtomProvider>
    </div>
  )
}