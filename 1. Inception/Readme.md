# Assignment 1 - Inception

## Theory

#### 1. What is Emmet?
- Emmet allows you to use short abbreviations that expand into full HTML, CSS or any other framework snippets.
For example, typing html:5 and then pressing the expansion key (usually Tab) will generate the basic structure of an HTML5 document.

#### 2. Difference between a Library and Framework?
- In a library, the control flow of the application is determined by the developer. The developer decides when and where to call the 
functions or methods provided by the library.
- In a framework, the control flow is inverted. The framework determines the flow of the application. Developers write code that fits 
into the structure defined by the framework.

#### 3. What is CDN? Why do we use it?
- CDN stands for Content Delivery Network. It is a network of distributed servers strategically located in various data centers around 
the world. The primary purpose of a CDN is to enhance the performance, reliability, and security of delivering web content to users.
CDNs reduce latency by delivering content from servers that are geographically closer to the user. When a user requests content, it is 
served from the nearest CDN server rather than the origin server, resulting in faster load times.

#### 4. Why is React known as React?
- It is named React because of its reactive approach to user interface development. The name reflects the core philosophy and paradigm 
that React follows – building UIs in a reactive and declarative way.

#### 5. What is crossorigin in script tag?
- The crossorigin attribute in a script tag is used to control how the browser handles loading of cross-origin scripts (scripts hosted on a different domain than the one serving the web page). It is commonly used with external scripts, such as those loaded from a Content Delivery Network (CDN).

#### 6. What is diference between React and ReactDOM
- The React package is focused on the core functionality of React, which includes defining and creating React components, managing the component lifecycle, and handling the virtual DOM.
- The ReactDOM package is responsible for interacting with the actual DOM. It provides methods for rendering React components to the browser DOM, updating the DOM based on changes in state or props, and handling events.

#### 7. What is difference between react.development.js and react.production.js files via CDN?
- In react.development.js the file is intended for development environments. It includes additional warnings and error messages that help developers identify issues and debug their code more easily.
- In react.production.js the file is optimized for production environments. It excludes the development-specific warnings and messages to reduce file size and improve performance in production.

#### 8. What is async and defer?
- Async and defer are attributes used in the script tag in HTML, and they affect how the browser downloads and executes the associated JavaScript files.
- When you add the async attribute to the script tag, it tells the browser to download the script asynchronously while the HTML parsing continues.The script will be executed as soon as it's downloaded, which may occur before the HTML parsing is complete. This is beneficial for non-blocking scripts that don't depend on the order of execution or the availability of other scripts.
- When you add the defer attribute to the script tag, it also tells the browser to download the script asynchronously. However, the script execution is deferred until after the HTML parsing is complete. Multiple scripts with the defer attribute will be executed in the order they appear in the HTML. This is useful when scripts depend on each other or need to be executed in a specific order.

## Coding

#### 1. Set up all the tools in your laptop ✅
- VS Code ✔️
- Chrome ✔️
- Extensions of Chrome ✔️
#### 2. Create a new Git repo ✅
#### 3. Build your first Hello World program using ✅
- Using just HTML ✔️
- Using JS to manipulate the DOM ✔️
- Using React ✔️
#### 4. Use CDN Links ✅
#### 5. Create an Element ✅
#### 6. Create nested React Elements ✅
#### 7. Use root.render ✅
#### 8. Push code to Github (Theory as well as code) ✅
#### 9. Learn about Arrow Functions ✅
