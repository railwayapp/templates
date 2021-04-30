import { Post } from '@lib/types'

export const getBlogLink = (slug: string) => {
  return `/p/${slug}`
}

export const postIsPublished = (post: Post) => {
  return post.Published === 'Yes'
}

export const normalizeSlug = (slug: string) => {
  if (typeof slug !== 'string') return slug

  const startingSlash = slug.startsWith('/')
  const endingSlash = slug.endsWith('/')

  if (startingSlash) {
    slug = slug.substr(1)
  }
  if (endingSlash) {
    slug = slug.substr(0, slug.length - 1)
  }
  return startingSlash || endingSlash ? normalizeSlug(slug) : slug
}
