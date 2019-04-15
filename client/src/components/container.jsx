import React, {Component} from "react";
import ReactDOM from "react-dom";

class Container extends Component {
    constructor() {
        super();
        this.state = {
            id: null
        }
    }
    render() {
        return (
            <div>
                <a href="sms:7038535683?body=hello">Call</a>
            </div>
        );
    }
}
export default Container;