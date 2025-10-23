# Deployment and Testing:

Deployment runs automatically using the GitHub release.yml workflow (under 'actions').<br>
Release workflow:

1. Check for changeset updates
   1. If no updates are available, do nothing
   2. Else, continue deployment
2. Clean and rebuild package
3. Read package.json current version
4. Deploy Package to NPM with new release.
5. Save version and changelog updates back to git.
6. Create tag and new release in GitHub.

## Working with 'Changesets':

1. Adding a change: `yarn changeset` (=> then choose version level and comment)
2. Wrapping a version: `yarn changeset version` (Runs automatically when pushing to `main`)

### Manual Deployment to NPM (optional):

This "Manual Deployment" section can be skipped.<br>
It's only if you want to deploy manually to NPMjs.

1. Change "version": "0.1.1" to "version": "0.1.2" in package.json (Only when not using `yarn changeset version`)
2. Login to npm: `npm login` / `npm whoami`
3. Publish (builds, packs and publishes the plugin): `npm publish --access public` // For Beta: `npm publish --tag beta --access public`
4. Verify deployment: https://www.npmjs.com/package/@targetboard/backstage-plugin

---

## Backstage - Install and test plugin:

### New installation:

1. Install Backstage: `npx @backstage/create-app@latest` => Provide app name.
2. Go inside the installation folder: `cd app-name`.
3. Install the plugin: `yarn --cwd packages/app add @targetboard/backstage-plugin`.
4. Run backstage: `yarn start`. (Runs on: http://localhost:3000/)

### Within Backstage:

1. Create a new page:

   1. Within the `src/components` folder create a new folder named `test-page`.
   2. Within the folder create a new tsx file `test-page.ts`.
   3. Copy & paste this code in the file:

   ```
   import { TargetBoardEmbedCard } from '@targetboard/backstage-plugin';

   const TestPage = () => {
     return (
       <div
         style={{
           display: 'flex',
           padding: '20px',
           width: '100%',
           height: '100%',
         }}
       >
         <div style={{ width: '100%' }}>
           <TargetBoardEmbedCard
             apiKey="{apiKey}"
             embedId="{embedId}"
             domain="http://localhost:4242"
             title="TargetBoard Dashboard"
           />
         </div>
       </div>
     );
   };

   export default TestPage;
   ```

   4. Replace the `{apiKey}` and `{embedId}` placeholders with actual values.
   5. Notice: The domain is set to run with a local environment: `domain="http://localhost:4242"`. Change it if needed.

2. Add the new page to the app's routing
   1. Open the `App.tsx` file, in the `src` folder.
   2. Within the `<FlatRoutes>...</FlatRoutes>` component, add a new Route. (Make sure you import the page component)
   ```
   <Route path="/test" element={<TestPage />} />
   ```
   3. That's it! Go to: `http://localhost:3000/test` to view the page with the Targetboard Card.

### On an existing installation - Update the plugin

1. Update: `yarn --cwd packages/app up @targetboard/backstage-plugin@latest`

### Customizing Backstage - Change runnin port:

To change the port from `:3000` into another (for example: `:1234`):<br>
Go to `app-config.yaml` and replace both instances of `:3000`: (`app -> baseUrl` + `backend -> cors -> origin`).
