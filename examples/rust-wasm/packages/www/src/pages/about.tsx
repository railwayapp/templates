import { NextPage } from "next";
import React from "react";
import { Page } from "../layouts/Page";
import "twin.macro";

const About: NextPage = () => {
  return (
    <Page>
      <div tw="prose">
        <h1>About</h1>
        <p>This is the about page.</p>
      </div>
    </Page>
  );
};

export default About;
