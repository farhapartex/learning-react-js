import React, {Component} from "react"

const Hello = ()=>{
    return (
        // <div>
        //     <h1>Hello Hasan</h1>
        // </div>
        // React.createElement("div", null, React.createElement("h1", null, "Hello Hasan JSX"))
        React.createElement("div", {id: 'mainDiv', className: 'dummyClass'}, React.createElement("h1", null, "Hello Hasan JSX"))
    )
}

export default Hello