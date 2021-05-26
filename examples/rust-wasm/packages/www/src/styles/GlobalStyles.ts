import { createGlobalStyle } from "styled-components";
import tw from "twin.macro";

export const GlobalStyles = createGlobalStyle`
  body {
    ${tw`antialiased`}
    ${tw`text-fg bg-bg leading-relaxed`}
    ${tw`font-sans`}
  }
`;
