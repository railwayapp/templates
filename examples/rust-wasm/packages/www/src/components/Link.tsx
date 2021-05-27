import NLink from "next/link";
import React, { useMemo } from "react";
import "twin.macro";

export interface Props {
  href: string;
  external?: boolean;
  className?: string;
}

const isExternalLink = (href: string) =>
  href == null || href.startsWith("http://") || href.startsWith("https://");

const useIsExternalLink = (href: string) =>
  useMemo(() => isExternalLink(href), [href]);

export const Link: React.FC<Props> = ({
  href,
  external,
  children,
  ...props
}) => {
  const isExternal = (useIsExternalLink(href) || external) ?? false;

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener" {...props}>
        {children}
      </a>
    );
  }

  return (
    <NLink href={href} passHref>
      <a {...props}>{children}</a>
    </NLink>
  );
};
