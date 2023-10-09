# Using Require and Import in same file.

This is an example of how to use the require function that is normally used in CommonJS within a module or ES Module in Node.js.

Normally you can use modules in an ES Module javascript file by using the `import` keyword.

```javascript
import axios from 'axios';
```

But what id you need to use the `require` function normally used in CommonJS. You can actually import the `require` function into a ES module by adding the following two lines of code to your ES Module.

```javascript
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
```