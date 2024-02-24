# Assignment 2 - Igniting our App

# Theory

#### What is NPM?
- NPM is everyhting but not node package manager, it does package modules but there is not a single mention of npm full form. It is used to manage and install packages to your project.

#### What is Parcel/Webpack? Why do we need it?
- Parcel is known for its zero-configuration approach. It requires minimal setup, making it easy for developers to get started without needing an extensive configuration file.
- Parcel can automatically detect and handle various types of assets like JavaScript, CSS, HTML, and images. This reduces the need for explicit configuration for different asset types.
- Parcel comes with a built-in development server that supports hot module replacement (HMR), allowing developers to see changes in real-time without manually refreshing the page.
- Webpack offers extensive configuration options, providing fine-grained control over how assets are processed and bundled. This makes it suitable for complex projects with specific requirements.
- Webpack is known for its module bundling capabilities. It treats all assets as modules and can bundle not only JavaScript but also other assets and dependencies, creating a dependency graph.
- Webpack allows for code splitting, which means breaking down the bundled code into smaller chunks that can be loaded on demand. This is beneficial for optimizing page load times.

#### What is .parcel-cache?
- Parcel caches intermediate build artifacts to speed up subsequent builds. When you make changes to your project and trigger a build, Parcel checks the cache to see if it has already processed and stored certain files. If it finds cached data for unchanged files, it can skip some of the processing steps, making the build faster.

#### What is npx?
- Npx is used to execute the installed npm package.

#### What is difference between dependencies vs devDependencies?
- Dependencies are packages that your project needs in order to run successfully in a production environment.They include libraries and modules that are necessary for the application's core functionality.
- Devdependencies are packages that are only needed during development and testing phases.They include tools, testing frameworks, build systems, and other dependencies that are not required for the actual execution of the application but are essential for development, testing, and building processes.

#### What is Tree Shaking?
-  The process of eliminating dead (unused) code from the final bundled code. The goal is to "shake off" or remove the parts of the code that are not actually imported or used in the application, reducing the overall bundle size.

#### What is Hot Module Replacement?
- Hot Module Replacement (HMR) is a feature that allows developers to update modules in a running application without a full page reload.

#### List down your favourite 5 superpowers of Parcel and describe them in your own words.
-Zero Configuration: Parcel's most remarkable superpower is its ability to require little to no configuration. Unlike many other bundlers that may require complex setup files, Parcel can intelligently detect and configure the project based on the files and dependencies present. This makes it extremely developer-friendly, allowing users to dive into their projects without spending time on extensive configuration.

- Blazing Fast Build Speed Parcel excels in build speed. It utilizes parallelization and caching strategies to build projects rapidly. The speed is crucial for developers who want quick feedback during the development process. Parcel's performance optimizations make it an excellent choice for projects of varying sizes, ensuring that builds complete swiftly.

- Support for Various Asset Types: Another superpower is Parcel's ability to handle a wide range of asset types out of the box. Whether it's JavaScript, CSS, HTML, images, or even unconventional assets like web fonts, Parcel can seamlessly process and bundle them. This versatility reduces the need for additional configuration or plugins, simplifying the development workflow.

- Hot Module Replacement (HMR): Parcel's built-in support for Hot Module Replacement (HMR) is a superpower that enhances the development experience. HMR enables developers to see real-time updates as they make changes to their code, preserving the application state and providing a faster feedback loop. This feature significantly speeds up the development process and enhances productivity.

- Automatic Asset Optimization: Parcel takes care of optimizing assets for production automatically. It performs tasks like minification, code splitting, and tree shaking without requiring explicit configuration. This helps developers deploy optimized and efficient applications without having to manually fine-tune optimization settings.

#### What is .gitignore? What should we add and not add into it?
- The files which can reaquired even after deletion these type of files shuould not be imported to github so, we add these files to .gitignore. For example, node_modules,dist,build files etc. 

#### What is the difference between package.json and package-lock.json.
- The package.json file contains metadata about the project, including its dependencies, scripts, and other configurations. It is meant for humans to read and write. On the other hand, package-lock.json is an automatically generated file that locks down the specific version of each package's dependencies.

#### Why should I not modify package-lock.json?
- Editing package-lock.json directly can lead to inconsistencies and conflicts, making it difficult to maintain a consistent and reproducible environment across different developers or deployment scenarios. Modifying it manually can result in unexpected behavior, break the deterministic nature of package installations, and potentially introduce errors or security vulnerabilities into the project.

#### What is node_modules? Is it a good idea to push that on git?
- It contains all the third-party libraries and tools that your project depends on. Since these dependencies can be numerous and can take up a significant amount of space, it is generally not considered to push the entire node_modules directory to Github. 

#### What is the dist folder?
-  It typically contains the optimized and minified versions of your source code, assets, and any other necessary files for deployment.
#### What is browserlists?
- Browserslist is a configuration file that allows developers to specify which browsers and their versions their project should support

#### Read about dif bundlers: vite, webpack, parcel ✅
#### Read about: ^ - caret and ~ - tilda ✅
#### Read about Script types in html (MDN Docs) ✅

## Project Assignment:

#### Intialize npm into your repo ✅
#### Install react and react-dom ✅
#### Remove CDN links of react ✅
#### Install parcel ✅
#### Ignite your app with parcel ✅
#### Add scripts for “start” and “build” with parcel commands ✅
#### Add .gitignore file ✅
