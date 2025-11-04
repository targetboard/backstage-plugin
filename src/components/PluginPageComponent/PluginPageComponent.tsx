import { Header, Page, Content, HeaderLabel } from "@backstage/core-components";
import { TargetBoardEmbedCard } from "../TargetBoardEmbedCard";

export const PluginPageComponent = () => (
  <Page themeId="tool">
    <Header title="Welcome to targetboard!" subtitle="Optional subtitle">
      <HeaderLabel label="Owner" value="Team X" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ flex: 1, height: "100%", gap: "16px" }}>
          <TargetBoardEmbedCard
            embedId="{embedId}"
            apiKey="{apiKey}"
            title="Embedded Metric"
          />

          <TargetBoardEmbedCard
            embedId="{embedId}"
            apiKey="{apiKey}"
            title="Embedded Board"
          />
        </div>
      </div>
    </Content>
  </Page>
);
