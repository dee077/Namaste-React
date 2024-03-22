# Assignment 11 - Data is the new Oil ✅

## Theory:

#### What is prop drilling?
-  The process of passing down props from a higher-level component to a deeply nested child component through intermediary components that do not actually use the props themselves is known as prop drilling.

#### What is lifting the state up?
- Moving the state from a lower-level component to a higher-level component in the component tree. This is done to share the state between multiple components that need access to the same data or to centralize the state management for better control and consistency. 

#### What is Context Provider and Context Consumer?
- Context Provider: The Context Provider is a component that provides the context to its child components. It wraps the part of the component tree where you want to make the context available.
- Context Consumer: The Context Consumer is a component that consumes the context provided by the Provider. It allows components to access the context value and use it within their render method.

#### If you don’t pass a value to the provider does it take the default value?
- Yes, if you don't pass a value to the provider, it will use the default value provided when creating the context using the createContext function.

## Coding:

#### Practice React Context with code examples ✅
#### Try out Nested Contexts ✅
