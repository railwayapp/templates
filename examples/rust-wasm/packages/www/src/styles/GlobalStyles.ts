import { createGlobalStyle } from "styled-components";
import tw from "twin.macro";

export const GlobalStyles = createGlobalStyle`
  body {
    ${tw`antialiased`}
    ${tw`text-black bg-gray-50 leading-relaxed`}
    ${tw`font-sans`}
  }
`;
