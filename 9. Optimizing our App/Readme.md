# Assignment 9 - Optimizing our App ✅

## Theory

#### When and why do we need lazy()?
- The component will be loaded only when it's actually needed, typically when it's about to be rendered. This can significantly improve the initial loading time of your application, especially if you have large components or many components that are not immediately required.

#### What is suspense?
- It is a React component that enables declarative handling of loading states in React applications, particularly when working with asynchronous code such as lazy loading of components or data fetching.

#### Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator.To fix, updates that suspend should be wrapped with startTransition? How doessuspense fix this error?
- when a component suspends while rendering synchronously, which means that a component is trying to fetch data or perform some other asynchronous operation during its initial render without wrapping the suspenseful operation in a startTransition function.

#### Advantages and disadvantages of using this code splitting pattern?
- Faster initial load time: By loading only the essential code needed for the initial render, code splitting reduces the initial load time of the application, leading to faster user interactions.
- Improved performance: Smaller bundles result in faster parsing and execution times, improving the overall performance of the application.
- Complexity: Implementing code splitting requires additional setup and configuration, which can add complexity to the development process, especially for larger applications.
- Potential for bugs: Splitting code into multiple chunks increases the complexity of the application architecture, which can lead to potential bugs and compatibility issues, especially if not implemented carefully.

#### When do we and why do we need suspense?
- It allows components to suspend rendering while waiting for some asynchronous operation to complete, like fetching data from an API or loading a code-split chunk. Suspense is particularly useful in scenarios where you want to improve the user experience by showing a loading indicator or fallback content while waiting for data to load.

## Coding 

#### Create your custom hooks ✅
#### Try out lazy and suspense ✅
#### Make your code clean. ✅