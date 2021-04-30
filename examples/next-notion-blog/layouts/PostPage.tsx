import dayjs from 'dayjs'
import React, { useMemo } from 'react'
import { ArrowLeft } from 'react-feather'
import { Post } from '@lib/types'

import Page from '@layouts/Page'
import { url as baseUrl } from '@components/Seo'
import Link from '@components/Link'

const getImageLinkFromImage = (path: string) => `${baseUrl}${path}`

export interface Props {
  post: Post
}

export const PostPage: React.FC<Props> = ({ post, children }) => {
  const formattedDate = useMemo(() => dayjs(post.Date).format('MMM D, YYYY'), [
    post.Date,
  ])

  return (
    <Page
      seo={{
        title: post.Page,
        image: getImageLinkFromImage(post.Image),
      }}
    >
      <div className="wrapper">
        <div className="pb-20">
          <article>
            <header className="pt-20 pb-12">
              <Link href={`/p/${post.Slug}`}>
                <h1 className="text-6xl font-bold">{post.Page}</h1>
              </Link>

              <div className="pt-8 text-gray-400">{formattedDate}</div>
            </header>

            <section className="prose lg:prose-lg">{children}</section>
          </article>

          <div className="pt-12">
            <Link href="/" className="flex text-gray-500 hover:text-primary">
              <ArrowLeft className="mr-4" />
              Back to posts
            </Link>
          </div>
        </div>
      </div>
    </Page>
  )
}
