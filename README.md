# Movi Player Examples

Live examples and demos for [movi-player](https://www.npmjs.com/package/movi-player) - a modular streaming video library for browsers with WebAssembly FFmpeg pipeline.

🔗 **[View Live Examples](https://movi-player-examples.vercel.app)**

## Examples Included

### 1. Custom Element Example
A complete video player using the `<movi-player>` custom element with:
- Built-in controls and UI
- Light/Dark theme support
- Ambient glow effect
- Responsive design

### 2. YouTube-Style Player
An advanced player implementation featuring:
- YouTube-inspired UI design
- Custom video controls
- Quality settings
- Playback speed controls
- Ambient lighting effect
- Keyboard shortcuts
- Dynamic video recommendations

### 3. Demuxer & Thumbnails
Low-level API demonstration showing:
- Video metadata extraction
- Automatic thumbnail generation
- Screenshot grid creation
- Format detection
- Track information display

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/MrUjjwalG/movi-player-examples.git
cd movi-player-examples

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the examples.

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
movi-player-examples/
├── index.html          # Landing page with links to all examples
├── element.html        # Custom element example
├── youtube.html        # YouTube-style player example
├── demuxer.html        # Demuxer & thumbnails example
├── package.json        # Project dependencies
├── vite.config.js      # Vite configuration
└── vercel.json         # Vercel deployment config
```

## Technologies Used

- [movi-player](https://www.npmjs.com/package/movi-player) - Video player library
- [Vite](https://vitejs.dev/) - Build tool and dev server
- WebAssembly FFmpeg - Video processing
- Vanilla JavaScript - No framework dependencies

## Features Demonstrated

- 🎬 Multiple player implementations
- 🎨 Custom UI/UX designs
- 📱 Responsive layouts
- 🌓 Theme switching
- ⚡ WebAssembly-powered video processing
- 🖼️ Thumbnail generation
- 📊 Metadata extraction
- 🎮 Custom controls
- ⌨️ Keyboard shortcuts

## Browser Support

Requires browsers with:
- ES6+ support
- WebAssembly support
- SharedArrayBuffer support (for CORS-protected headers)

## Deployment

This project is deployed on Vercel with automatic deployments on push to main branch.

The deployment includes:
- Vite build optimization
- CORS headers for WebAssembly
- Static file serving

## Links

- 📦 [movi-player on npm](https://www.npmjs.com/package/movi-player)
- 🌐 [Live Examples](https://movi-player-examples.vercel.app)
- 💻 [GitHub Repository](https://github.com/MrUjjwalG/movi-player-examples)
- 📚 [movi-player GitHub](https://github.com/mrujjwalg/movi-player)

## License

ISC

## Author

Ujjwal Kashyap ([@MrUjjwalG](https://github.com/MrUjjwalG))
