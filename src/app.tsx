import * as React from 'react'
import * as Server from 'react-dom/server'

let Greet = () => <h1>Hello, world!</h1>
console.log("Hello world");
console.log(Server.renderToString(<Greet />))