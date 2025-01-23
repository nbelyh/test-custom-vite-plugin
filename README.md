
# A minimal test to create a vite plugin to import custom file extension

The plugin is located in `vite-custom-loader`.
The "application" source code is located in the `src` folder and is a simple test to import a `.custom` file.
```
import message from './message.custom';

console.log(message);
```

To test the plugin, run the following commands:
```
> npm install
> npm run build
```