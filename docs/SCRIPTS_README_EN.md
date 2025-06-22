# Modular Script Structure for Dragon Biztrip

## Overview

The project has been reorganized to use a modular JavaScript architecture. All scripts are now separated into individual modules and managed through the main `main.js` file.

## File Structure

### Main Files
- `main.js` - Main file that imports and initializes all modules
- `assets/js/buttonLanguage.js` - Language switching module
- `assets/js/buttonMenu.js` - Mobile menu module
- `assets/js/developerInfo.js` - Developer information block module

### HTML Files
All HTML files now use only one script:
```html
<script type="module" src="main.js"></script>
```

## Modules

### main.js
Main file that:
- Imports all modules
- Initializes functionality
- Handles initialization errors
- Logs loading process

### buttonLanguage.js
Language switching module:
- Loads localization files
- Translates page content
- Saves selected language in localStorage
- Exports `initLanguageSwitcher()` function

### buttonMenu.js
Mobile menu module:
- Manages burger menu
- Handles mobile menu open/close
- Closes menu when clicking links or outside menu
- Exports `initMobileMenu()` function

### developerInfo.js
Developer block module:
- Manages developer information display
- Handles arrow animation
- Uses data attributes instead of onclick
- Exports `toggleDeveloperInfo()` and `initDeveloperInfo()` functions

## Advantages of New Structure

1. **Modularity** - each functionality in a separate file
2. **Reusability** - modules can be used independently
3. **Maintainability** - easier to find and fix errors
4. **Scalability** - easy to add new modules
5. **Performance** - ES6 modules load asynchronously

## Usage

### Adding a New Module

1. Create a new module file (e.g., `newModule.js`)
2. Export an initialization function:
```javascript
export function initNewModule() {
    // Your code
}
```
3. Import in `main.js`:
```javascript
import { initNewModule } from './assets/js/newModule.js';
```
4. Add initialization to `initApp()` function:
```javascript
try {
    initNewModule();
    console.log('✅ New module initialized');
} catch (error) {
    console.error('❌ Error initializing new module:', error);
}
```

### Using Data Attributes

Instead of `onclick`, use data attributes:
```html
<!-- Before -->
<button onclick="toggleDeveloperInfo()">Button</button>

<!-- After -->
<button data-action="toggle-developer">Button</button>
```

And handle in the module:
```javascript
const button = document.querySelector('[data-action="toggle-developer"]');
if (button) {
    button.addEventListener('click', toggleDeveloperInfo);
}
```

## Compatibility

- Requires modern browser with ES6 modules support
- All major browsers support ES6 modules
- For older browsers, transpilation may be required

## Debugging

In the browser console, you will see initialization logs:
- 🚀 Initializing Dragon Biztrip...
- ✅ Language switcher initialized
- ✅ Mobile menu initialized
- ✅ Developer block initialized
- 🎉 Dragon Biztrip successfully initialized!

Error messages will be shown with ❌.

## File Paths

### For Main Page (index.html)
```javascript
import { initLanguageSwitcher } from './assets/js/buttonLanguage.js';
```

### For Pages in /pages/ folder
```javascript
import { initLanguageSwitcher } from '../assets/js/buttonLanguage.js';
```

## Localization Files

Localization files are located in `assets/locales/`:
- `ru.json` - Russian translations
- `en.json` - English translations
- `zh.json` - Chinese translations

The language switcher automatically detects the correct path based on the current page location.

## Error Handling

All modules include try-catch blocks for error handling:
```javascript
try {
    initLanguageSwitcher();
    console.log('✅ Language switcher initialized');
} catch (error) {
    console.error('❌ Error initializing language switcher:', error);
}
```

## Performance Considerations

- ES6 modules are loaded asynchronously
- Modules are cached by the browser
- Only necessary modules are loaded
- Error handling prevents crashes

## Best Practices

1. **Always export functions** from modules
2. **Use descriptive names** for exported functions
3. **Handle errors** in try-catch blocks
4. **Use data attributes** instead of inline event handlers
5. **Log initialization** for debugging
6. **Check for element existence** before adding event listeners

## Future Enhancements

Potential improvements for the modular structure:
- Add module lazy loading
- Implement module dependency management
- Add module testing framework
- Create module documentation generator
- Add module performance monitoring 