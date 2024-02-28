# Assignment 4 - Talk is cheap, show me the code! ✅

## Theory

#### 1. Is JSX mandatory for React?
- No, React components and elements can be created with React.createElement JSX just provide HTML like syntex to write code more readable and developer friendly.
#### 2. Is ES6 mandatory for React?
- No, React is Javascript library does not souly rely on Es6. Es6 does improve the developer expirence by adding some features like Arrow Functions, Destructuring Assignment, Let and Const Block-scoped variable declarations.
#### 3. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX
- All are same the way of writing is differnt
#### 4. How can I write comments in JSX?
- With the use of {} we can run Javascript inside the braces, similarly comment can be written inside it. 
#### 5. What is `<React.Fragment></React.Fragment>` and `<></>` ?
- Both syntaxes in React used to create fragments, which allow you to group multiple children without introducing an additional DOM element.
#### 6. What is Virtual DOM?
- The Virtual DOM (Document Object Model) is a programming concept used by React to optimize the performance of web applications.When the state of a React component changes, React first updates the Virtual DOM rather than the real DOM. It performs a "reconciliation" process, where it calculates the difference between the new Virtual DOM and the previous one.
#### 7. What is Reconciliation in React?
- Reconciliation in React refers to the process of updating the Virtual DOM and determining the most efficient way to apply those updates to the actual DOM. When the state or props of a React component change, React needs to figure out what changes to make in the rendered UI. Reconciliation is the algorithm that accomplishes this task.
#### 8. What is React Fiber?
- React Fiber is an internal implementation of the reconciliation algorithm and rendering engine in React. It was introduced to address performance bottlenecks and to enable better handling of asynchronous updates and rendering in React applications.
#### 9. Why we need keys in React? When do we need keys in React?
- With the help of keys React can identify the exact element to render, if not provided if rerenders the whole dom element which slows the performance of the app.
#### 10. Can we use index as keys in React?
- Yes, but it is not recommended because if items are added or removed from the array, the index of the remaining items may change. This can lead to React incorrectly reusing components or inefficiently re-rendering the entire list.
#### 11. What is props in React? Ways to
- Props are just arguments passed to a React component.
#### 12. What is a Config Driven UI ?
- The UI components read and interpret the configuration at runtime. This allows for dynamic rendering of the UI based on the provided configuration.

## Coding Assignment :

#### 1. Build a Food Ordering App ✅ 
#### 2. Think of a cool name for your app ✅
#### 3. Build a AppLayout ✅
#### 4. Build a Header Component with Logo & Nav Items & Cart ✅
#### 5. Build a Body Component ✅
#### 6. Build RestaurantList Component ✅
#### 7. Build RestaurantCard Component ✅
#### 8. Use static data initially ✅
#### 9. Make your card dynamic(pass in props) ✅
#### 10. Props - passing arguments to a function - Use Destructuring & Spread operator ✅
#### 11. Render your cards with dynamic data of restaurants ✅
#### 12. Use Array.map to render all the restaurants ✅