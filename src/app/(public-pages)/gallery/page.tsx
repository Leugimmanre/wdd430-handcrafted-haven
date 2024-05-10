import { Brand } from "@/app/components/brand/Brand";
import { MainMenu } from "@/app/components/main-menu/MainMenu";

import React from "react";
import Images from "./Images";

export default function page() {
  return (
    <>
      <Brand />
      <MainMenu orientation="horizontal" />
      <Images/>
    </>
  );
}
