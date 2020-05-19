import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <div>
                    <h1 className="">กรอกชื่อ</h1>
                    <input className="mt-2" type="text" value={this.state.value} onChange={this.handleChange}></input>
                    <input type="submit" value="Submit"></input>
                </div>
            </form>
        )
    }
}

export default Product;