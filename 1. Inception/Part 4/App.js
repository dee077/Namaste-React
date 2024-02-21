
const nestedDiv=React.createElement(
    'div',
    {id:'parent'},
    [React.createElement(
        'h1',
        {id:'heading', xyz:'abc'},
        'Hello World from React!'
    ),
    React.createElement(
        'div',
        {id:'child1'},
        [React.createElement(
            'h3',
            {className:'heading1'},
            'Hi I am h3 tag',
        ),
        React.createElement(
            'h4',
            {className:'heading2'},
            'Hi I am h4 tag',
        )]
    ),
    React.createElement(
        'div',
        {id:'child2'},
        [React.createElement(
            'h3',
            {className:'heading1'},
            'Hi I am h3 tag',
        ),
        React.createElement(
            'h4',
            {className:'heading2'},
            'Hi I am h4 tag',
        )]
    )]
)

console.log(nestedDiv) // returns a object of Symbol(react.element)
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(nestedDiv)