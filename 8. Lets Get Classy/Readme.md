# Assignment 8 - Let's get Classy ✅

## Theory:

#### How do you create Nested Routes react-router-dom cofiguration
- We can pass a list of objects and each object contains element, path, errorElement and children, this children again contain a list of objects and this is how we can achieve nested routes.

#### Read abt createHashRouter, createMemoryRouter from React Router docs. ✅

#### What is the order of life cycle method calls in Class Based Components
- Constructor -> render -> componentDidMount

#### Why do we use componentDidMount?
- It is used to perform side effects after the component has been mounted .It is commonly used for tasks such as fetching data from an API, initializing third-party libraries, or setting up subscriptions.

#### Why do we use componentWillUnmount? Show with example
- It is used to perform cleanup tasks before a component is unmounted and removed from the DOM tree.
- For example if we switch tabs between nav items like about and home, after leaving a tab its componentWillUnmount will be called.

#### (Research) Why do we use super(props) in constructor?
- Access to this keyword it ensures that the this keyword refers to the correct object (i.e., the instance of the child component) within the constructor and throughout the component's lifecycle methods.

#### (Research) Why can't we have the callback function of useEffect async? 
- The cleanup function returned by the useEffect hook must be synchronous. If the callback function were asynchronous, it might not complete its execution when the component unmounts, leading to potential memory leaks or resource leaks.

## Coding Assignment:

#### Create a Class Based Component ✅
#### Create 2 class based child components ✅
#### Pass props from Parent to child ✅
#### Create a constructor ✅
#### Create a state variable inside child ✅
#### Use this.setState to update it ✅
#### What if there are multiple state variables? ✅
#### Write a console.log for each lifecycle method ✅
#### Play with the console logs to find out the correct order of their execution ✅
#### Create interval inside componentDidMount? ✅
#### Use clearInterval to fix the issue caused by that interval ✅