# Assignment 6 - Explore the World ✅

## Theory

####  What is a Microservice?
- A microservice is a software architectural style that structures an application as a collection of loosely coupled services. Each service is developed, deployed, and scaled independently.

####  What is Monolith architecture?
- Monolithic architecture is a traditional software design approach where all components of an application are combined into a single codebase and deployed as a single unit. In a monolithic architecture, the entire application, including the user interface, business logic, and data access layers, is tightly integrated into a single executable or deployable artifact.

####  What is the difference between Monolith and Microservice?
- In Monolith architecture is a software design approach were all compoments of application like frontend, backend, database etc. are deployed independently and cumuicate betweem each other.
- Monolithic architecture is a software design approach where all components of an application are combined into a single codebase and deployed as a single unit.

####  Why do we need a useEffect Hook?
- You can perform asynchronous operations inside the useEffect hook, such as fetching data from an API, without blocking the main thread. This allows for non-blocking behavior and better performance. 
####  What is Optional Chaining?
- It allows you to access properties of an object without worrying about whether intermediate properties exist or not.

####  What is Shimmer UI?
- Shimmer UI is a design pattern used in user interfaces to indicate that content is being loaded or is in the process of loading.
####  What is the difference between JS expression and JS statement
- Expression: An expression is any valid unit of code that resolves to a value.
- Statement: A statement is a complete line of code that performs some action.

####  What is Conditional Rendering, explain with a code example
- Conditional rendering in React refers to the ability to render different components or elements based on certain conditions.
- Shimmer ui is rendered Conditionally when the api fetch is under process.
####  What is CORS?
- CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented by web browsers that restricts web pages from making requests to a different origin (domain) than the one that served the page.

####  What is async and await?
- Async: The async keyword is used to declare an asynchronous function. When a function is marked as async, it automatically returns a promise. Inside an async function, you can use the await keyword to pause the execution of the function until an asynchronous operation completes.
- Await: The await keyword is used to pause the execution of an async function until a promise is settled (resolved or rejected). When you use await before a promise, the execution of the async function is paused until the promise is resolved, and the result of the promise is returned. If the promise is rejected, an error is thrown.

####  What is the use of `const json = await data.json();` in getRestaurants()
- The await keyword is used to pause the execution of the async function until the data.json() method returns a promise that is settled. The json() method is an asynchronous operation that parses the JSON text of the HTTP response body.

## Coding Assignment :

####  Play with the useEffect Hook to see when it is called?(before or after render) ✅
####  Play with dependency array in useEffect Hook ✅
####  Play with the developer console by putting a debugger in render and useEffect ✅
####  Call an actual API to get data ✅
####  Handle Error in your API call ✅
####  Build Shimmer UI when data in not loaded ✅
####  Render your UI with actual API data ✅
####  Make Search functionality work ✅
####  Make a Login Logout button which toggles with a state ✅