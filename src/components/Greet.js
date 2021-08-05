import React from "react"

// function Greet(){
//     return <h1>Hello Nazmul</h1>
// }

// const Greet = () => <h1>Hello Nazmul</h1>

const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Hello from {props.name}, Functional component</h1>
            {props.children}
        </div>
    )
}

export default Greet