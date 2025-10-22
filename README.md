# TargetBoard Backstage Plugin

Embed interactive **TargetBoard** dashboards and metric cards directly inside your [Backstage](https://backstage.io) developer portal.

This plugin lets you visualize real-time performance metrics, KPIs, and dashboards from your TargetBoard workspace without leaving Backstage.

---
<br />

## 🚀 Features

- 📊 Embed full **TargetBoard Boards** or individual **Metric Cards**
- 🔐 Uses secure API keys for authenticated embeds
- 🧩 Fully configurable via simple component props


---
<br />

## 📦 Installation

Install the app-package into your Backstage app:

```bash
# For Yarn v3+
yarn --cwd packages/app add @targetboard/backstage-plugin

# For Yarn v1 (classic)
yarn add --cwd packages/app @targetboard/backstage-plugin
```

---
<br />

## 🖥️ Usage

Import and use the TargetBoardEmbedCard component anywhere in your Backstage frontend — for example, inside an entity page, overview page, or a custom route.

Example:
```ts
import React from 'react';
import { TargetBoardEmbedCard } from '@targetboard/backstage-plugin';

export const TeamPerformancePage = () => (
  <TargetBoardEmbedCard
    apiKey="api_##########################"
    embedId="your-embed-id"
    title="Team Performance Board"
  />
);
```

You can embed either a Board or a Metric Card with the same component, using their embedId.

---
<br />

## ▶️ Getting Your Embed IDs and API Key

### To embed a Metric Card:

1. Open board where your card is found.
2. Click the ⋯ (menu) on the card.
3. Select Embed → follow the instructions.
4. Copy the Embed ID provided.

### To embed a Board

1. Open the board you want to embed.
2. Click the ⋯ (menu) at the top of the board.
3. Select Embed → follow the instructions.
4. Copy the Embed ID provided.

### To generate an API Key

1. In TargetBoard, go to Settings → API Keys.
2. Click Create new API key.
3. Select expiration period, and continue.
4. Copy the generated key and use it as the apiKey prop.

---
<br />

## 🧱 Props

| Prop | Type | Required | Description |
|---|---|---|---|
| apiKey | string | ✅ | Your TargetBoard API key. |
| embedId | string | ✅ | The embed ID of the board or metric card. |
| title | string | ❌ | Optional card title displayed above the embed. |
| height | string | ❌ | Optional iframe height (default: '480px'). |
| maxHeight | string | ❌ | Optional iframe max-height. |

---
<br />

## 🧩 Requirements

- Backstage v1.30+ (or compatible)
- Node.js 18 or 20 LTS
- React 18

---
<br />

## 📄 License

- Apache License 2.0 © TargetBoard.ai

---
<br />

## 🧭 Links

- 🧱 NPM: [@targetboard/backstage-plugin](https://www.npmjs.com/package/@targetboard/backstage-plugin)
- 🌐 TargetBoard: https://www.targetboard.ai