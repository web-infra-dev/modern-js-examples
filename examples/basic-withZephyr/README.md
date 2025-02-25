# Modern.js + Zephyr Example

This example demonstrates how to integrate Modern.js with Zephyr, showcasing a basic setup for building and deploying applications.

## Getting Started

## Deployment

Before deploying:

1. Initialize a new git repository.

   ```bash
   git init
   ```

2. Add remote origin.

   ```bash
   git remote add origin <repository-url>
   ```

3. Commit your changes.

   ```bash
   git add .
   git commit -m "Initial commit"
   ```

4. Install dependencies:

   ```bash
   pnpm install
   ```

5. Build for production:

   ```bash
   pnpm build
   ```

The deployment URL will be shown in the console output after successful build.

## Configuration

This example includes a preconfigured `modern.config.ts` with Zephyr integration. Key configuration includes:

- Flat HTML output structure
- Main entry configuration
- Zephyr plugin setup
- RSPack/Webpack bundler configuration

Read more about it here https://docs.zephyr-cloud.io/recipes/modernjs

## Learn More

- [Zephyr Website](https://zephyr-cloud.io/)
- [Zephyr Documentation](https://docs.zephyr-cloud.io/)
