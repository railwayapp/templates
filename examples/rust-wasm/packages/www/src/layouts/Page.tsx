import React from "react";
import { Props as SEOProps, SEO } from "../components/SEO";
import "twin.macro";

export interface Props {
  seo?: SEOProps;
}

export const Page: React.FC<Props> = props => {
  return (
    <>
      <SEO {...props.seo} />

      <div tw="flex flex-col w-full px-6 mx-auto">
        <main tw="flex-grow py-20 md:py-20 w-full mx-auto">
          {props.children}
        </main>
      </div>
    </>
  );
};
