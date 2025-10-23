import { createDevApp } from "@backstage/dev-utils";
import { TargetboardPage, targetboardPlugin } from "../src";

createDevApp()
  .registerPlugin(targetboardPlugin)
  .addPage({
    element: <TargetboardPage />,
    title: "TargetBoard Plugin Page",
    path: "/targetboard",
  })
  .render();
