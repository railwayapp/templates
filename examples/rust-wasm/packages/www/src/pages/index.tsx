import { NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";
import "twin.macro";
import { Page } from "../layouts/Page";

const DynamicLife = dynamic(() => import("../components/Life"));

const Home: NextPage = () => {
  return (
    <Page>
      <DynamicLife />
    </Page>
  );
};

export default Home;
