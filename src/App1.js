import React, { Component } from "react";
import Comp2 from "./components/Comp2";
import Comp5 from "./components/Comp5";
import Comp6 from "./components/Comp6";
import Comp7 from "./components/Comp7";


import style from "./style/style1.module.css"


class App1 extends Component {
    render() {
        return (
            <div>
                <Comp2 />
                <br/>
                <hr/>
                <Comp5 />
                <br/>
                <hr/>
                <Comp6 />
                <br/>
                <hr/>
                <Comp7 />
            </div>
        );
    }
}


export default App1;