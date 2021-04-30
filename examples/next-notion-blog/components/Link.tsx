import { useMemo } from 'react'
import NLink from 'next/link'

export interface Props {
  href: string
  children: React.ReactNode
  external?: boolean
  className?: string
}

const isExternalLink = (href: string) =>
  href == null || href.startsWith('http://') || href.startsWith('https://')

const useIsExternalLink = (href: string) =>
  useMemo(() => isExternalLink(href), [href])

const Link = ({ href, external, children, ...props }: Props) => {
  const isExternal = (useIsExternalLink(href) || external) ?? false

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" {...props}>
        {children}
      </a>
    )
  }

  return (
    <NLink href={href} passHref>
      <a {...props}>{children}</a>
    </NLink>
  )
}

export default Link
