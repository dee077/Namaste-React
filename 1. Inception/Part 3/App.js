
const heading=React.createElement(
    'h1',
    {id:'heading', xyz:'abc'},
    'Hello World from React!'
)
console.log(heading) // returns a object of Symbol(react.element)
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)