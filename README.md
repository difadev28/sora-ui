# Sora UI - Material Base Component Library

Sora UI is a modular React component library built with TypeScript, TailwindCSS v4, and modern build tools. This repository follows a **multi-registry architecture** that allows each component to be built and published independently, ensuring minimal bundle sizes and tree-shaking friendly exports.

## 🏗️ Architecture

### Multi-Registry Design

This repository implements a monorepo structure where each component is an independent package with its own:
- Individual package.json with scoped naming (`@sora-ui-material/{component-name}`)
- Separate build configuration
- Independent versioning
- Isolated testing suite
- Individual publishing capability

### Benefits

- **No bundling**: Components are not bundled together, allowing consumers to import only what they need
- **Tree-shaking friendly**: Each component exports exactly what it needs
- **Independent versioning**: Update components without affecting the entire library
- **Selective imports**: Install only the components you actually use
- **Faster CI/CD**: Build and publish only changed components

## 📁 Project Structure

```
sora-ui/
├── packages/
│   └── components/
│       ├── atoms/           # Smallest UI elements
│       │   ├── badge/
│       │   ├── button/
│       │   ├── dropdown/
│       │   ├── spinner/
│       │   ├── switch-button/
│       │   └── tooltip/
│       └── molecules/       # Combinations of atoms
│           ├── modal-base/
│           └── page-wrapper/
├── dist/                    # Built components (generated)
├── scripts/                 # Build and utility scripts
└── src/
    └── styles/             # Shared TailwindCSS configuration
```

## 🚀 Available Components

### Atoms

| Component | Package | Version | Description |
|-----------|---------|---------|-------------|
| Badge | `@sora-ui-material/badge` | ^1.0.1 | Small status indicators |
| Button | `@sora-ui-material/button` | ^1.0.1 | Interactive button element |
| Dropdown | `@sora-ui-material/dropdown` | - | Selectable dropdown menu |
| Spinner | `@sora-ui-material/spinner` | ^1.0.0 | Loading state indicator |
| Switch Button | `@sora-ui-material/switch-button` | - | Toggle switch component |
| Tooltip | `@sora-ui-material/tooltip` | ^1.0.2 | Hover tooltip component |

### Molecules

| Component | Package | Version | Description |
|-----------|---------|---------|-------------|
| Modal Base | `@sora-ui-material/modal-base` | ^1.0.3 | Modal dialog foundation |
| Page Wrapper | `@sora-ui-material/page-wrapper` | - | Page layout wrapper |

## 📦 Installation

Install individual components as needed:

```bash
# Install button component
npm install @sora-ui-material/button

# Install multiple components
npm install @sora-ui-material/button @sora-ui-material/badge
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn
- React 19+
- TailwindCSS v4

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/your-org/sora-ui.git
cd sora-ui
```

2. Install dependencies:
```bash
npm install
```

3. Run development server (for the main app):
```bash
npm run dev
```

### Building Individual Components

Each component can be built independently:

```bash
# Build specific component
npm run build:button
npm run build:badge
npm run build:modal-base

# View all available build scripts
npm run
```

### Publishing Components

Components are published independently to npm:

```bash
# Publish specific component
npm run publish:button
npm run publish:badge
npm run publish:modal-base
```

The build process:
1. Compiles TypeScript to JavaScript (ES and UMD formats)
2. Generates TypeScript declaration files (.d.ts)
3. Injects CSS into the JS bundle using `vite-plugin-css-injected-by-js`
4. Copies package.json to the dist directory
5. Outputs to `/dist/components/{component-name}/`

## 🧪 Testing

Run tests for all components:
```bash
npm test
```

Run tests for a specific component:
```bash
cd packages/components/atoms/button
npm test
```

## 🎨 Theming & Styling

Sora UI uses TailwindCSS v4 with CSS Modules for component-specific styles. Each component:
- Has its own CSS module file (e.g., `Button.module.css`)
- Generates a standalone CSS file during build
- Supports theme customization through TailwindCSS configuration

## 📋 Component Development Guidelines

When adding a new component:

1. Create component directory under `packages/components/atoms/` or `packages/components/molecules/`
2. Create the following structure:
   ```
   component-name/
   ├── src/
   │   ├── ComponentName.tsx    # Main component file
   │   ├── ComponentName.module.css  # Component styles
   │   ├── index.ts             # Export file
   │   └── type.ts              # TypeScript types
   ├── package.json             # Component package configuration
   ├── vite.config.ts          # Vite build configuration
   ├── tsconfig.json           # TypeScript configuration
   └── README.md               # Component documentation
   ```

3. Update root `package.json` with build and publish scripts
4. Configure Vite to output to `/dist/components/{component-name}/`

## 🔧 Configuration

### Build Configuration

Each component uses Vite with:
- `@vitejs/plugin-react-swc` for fast React compilation
- `vite-plugin-dts` for TypeScript declaration generation
- `vite-plugin-css-injected-by-js` for CSS bundling
- External dependencies: React, React-DOM, TailwindCSS

### Package Configuration

Each component's `package.json` includes:
- Scoped naming (`@sora-ui-material/{component}`)
- Multiple export formats (ES, UMD, CommonJS)
- Peer dependencies for React and TailwindCSS
- Public access for npm publishing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Develop and test your component
4. Ensure all tests pass
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🔗 Links

- [Documentation](https://your-docs-site.com)
- [Storybook](https://your-storybook-site.com)
- [NPM Organization](https://www.npmjs.com/org/sora-ui-material)

## 🆘 Troubleshooting

### Common Issues

1. **Build fails**: Ensure all peer dependencies are installed
2. **CSS not applying**: Check that TailwindCSS v4 is properly configured
3. **TypeScript errors**: Verify `tsconfig.json` includes proper paths

### Getting Help

- Open an issue on GitHub
- Check existing documentation
- Review component examples in the repository