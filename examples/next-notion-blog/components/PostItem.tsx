import { useMemo } from 'react'
import Image from 'next/image'
import dayjs from 'dayjs'

import { Post } from '@lib/types'

import Link from '@components/Link'
import { textBlock } from '@lib/notion/renderers'

export interface Props {
  post: Post
}

const PostItem = ({ post }: Props) => {
  const formattedDate = useMemo(
    () => dayjs(new Date(post.Date)).format('MMM D, YYYY'),
    [post.Date]
  )

  return (
    <Link href={`/p/${post.Slug}`} className="flex mb-16">
      <div className="post-item transform lg:hover:scale-105 transition-transform flex-1">
        <Image
          className="rounded hover:scale-50"
          src={post.Image}
          width={1440}
          height={720}
        />
      </div>

      <div className="post-info py-4 ml-20 flex flex-col justify-center flex-1">
        <header className="font-bold text-4xl">{post.Page}</header>
        <p className="text-gray-400 mt-3">
          {(!post.preview || post.preview.length === 0) &&
            'No preview available'}
          {(post.preview || []).map((block, idx) =>
            textBlock(block, true, `${post.Slug}${idx}`)
          )}
        </p>
        <div className="text-gray-600 mt-3">{formattedDate}</div>
      </div>
    </Link>
  )
}

export default PostItem
