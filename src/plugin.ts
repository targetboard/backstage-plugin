import {
  createComponentExtension,
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const targetboardPlugin = createPlugin({
  id: 'targetboard',
  routes: {
    root: rootRouteRef,
  },
});

export const TargetboardPage = targetboardPlugin.provide(
  createRoutableExtension({
    name: 'TargetboardPage',
    component: () =>
      import('./components/PluginPageComponent').then(
        m => m.PluginPageComponent,
      ),
    mountPoint: rootRouteRef,
  }),
);

// Embeddable cards
export const TargetBoardEmbedCardExtension = createComponentExtension({
  name: 'TargetBoardEmbedCardExtension',
  component: {
    lazy: () =>
      import('./components/TargetBoardEmbedCard').then(
        m => m.TargetBoardEmbedCard,
      ),
  },
});
