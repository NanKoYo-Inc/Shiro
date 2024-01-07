import { Divider } from '~/components/ui/divider'
import { AbsoluteCenterSpinner, Spinner } from '~/components/ui/spinner'
import { isUndefined } from '~/lib/_'
import { clsxm } from '~/lib/helper'

import { Empty } from '../../shared/Empty'
import { OffsetMainLayout } from '../layouts'
import { CommentAuthorCell } from './CommentAuthorCell'
import { CommentContentCell } from './CommentContentCell'
import { useCommentDataSource } from './CommentContext'

export const CommentMobileList = () => {
  const { isLoading, data } = useCommentDataSource()

  if (isLoading && isUndefined(data)) {
    return (
      <div className="flex flex-grow items-center justify-center">
        <Spinner />
      </div>
    )
  }
  if (!isUndefined(data) && !data.pages.length) {
    return <Empty className="flex-grow" />
  }

  const totalLength =
    data?.pages.reduce((acc, page) => {
      return acc + page.data.length
    }, 0) || 0

  return (
    <OffsetMainLayout className="relative mt-4">
      {isLoading && <AbsoluteCenterSpinner />}
      <ul
        className={clsxm(
          'flex flex-col duration-200',
          isLoading && 'opacity-80',
        )}
      >
        {data?.pages.map((page, i) => {
          return page.data.map((item, j) => {
            const idx = i * page.data.length + j
            return (
              <li key={item.id} className="flex flex-col gap-2">
                <CommentAuthorCell comment={item} />
                <CommentContentCell comment={item} />

                {idx !== totalLength - 1 && <Divider />}
              </li>
            )
          })
        })}
      </ul>
    </OffsetMainLayout>
  )
}
