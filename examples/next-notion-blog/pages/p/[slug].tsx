import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { CSSProperties, useEffect } from 'react'
import components from '@components/dynamic'
import Heading from '@components/Heading'
import Link from '@components/Link'
import Page from '@layouts/Page'
import { PostPage } from '@layouts/PostPage'
import { getBlogLink } from '@lib/blog-helpers'
import getBlogIndex from '@lib/notion/getBlogIndex'
import getNotionUsers from '@lib/notion/getNotionUsers'
import getPageData from '@lib/notion/getPageData'
import { textBlock } from '@lib/notion/renderers'
import { Block, Post } from '@lib/types'

export interface DetailedPost extends Post {
  content: Block[]
}

export interface Props {
  post: DetailedPost | null
  redirect?: string
  preview: boolean
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsTable = await getBlogIndex()

  const paths = Object.keys(postsTable)
    .filter((post) => postsTable[post].Published === 'Yes')
    .map((slug) => getBlogLink(slug))

  // we fallback for any unpublished posts to save build time
  // for actually published ones
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
  preview,
}) => {
  const slug = (params ?? {}).slug as string

  // load the postsTable so that we can get the page's ID
  const postsTable = await getBlogIndex()
  const post: DetailedPost = postsTable[slug]

  // if we can't find the post or if it is unpublished and
  // viewed without preview mode then we just redirect to /blog
  if (!post) {
    return {
      props: {
        post: null,
        redirect: '/',
        preview: false,
      },
      revalidate: 5,
    }
  }
  const postData = await getPageData(post.id)
  post.content = postData.blocks

  const { users } = await getNotionUsers(post.Authors || [])
  post.Authors = Object.keys(users).map((id) => users[id].full_name)

  return {
    props: {
      post,
      preview: preview ?? false,
    },
    revalidate: 10,
  }
}

const listTypes = new Set(['bulleted_list', 'numbered_list'])

