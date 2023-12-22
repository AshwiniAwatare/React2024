const heading = React.createElement(
    'h1', //tag
    { id: 'heading' }, //attribute
    'Hi ashwini' // childer 
);
console.log(heading); //object

// createElement creates js object , props is id, text here except tag element

// React creates object and convert it into html element and push into root element using render function
const rootElement = ReactDOM.createRoot(document.getElementById('root'));



{/* <div id="parent">
    <div id="child1">
        <h1>H1 tag</h1>
        <h2>H2 tag</h2>
    </div>
    <div id="child2">
        <h1>H1 tag</h1>
        <h2>H2 tag</h2>
    </div>
</div> */}

const elm = React.createElement(
    'div',
    { id: "parent" },
    [
        React.createElement(
            'div', { id: 'child1' }, [React.createElement(
                'h1',
                {},
                "H1 tag"
            ),
            React.createElement(
                'h2',
                {},
                "H2 tag"
            )]
        ), React.createElement(
            'div',
            {id: 'child2'},
                [React.createElement(
                    'h1',
                    {},
                    "H1 tag"
                ),
                    React.createElement(
                        'h2',
                        {},
                        "H2 tag"
                    )]
        )
    ]



);
console.log(elm);
rootElement.render(elm);