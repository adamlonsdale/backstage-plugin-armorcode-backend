# backstage-plugin-armorcode-backend

Welcome to the backstage-plugin-armorcode-backend backend plugin!

## Getting started

## Installation
This plugin needs to be added to an existing backstage instance.

```bash
# From your Backstage root directory
yarn add --cwd packages/backend @adamlonsdale/backstage-plugin-armorcode-backend
```

### New Backend System (Recommended)

For the new backend system, add the plugin to your backend in `packages/backend/src/index.ts`:

```typescript
import { createBackend } from '@backstage/backend-defaults';
import { armorcodeModule } from '@adamlonsdale/backstage-plugin-armorcode-backend';

const backend = createBackend();
backend.add(armorcodeModule());
await backend.start();
```

### Legacy Backend System

For the legacy backend system, create a file called armorcode.ts inside `packages/backend/src/plugins/` and add the following:

#### armorcode.ts
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

And import the plugin to `packages/backend/src/index.ts`:

```typescript
import armorcode from './plugins/armorcode';

// In your main function
const armorcodeEnv = useHotMemoize(module, () => createEnv('armorcode'));
apiRouter.use('/armorcode', await armorcode(armorcodeEnv));
```

## Configuration

Add the following into your `app-config.yaml`
### Config
```yaml
armorcode:
  host: https://app.armorcode.com
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