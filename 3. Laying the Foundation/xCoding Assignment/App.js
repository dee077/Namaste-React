import React from "react"
import ReactDOM from "react-dom/client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const nestedHeaderReactElement = React.createElement(
    'div',
    {className: 'title'},
    [ React.createElement(
        'h1',
        {},
        'Hi from h1 React Element'
      ),
      React.createElement(
        'h2',
        {},
        'Hi from h2 React Element'
      ),
      React.createElement(
        'h3',
        {},
        'Hi from h3 React Element'
      ),
    ]
);

const nestedHeaderJSX = (
  <div className="title">
    <h1>Hi from h1 JSX</h1>
    <h2>Hi from h2 JSX</h2>
    <h3>Hi from h3 JSX</h3>
  </div>
)

const Heading1 = () => (
  <h1>Hi from h1 Component</h1>
)

const Heading2 = () => (
  <h2>Hi from h2 Component</h2>
)

const Heading3 = () => (
  <h3>Hi from h3 Component</h3>
)

const NestedHeaderComponent = () => (
  <div className="title">
    {Heading1()}
    <Heading2/>
    <Heading3></Heading3>
  </div>  
)





const logoUrl = new URL('images/logo.jpg',import.meta.url);
const Logo = () => (
  <img className="logo" src={logoUrl} alt="logo" />  
)

const SearchBar = () => (
  <form action="/search" method="get">
      <input className="input" type="text" id="search" name="search" placeholder="Enter your search term" />
      <button className="submit" type="submit">Search</button>
  </form>
)

const userLogoUrl = new URL('images/userlogo.jpg',import.meta.url);
const UserLogo = () => (
  <img className="userlogo" src={userLogoUrl} alt="userlogo" />  
)

const UserIcon = () => <FontAwesomeIcon className="usericon" icon={faUser} />;

const Header = () => (
  <div>
      <div className="header">
        <Logo />
        <SearchBar />
        <UserIcon />
    </div>  
    <NestedHeaderComponent/>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Header/>)