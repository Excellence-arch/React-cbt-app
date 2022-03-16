import React, { Component } from 'react';
import AddQuestion from './components/AddQuestion'
import Button from './components/Button';
import Options from './components/Options';

let allQuestions;
localStorage.allQuestions ? allQuestions = JSON.parse(localStorage.allQuestions) : allQuestions = [];

class App extends Component {
  state = { allQuestions, show: false , cur : 0, add: false, me : ['a', 'b', 'c', 'd'], answers: []};

  addNewQuestion = (all) => {
    let {allQuestions} = this.state;
    let alls = allQuestions;
    alls.push(all);
    this.setState({allQuestions: alls});
    localStorage.allQuestions = JSON.stringify(allQuestions);
    // console.log(this.state.allQuestions)
  }

  previous = () => {
    let {cur} = this.state;
    if (cur == 0) {
      cur = 0
    } else {
      cur--;
    }
    this.setState({cur});
    // console.log(cur)
  }

  handleChange = (e) => {
    let {answers, cur} = this.state;
    answers[cur] = e.target.value;
    // console.log(answers[cur], e.target.value)
    this.setState({[answers[cur]] : e.target.value});
    // console.log(answers)
  }

  next = () => {
    let {cur, allQuestions} = this.state;
    if (cur == allQuestions.length-1) {
      cur = allQuestions.length-1
    } else {
      cur++;
    }
    this.setState({cur});
    // allQuestions[cur].options.map((p)=> p.checked = false)
  }

  showQuestion = () => {
    this.setState({show: true})
    this.setState({add: false})
  }

  addQuestion = () => {
    this.setState({add: true})
    this.setState({show: false})
  }

  submits = () => {
    let {allQuestions, answers} = this.state;
    let score = 0;
    for(let i = 0; i< allQuestions.length; i++) {
      if(allQuestions[i].correct == answers[i]){
        score += 2;
      } 
    }
    alert(`Your score is ${score}`);
    // console.log(score)
  }
  render() { 
    let {addNewQuestion, previous, next, showQuestion, addQuestion, submits} = this;
    let {allQuestions, show, cur, add, me} = this.state;
    return ( 
      <>
        {show?
        <>
          {!allQuestions[cur].que? 
            <AddQuestion addNewQuestion={addNewQuestion}/>
          : 
            <>
            {/* <p>{allQuestions[cur].que}</p> */}
            <h3>Question {cur+1}</h3>
            <p>{allQuestions[cur].que}</p>
            {me.map((option, i)=> (
              <p key = {i}><Options vals={allQuestions[cur]['options'][option]} names={`option${cur}`} handleChange={this.handleChange}/> {allQuestions[cur]['options'][option]}</p>
            ))}{cur == 0? (<Button addWhole={next} val='Next'/>) : cur == allQuestions.length-1 ? (<>
            <Button addWhole={previous} val="Previous"/> 
            <Button addWhole={submits} val='Submit'/>
            </>) : (<>
              <Button addWhole={previous} val="Previous"/>
              <Button addWhole={next} val="Next"/>
            </>)}
            </>}
            </>
        : 
          <Button addWhole={showQuestion} val="Show Questions"/>
          
        }

        {add ? 
          <>
            <AddQuestion addNewQuestion={addNewQuestion}/>
          </>
        : 
          <Button addWhole={addQuestion} val="Add New Questions"/>
        }
        
      </>
     );
  }
}
 
export default App;
