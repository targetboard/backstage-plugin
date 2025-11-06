# TargetBoard Backstage Plugin

Embed interactive **TargetBoard** dashboards and metric cards directly inside your [Backstage](https://backstage.io) Developer portal.

The TargetBoard plugin brings real-time delivery intelligence to Backstage-enabling engineering teams and leaders to view performance metrics, KPIs, and dashboards without leaving their workflow. It transforms Backstage from a service catalog into a decision-making hub that connects engineering execution to business outcomes.

---
<br />

## 🎯 About TargetBoard

TargetBoard helps you make faster, data-driven delivery decisions.<br />

We unify data from your entire toolchain to give teams and leaders real-time visibility into delivery performance, predictability, and business impact - without manual reporting or complex setup. 

**Key benefits include:**
- 🚀 Faster delivery decisions
- 📈 Improved predictability
- 💰 Higher ROI on engineering investment
- 🧭 Reduced operational risk
- 🤝 Stronger business alignment
- ⚙️ Lower overhead

[Learn more](https://targetboard.ai/contact-us)

---
<br />

## 🚀 Features

- 📊 **Native Integration** - Embed full TargetBoard dashboards into Backstage
- 🧱 **Metric Cards** - Directly embed essential KPIs, charts, tables, and trends
- 🔐 **Trusted Security** - Uses secure API keys for authenticated embeds
- 🧩 **Customizability** - Fully configurable via simple component props
- 🔍 **Cross-tool visibility** - Connects to Jira, GitHub, GitLab, Bitbucket, AWS, etc.
- 🛡️ **KPI Governance** - Standardized definitions and consistent reporting

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

Import and use the TargetBoardEmbedCard component anywhere in your Backstage frontend - for example, inside an entity page, overview page, or a custom route.

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

\* You can embed either a dashboard's or a metric card's embed-ID using the same component.

---
<br />

## ▶️ Instructions

How to get your embed IDs and API keys inside TargetBoard

### Embedding a Metric Card:

1. Open the board where your desired KPI is found.
2. Click on the card's \[⋯\] menu.
3. Select "Embed", and follow the instructions.
4. Copy the Embed ID provided.

### Embedding a Board

1. Open the board you want to embed.
2. Click on the \[⋯\] menu at the top of the board.
3. Select "Embed", follow the instructions.
4. Copy the Embed ID provided.

### Generating an API-Key

1. Go to Settings → API Keys page.
2. Click on "Create new API key" button.
3. Select expiration period, and continue.
4. Copy the generated key.

---
<br />

## 🧱 Component Properties

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

## 🧠 TL;DR

The TargetBoard Backstage Plugin helps engineers turn Backstage into a delivery intelligence layer — aligning teams, data, and leadership around measurable outcomes.

---
<br />

## 🧭 Contact

- 🧱 NPM: [@targetboard/backstage-plugin](https://www.npmjs.com/package/@targetboard/backstage-plugin)
- 🌐 TargetBoard: https://www.targetboard.ai | [Book a demo](https://targetboard.ai/contact-us)
