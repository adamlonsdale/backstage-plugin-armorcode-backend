# Backstage ArmorCode Backend Plugin

Backstage backend plugin for integrating ArmorCode vulnerability management platform. This is a TypeScript-based backend plugin that provides REST API endpoints for accessing ArmorCode data within Backstage applications.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap and Build
- Install dependencies: `yarn install` -- takes 90 seconds. NEVER CANCEL. Set timeout to 120+ seconds.
  - Expect warnings about peer dependencies (normal and safe to ignore)
  - Uses Node.js 16+ (verified compatible)
- TypeScript compilation: `yarn tsc` -- takes 6 seconds
- Lint the code: `yarn lint` -- takes 3 seconds  
- Build the plugin: `yarn build` -- takes 2 seconds
- Run tests: `yarn test` -- takes 4 seconds

### Running the Plugin
- ALWAYS create an `app-config.yaml` file in the repository root before starting:
```yaml
armorcode:
  host: https://your-armorcode-host.com
  token: YOUR_API_TOKEN
```
- Start standalone server: `yarn start`
  - Server runs on port 7007
  - API endpoints available at `http://localhost:7007/armorcode-backend/`
  - Health check: `http://localhost:7007/armorcode-backend/health`
  - Products endpoint: `http://localhost:7007/armorcode-backend/products`

### Configuration Requirements
- Requires `app-config.yaml` with armorcode configuration block
- Server will fail to start without proper configuration
- Configuration is automatically loaded from repository root

## Validation

### Manual Testing Scenarios
- ALWAYS test the health endpoint after making changes: `curl http://localhost:7007/armorcode-backend/health`
  - Should return: `{"status":"ok"}`
- Test the products endpoint (will fail with test config but validates API structure): `curl http://localhost:7007/armorcode-backend/products`
- ALWAYS run through the complete build pipeline before committing: `yarn install && yarn tsc && yarn lint && yarn build && yarn test`

### Build Validation
- The plugin builds successfully in under 5 minutes total
- All tests must pass (currently 1 test suite with health endpoint test)
- Linting must pass with no errors
- TypeScript compilation must complete without errors

### CI Requirements
- Always run `yarn lint` before committing - CI (.github/workflows/ci.yml) will fail otherwise
- GitHub Actions CI runs: install, tsc, lint, build
- Uses Node.js 16.x in CI environment

## Common Tasks

### Exploring the Repository
- View repository structure: `ls -la` in root shows main files and directories
- Explore source code: `find src -name "*.ts" | head -20` shows TypeScript files
- Check models: `ls src/api/models/ | wc -l` shows 158 generated model files  
- Review main router: `cat src/service/router.ts` shows API endpoints
- Check package scripts: `cat package.json | grep -A 10 scripts` shows available commands

### Development Workflow
1. Make code changes
2. Run `yarn tsc` to check TypeScript compilation
3. Run `yarn lint` to check code style
4. Run `yarn test` to ensure tests pass
5. Run `yarn build` to verify build works
6. Test manually by starting server and checking endpoints
7. Commit changes

### Plugin Integration
- This plugin is designed to be added to existing Backstage instances
- Installation requires creating `armorcode.ts` in `packages/backend/src/plugins/`
- Must be imported and registered in `packages/backend/src/index.ts`
- Requires configuration in target application's `app-config.yaml`

### API Structure
- Main router in `src/service/router.ts` handles HTTP endpoints
- ArmorCode API client in `src/api/ArmorcodeRestApi.ts` wraps external API calls
- 158 TypeScript model definitions in `src/api/models/` (auto-generated from OpenAPI)
- Health endpoint at `/health` for monitoring
- Products endpoint at `/products` for listing ArmorCode products
- Critical findings endpoint at `/products/:productId/findings/critical`

## Repository Structure

### Key Files and Directories
```
/
├── src/
│   ├── index.ts              # Main export (router)
│   ├── run.ts                # Standalone server runner
│   ├── service/
│   │   ├── router.ts         # Express router with endpoints
│   │   ├── router.test.ts    # Router tests
│   │   └── standaloneServer.ts # Development server
│   └── api/
│       ├── ArmorcodeRestApi.ts # API client wrapper
│       ├── models/           # 130+ TypeScript model definitions
│       └── services/         # Generated API service classes
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── .eslintrc.js              # ESLint configuration
└── .github/workflows/        # CI/CD pipelines
    ├── ci.yml                # Build and test
    └── cd.yml                # Publish to npm
```

### Generated vs Manual Code
- `src/api/models/` and `src/api/services/` are auto-generated from OpenAPI specs
- `src/service/` contains manual business logic
- Main integration points are in `src/service/router.ts` and `src/api/ArmorcodeRestApi.ts`

### Dependencies
- Uses Backstage CLI for build tooling (`@backstage/cli`)
- Express.js for HTTP routing
- Generated API client from OpenAPI specifications
- Winston for logging
- Jest for testing via Backstage CLI

## Troubleshooting

### Common Issues
- **Server won't start with "ENOENT" error**: Create `app-config.yaml` in repository root with valid armorcode configuration
- **Build failures**: Run `yarn install` first to ensure all dependencies are installed  
- **Peer dependency warnings**: These are normal and can be ignored
- **API endpoint errors**: Expected when using test configuration - validates that routing works
- **Missing config errors**: Server requires `app-config.yaml` file in repository root to start

### Build Times and Timeouts
- **NEVER CANCEL** long-running commands
- `yarn install`: 90 seconds (use 120+ second timeout)
- `yarn tsc`: 6 seconds (use 30+ second timeout)  
- `yarn lint`: 3 seconds (use 30+ second timeout)
- `yarn build`: 2 seconds (use 30+ second timeout)
- `yarn test`: 4 seconds (use 30+ second timeout)

### Environment Requirements
- Node.js 16+ (tested and verified)
- Yarn package manager
- TypeScript support via Backstage CLI
- No additional system dependencies required