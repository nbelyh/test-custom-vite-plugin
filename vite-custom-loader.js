export default function customFileLoader() {
  return {
    name: 'vite-plugin-custom-file-loader',

    // Transform function to handle files with .custom extension
    transform(src, id) {
      // Check if the file has the .custom extension
      if (id.endsWith('.custom')) {
        // Process the content of the .custom file
        const processedCode = processCustomFile(src);

        // Return the processed code as a JavaScript module
        return {
          code: processedCode,
          map: null, // You can generate a sourcemap if required
        };
      }
      return null; // Return null if you do not want to handle the file
    },
  };
}

// A simple function to simulate processing .custom files
function processCustomFile(code) {
  // Example: Wrap the content in a default export
  return `export default ${JSON.stringify(code)};`;
}