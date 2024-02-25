# Assignment 3 - Laying the Foundation ✅

## Topics

#### 1. JSX
- JSX is a syntex extension for javascript to describe ui elements better, JSX gives a developer friendly way to write code.
- JS engine does not understand JSX, the package marager uses a compiler to convert JSX code to React.createElement on starting the server.

#### 2. React.createElement vs JSX
- At the end of the day both gives same output but JSX is a cleaner and developer friendly way to write code.

#### 3. Benefits of JSX
- JSX ui structure is very close to HTML which makes it more more readable and it is easily visualize.
- JSX allows the integration with JavaScript with the help of {}.
- JSX automatically escapes any values embedded in it, preventing injection attacks like Cross-Site Scripting.

#### 4. Behind the Scenes of JSX
- Behind the scenes JSX is same as React.createElement, it is just more enhanced way to write code.

#### 5.Babel & parcel role in JSX
- Babel is used to transform JSX syntax into standard JavaScript. JSX is not natively understood by browsers, so Babel ensures that the JSX code is converted into compatible JavaScript that browsers can interpret
- When you import JSX files in your project, Parcel recognizes them and seamlessly integrates with Babel to process JSX.

#### 6. Components
- When a react element is wrapped up inside a function/class whose name starts with a captial letter is a react component. There are two types of components, class based compnents and functional components.

#### 7. Functional Components
- It is just a normal javascript function which return a react element in JSX.

#### 8. Composing Components
- When you use a component inside a component is knows as composing component.

#### 9. Role of type attribute in script tag? What options can I use there?
- The type attribute in the script tag is used to specify the scripting language of the embedded code. The options we can use there are:
- text/javascript
- module
- application/json
- text/python


#### 10. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX
- All of them gives the same output, only the writing style differs.

## Assignment

#### 1. What is JSX? ✅
#### 2. Superpowers of JSX ✅
#### 3. Role of type attribute in script tag? What options can I use there? ✅
#### 4. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX ✅