export const C1 = `
<button>Some XYZ Titile</button>
`;
export const C2 = `
<button>{title}</button>
`;

export const C3 = `
<button onclick='handleClick()' for='btn'>Some XYZ Titile</button>
`;
export const C4 = `
<button onClick='handleClick' htmlFor='btn'>{title}</button>
`;
export const C5 = `
const MyList = () => (
    <section id="list">
      <h1>This is my list!</h1>
      <ul>
        {listItems.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    </section>
  );
`;
export const C6 = `
const MyList = () =>
  React.createElement(
    "section",
    { id: "list" },
    React.createElement("h1", {}, "This is my list!"),
    React.createElement(
      "ul",
      {},
      listItems.map((item) =>
        React.createElement("li", { key: item.id }, item.label)
      )
    )
  );
`;
export const C7 = `
let a = 1;
const b = 2;

console.log(a + b);
`;
export const C8 = `
{
    type: "Program",
    body: [
        {
        type: "VariableDeclaration",
        declarations: [
            {
            type: "VariableDeclarator",
            id: {
                type: "Identifier",
                name: "a"
            },
            init: {
                type: "Literal",
                value: 1,
                raw: "1"
            }
            }
        ],
        kind: "let"
        },
        {
        type: "VariableDeclaration",
        declarations: [
            {
            type: "VariableDeclarator",
            id: {
                type: "Identifier",
                name: "b"
            },
            init: {
                type: "Literal",
                value: 2,
                raw: "2"
            }
            }
        ],
        kind: "const"
        },
        {
        type: "ExpressionStatement",
        expression: {
            type: "CallExpression",
            callee: {
            type: "Identifier",
            name: "console"
            },
            arguments: [
            {
                type: "BinaryExpression",
                left: {
                type: "Identifier",
                name: "a"
                },
                right: {
                type: "Identifier",
                name: "b"
                },
                operator: "+"
            }
            ]
        }
        }
    ]
    }
`;
export const C9 = `
function pragma(tag, props, ...children)
`;

export const C10 = `
<MyComponent prop="value">Some contents</MyComponent>
`;

export const C11 = `
React.createElement(MyComponent, { prop: "value" }, "Some contents");
`;

export const C12 = `
const a = 1;
const b = 2;

const MyComponent = () => <Tab>Here's an expression: {a + b}</Tab>;
`;
export const C13 = `
const num = 2;

const MyComponent = () => <Tab>Is number even? {num % 2 == 0 ? "YES" : "NO"}</Tab>;
`;
export const C14 = `
const MyComponent = () => <Tab>Here's an expression: {
    const num = 2;

    if (num % 2 == 0) {
        'EVEN'
    } else {
	    'ODD'
}</Tab>;
`;
