import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';

class Questions extends Component {
    state = { newQuestion:[{name: "Question", val: ""}, {name: "a", val: ""}, {name: "b", val: ""}, {name: "c", val:""}, {name: "d", val: ""}, {name: "correctOption", val: ""}]}

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    addWhole = () => {
        let {Question, a, b, c, d, correctOption} = this.state
        // console.log(Question, a, b, c, d, correctOption)
        this.props.addNewQuestion({que: Question, options: {a: a, b: b, c: c, d: d}, correct: correctOption})
        // this.setState({Question: "", a: "", b: "", c: "", d: "", correctOption: ""})
    }
    render() { 
        let {handleChange, addWhole} = this;
        let {newQuestion} = this.state
        return ( 
            <>
                {/* <Input name={newQuestion[0].name} handleChange={handleChange} vals={newQuestion[0].val} placeHolder="Question"/> <br/> */}
                {newQuestion.map((opts, i)=> (
                    <Input key={i} name={opts.name} vals={opts.value} handleChange={handleChange} placeHolder={`${opts.name}`}/>
                ))}
                <Button addWhole={addWhole} val="Add Questions"/>
            </>
         );
    }
}
 
export default Questions;