// Browser polyfills for Node.js modules
import { Buffer } from 'buffer';

// Make Buffer available globally
if (typeof window !== 'undefined') {
  window.Buffer = Buffer;
  (window as any).global = window;
}

if (typeof global === 'undefined') {
  (globalThis as any).global = globalThis;
}
