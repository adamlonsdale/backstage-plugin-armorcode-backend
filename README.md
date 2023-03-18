# backstage-plugin-armorcode-backend

Welcome to the backstage-plugin-armorcode-backend backend plugin!


## Getting started

## Installation
This plugin needs to be added to an existing backstage instance.

```bash
# From your Backstage root directory
yarn add --cwd packages/backend @adamlonsdale/backstage-plugin-armorcode-backend
```

Create a file called armorcode.ts inside `packages/backend/src/plugins/` and add the following:

### armorcode.ts
```typescript
import { createRouter } from '@adamlonsdale/backstage-plugin-armorcode-backend';
import { Router } from 'express';
import { PluginEnvironment } from '../types';

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {  
  return await createRouter({
    logger: env.logger,
    config: env.config,
  });
}
```

And import the plugin to `packages/backend/src/index.ts`.
### src/index.ts
```diff
diff --git a/packages/backend/src/index.ts b/packages/backend/src/index.ts
index c4736a5..5822302 100644
--- a/packages/backend/src/index.ts
+++ b/packages/backend/src/index.ts
@@ -28,6 +28,7 @@ import scaffolder from './plugins/scaffolder';
 import proxy from './plugins/proxy';
 import techdocs from './plugins/techdocs';
 import search from './plugins/search';
+import armorcode from './plugins/armorcode';
 import { PluginEnvironment } from './types';
 import { ServerPermissionClient } from '@backstage/plugin-permission-node';
 import { DefaultIdentityClient } from '@backstage/plugin-auth-node';
@@ -85,6 +86,7 @@ async function main() {
   const techdocsEnv = useHotMemoize(module, () => createEnv('techdocs'));
   const searchEnv = useHotMemoize(module, () => createEnv('search'));
   const appEnv = useHotMemoize(module, () => createEnv('app'));
+  const armorocdeEnv = useHotMemoize(module, () => createEnv('armorocde'));

   const apiRouter = Router();
   apiRouter.use('/catalog', await catalog(catalogEnv));
@@ -93,6 +95,7 @@ async function main() {
   apiRouter.use('/techdocs', await techdocs(techdocsEnv));
   apiRouter.use('/proxy', await proxy(proxyEnv));
   apiRouter.use('/search', await search(searchEnv));
+  apiRouter.use('/armorcode', await armorcode(armorcodeEnv));

   // Add backends ABOVE this line; this 404 handler is the catch-all fallback
   apiRouter.use(notFoundHandler());

```

## Configuration

Add the following into your `app-config.yaml`
### Config
```yaml
armorcode:
  host: https://app.armorocde.com
  token: YOUR_API_TOKEN
```

Add the following into your catalog
### Catalog
```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: backstage
  annotations:
    armorcode/project: YOUR_PROJECT_NAME/YOUR_PROJECT_VERSION
```