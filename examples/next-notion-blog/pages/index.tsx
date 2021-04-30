import { GetStaticProps, NextPage } from 'next'

import getBlogIndex from '@lib/notion/getBlogIndex'
import getNotionUsers from '@lib/notion/getNotionUsers'
import { postIsPublished } from '@lib/blog-helpers'
import { Post } from '@lib/types'

import Page from '@layouts/Page'
import PostItem from '@components/PostItem'

export interface Props {
  posts: Post[]
  preview?: boolean
}
const Home: NextPage<Props> = ({ posts = [] }) => {
  return (
    <Page>
      <div className="max-w-4xl px-4 mx-auto">
        <header className="py-20">
          <h1 className="text-6xl font-bold text-center">Railway Blog</h1>
        </header>

        {posts.length === 0 ? (
          <div className="text-center text-gray-500">Pretty empty here</div>
        ) : (
          <div className="posts max-w-4xl">
            {posts.map((p) => (
              <PostItem key={p.id} post={p} />
            ))}
          </div>
        )}
      </div>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  const postsTable = await getBlogIndex()

  const authorsToGet: Set<string> = new Set()

  const posts: any[] = Object.keys(postsTable)
    .map((slug) => {
      const post = postsTable[slug]
      // remove draft posts in production
      if (!preview && !postIsPublished(post)) {
        return null
      }
      post.Authors = post.Authors || []
      for (const author of post.Authors) {
        authorsToGet.add(author)
      }
      return post
    })
    .filter(Boolean)

  const { users } = await getNotionUsers([...authorsToGet])

  posts.map((post) => {
    post.Authors = post.Authors.map((id) => users[id].full_name)
  })
  return {
    props: {
      preview: preview || false,
      posts,
    },
    revalidate: 10,
  }
}

export default Home