const RenderPost: React.FC<Props> = ({ post, preview }) => {
  const router = useRouter()

  let listTagName: string | null = null
  let listLastId: string | null = null
  let listMap: {
    [id: string]: {
      key: string
      isNested?: boolean
      nested: string[]
      children: React.ReactFragment
    }
  } = {}

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  // if you don't have a post at this point, and are not
  // loading one from fallback then  redirect back to the index
  if (!post) {
    return (
      <div className={''}>
        <p>
          Woops! did not find that post, redirecting you back to the blog index
        </p>
      </div>
    )
  }

  return (
    <>
      {preview && (
        <div>
          <div>
            <b>Note:</b>
            {` `}Viewing in preview mode{' '}
            <Link href={`/api/clear-preview?slug=${post.Slug}`}>
              <button>Exit Preview</button>
            </Link>
          </div>
        </div>
      )}

      {(!post.content || post.content.length === 0) && (
        <p>This post has no content</p>
      )}

      {(post.content || []).map((block, blockIdx) => {
        const { value } = block
        const { type, properties, id, parent_id } = value
        const isLast = blockIdx === post.content.length - 1
        const isList = listTypes.has(type)
        const toRender: Array<React.ReactElement | null> = []

        if (isList) {
          listTagName = components[type === 'bulleted_list' ? 'ul' : 'ol']
          listLastId = `list${id}`

          listMap[id] = {
            key: id,
            nested: [],
            children: textBlock(properties.title, true, id),
          }

          if (listMap[parent_id]) {
            listMap[id].isNested = true
            listMap[parent_id].nested.push(id)
          }
        }

        if (listTagName && (isLast || !isList)) {
          toRender.push(
            React.createElement(
              listTagName,
              { key: listLastId! },
              Object.keys(listMap).map((itemId) => {
                if (listMap[itemId].isNested) return null

                const createEl = (item) =>
                  React.createElement(
                    components.li || 'ul',
                    { key: item.key },
                    item.children,
                    item.nested.length > 0
                      ? React.createElement(
                          components.ul || 'ul',
                          { key: item + 'sub-list' },
                          item.nested.map((nestedId) =>
                            createEl(listMap[nestedId])
                          )
                        )
                      : null
                  )
                return createEl(listMap[itemId])
              })
            )
          )
          listMap = {}
          listLastId = null
          listTagName = null
        }

        const renderHeading = (Type: string | React.ComponentType) => {
          toRender.push(
            <Heading key={id}>
              <Type key={id}>{textBlock(properties.title, true, id)}</Type>
            </Heading>
          )
        }

        switch (type) {
          case 'page':
          case 'divider':
            break
          case 'text':
            if (properties) {
              toRender.push(textBlock(properties.title, false, id))
            }
            break
          case 'image':
          case 'video':
          case 'embed': {
            const { format = {} } = value
            const {
              block_width,
              block_height,
              display_source,
              block_aspect_ratio,
            } = format
            const baseBlockWidth = 768
            const roundFactor = Math.pow(10, 2)
            // calculate percentages
            const width = block_width
              ? `${
                  Math.round(
                    (block_width / baseBlockWidth) * 100 * roundFactor
                  ) / roundFactor
                }%`
              : block_height || '100%'

            const isImage = type === 'image'
            const Comp = isImage ? 'img' : 'video'
            const useWrapper = block_aspect_ratio && !block_height
            const childStyle: CSSProperties = useWrapper
              ? {
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  position: 'absolute',
                  top: 0,
                }
              : {
                  width,
                  border: 'none',
                  height: block_height,
                  display: 'block',
                  maxWidth: '100%',
                }

            let child: React.ReactElement | null = null

            if (!isImage && !value.file_ids) {
              // external resource use iframe
              child = (
                <iframe
                  style={childStyle}
                  src={display_source}
                  key={!useWrapper ? id : undefined}
                  className={!useWrapper ? 'asset-wrapper' : undefined}
                />
              )
            } else {
              // notion resource
              child = (
                <Comp
                  key={!useWrapper ? id : undefined}
                  src={`/api/asset?assetUrl=${encodeURIComponent(
                    display_source as any
                  )}&blockId=${id}`}
                  controls={!isImage}
                  alt={`An ${isImage ? 'image' : 'video'} from Notion`}
                  loop={!isImage}
                  muted={!isImage}
                  autoPlay={!isImage}
                  style={childStyle}
                />
              )
            }

            toRender.push(
              useWrapper ? (
                <div
                  style={{
                    paddingTop: `${Math.round(block_aspect_ratio * 100)}%`,
                    position: 'relative',
                  }}
                  className="asset-wrapper"
                  key={id}
                >
                  {child}
                </div>
              ) : (
                child
              )
            )
            break
          }
          case 'header':
            renderHeading('h1')
            break
          case 'sub_header':
            renderHeading('h2')
            break
          case 'sub_sub_header':
            renderHeading('h3')
            break
          case 'code': {
            if (properties.title) {
              const content = properties.title[0][0]
              const language = properties.language[0][0]

              toRender.push(
                <components.Code key={id} language={language || ''}>
                  {content}
                </components.Code>
              )
            }
            break
          }
          case 'quote': {
            if (properties.title) {
              toRender.push(
                React.createElement(
                  components.blockquote,
                  { key: id },
                  properties.title
                )
              )
            }
            break
          }
          case 'callout': {
            toRender.push(
              <div className="callout" key={id}>
                {value.format?.page_icon && (
                  <div>{value.format?.page_icon}</div>
                )}
                <div className="text">
                  {textBlock(properties.title, true, id)}
                </div>
              </div>
            )
            break
          }
          case 'tweet': {
            if (properties.html) {
              toRender.push(
                <div
                  dangerouslySetInnerHTML={{ __html: properties.html }}
                  key={id}
                />
              )
            }
            break
          }
          default:
            if (process.env.NODE_ENV !== 'production' && !listTypes.has(type)) {
              console.warn('unknown type', type)
            }
            break
        }
        return toRender
      })}
    </>
  )
}

const SlugPage: NextPage<Props> = (props) => {
  const router = useRouter()
  const { redirect, post } = props

  useEffect(() => {
    if (redirect && !post) {
      router.replace(redirect)
    }
  }, [redirect, post])

  if (post == null) {
    return <Page />
  }

  return (
    <PostPage post={post}>
      <RenderPost {...props} />
    </PostPage>
  )
}

export default SlugPage
