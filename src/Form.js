import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            name: '',
            title: '',
            time:'',
            pto:''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, title, time, pto } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={name} 
                    onChange={this.handleChange} />
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    name="title" 
                    id="title"
                    value={title} 
                    onChange={this.handleChange} />
                <label htmlFor="time">Capacity per day</label>
                <input 
                    type="text" 
                    name="time" 
                    id="time"
                    value={time} 
                    onChange={this.handleChange} />
                     <label htmlFor="pto">PTO/Holiday</label>
                <input 
                    type="text" 
                    name="pto" 
                    id="pto"
                    value={pto} 
                    onChange={this.handleChange} />

                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;