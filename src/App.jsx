import React from 'react';
import './App.css';





export class App extends React.Component{

  render(){
    return(
      <div>
        <h1 style = {{textAlign: "center", fontFamily: "Open Sans Condensed", color: "#endregion"}}><u> Lucky Lotto Simulator </u></h1>
      </div>
    )
  }
}





export class RandomNumber extends React.Component{
  constructor(){
    super()

    this.state = {
      randNumOne : null,
      randNumTwo : null,
      randNumThree : null,
      randNumFour : null,
      randNumFive : null,
      randNumSix : null,
      randNumSeven : null,
     
      OneNumOne : null,
      OneNumTwo : null,
      OneNumThree : null,
      OneNumFour : null,
      OneNumFive : null,
      OneNumSix : null,
      OneNumSeven : null,
      nameOne: "",
      scoreOne: 0,

      TwoNumOne : null,
      TwoNumTwo : null,
      TwoNumThree : null,
      TwoNumFour : null,
      TwoNumFive : null,
      TwoNumSix : null,
      TwoNumSeven : null,
      nameTwo: "",
      scoreTwo: 0

    }

   
  }


    winner(){
        let countOne = 0
        let countTwo = 0


        if(Math.abs(this.state.OneNumOne - this.state.randNumOne) > Math.abs(this.state.TwoNumOne - this.state.randNumOne)){
            countTwo += 1
        } 
        if(Math.abs(this.state.OneNumOne - this.state.randNumOne) < Math.abs(this.state.TwoNumOne - this.state.randNumOne)){
            countOne += 1
        } 
        


        if(Math.abs(this.state.OneNumTwo - this.state.randNumTwo) > Math.abs(this.state.TwoNumTwo - this.state.randNumTwo)){
            countTwo += 1
        } 
        if(Math.abs(this.state.OneNumTwo - this.state.randNumTwo) < Math.abs(this.state.TwoNumTwo - this.state.randNumTwo)){
            countOne += 1
        } 


        if(Math.abs(this.state.OneNumThree - this.state.randNumThree) > Math.abs(this.state.TwoNumThree - this.state.randNumThree)){
            countTwo += 1
        } 
        if(Math.abs(this.state.OneNumThree - this.state.randNumThree) < Math.abs(this.state.TwoNumThree - this.state.randNumThree)){
            countOne += 1
        } 


        if(Math.abs(this.state.OneNumFour - this.state.randNumFour) > Math.abs(this.state.TwoNumFour - this.state.randNumFour)){
            countTwo += 1
        } 
        if(Math.abs(this.state.OneNumFour - this.state.randNumFour) < Math.abs(this.state.TwoNumFour - this.state.randNumFour)){
            countOne += 1
        } 


        if(Math.abs(this.state.OneNumFive - this.state.randNumFive) > Math.abs(this.state.TwoNumFive - this.state.randNumFive)){
            countTwo += 1
        } 
        if(Math.abs(this.state.OneNumFive - this.state.randNumFive) < Math.abs(this.state.TwoNumFive - this.state.randNumFive)){
            countOne += 1
        } 


        if(Math.abs(this.state.OneNumSix - this.state.randNumSix) > Math.abs(this.state.TwoNumSix - this.state.randNumSix)){
            countTwo += 1
        } 
        if(Math.abs(this.state.OneNumSix - this.state.randNumSix) < Math.abs(this.state.TwoNumSix - this.state.randNumSix)){
            countOne += 1
        } 


        if(Math.abs(this.state.OneNumSeven - this.state.randNumSeven) > Math.abs(this.state.TwoNumSeven - this.state.randNumSeven)){
            countTwo += 1
        } 
        if(Math.abs(this.state.OneNumSeven - this.state.randNumSeven) < Math.abs(this.state.TwoNumSeven - this.state.randNumSeven)){
            countOne += 1
        } 


        if(countOne > countTwo){
            this.setState({
                scoreOne: this.state.scoreOne + 1
            })
            alert(String(this.state.nameOne) + " Wins! " + String(countOne) + " rounds won!" + '\n' + String(this.state.nameOne) + " wins: " + String(this.state.scoreOne + 1) + '\n' + String(this.state.nameTwo) + " wins: " + String(this.state.scoreTwo))
        } 

        


        if(countTwo > countOne){
            this.setState({
                scoreTwo: this.state.scoreTwo + 1
            })
            alert(String(this.state.nameTwo) + " Wins! " + String(countTwo) + " rounds won!" + '\n' + String(this.state.nameOne) + " wins: " + String(this.state.scoreOne) + '\n' + String(this.state.nameTwo) + " wins: " + String(this.state.scoreTwo + 1))
        }

     
    }



  operation(){
    this.setState({
      randNumOne : Math.floor(Math.random() * 101),
      randNumTwo : Math.floor(Math.random() * 101),
      randNumThree : Math.floor(Math.random() * 101),
      randNumFour : Math.floor(Math.random() * 101),
      randNumFive : Math.floor(Math.random() * 101),
      randNumSix : Math.floor(Math.random() * 101),
      randNumSeven : Math.floor(Math.random() * 101),
    
      OneNumOne : Math.floor(Math.random() * 101),
      OneNumTwo : Math.floor(Math.random() * 101),
      OneNumThree : Math.floor(Math.random() * 101),
      OneNumFour : Math.floor(Math.random() * 101),
      OneNumFive : Math.floor(Math.random() * 101),
      OneNumSix : Math.floor(Math.random() * 101),
      OneNumSeven : Math.floor(Math.random() * 101),

      TwoNumOne : Math.floor(Math.random() * 101),
      TwoNumTwo : Math.floor(Math.random() * 101),
      TwoNumThree : Math.floor(Math.random() * 101),
      TwoNumFour : Math.floor(Math.random() * 101),
      TwoNumFive : Math.floor(Math.random() * 101),
      TwoNumSix : Math.floor(Math.random() * 101),
      TwoNumSeven : Math.floor(Math.random() * 101) 
    })

    

  }

  checkWinner(){
      this.winner()
  } 
  


  render(){
    return(
      <div>
        
        <div id="random-nums">
            <p id="number-style">{this.state.randNumOne}     </p>
            <p id="number-style">{this.state.randNumTwo}     </p>
            <p id="number-style">{this.state.randNumThree}     </p>
            <p id="number-style">{this.state.randNumFour}     </p>
            <p id="number-style">{this.state.randNumFive}     </p>
            <p id="number-style">{this.state.randNumSix}     </p>
            <p id="number-style">{this.state.randNumSeven}</p>
        </div>


        <div id="player-one">
            <p style={{color: "whitesmoke", textAlign: "center", fontSize: "24px" }}> {this.state.nameOne} </p>

            <input 
                placeholder = "Display Name"
                id = "player-one-input"
                type='text' 
                value = {this.state.nameOne}
                onChange= {e => this.setState({nameOne: e.target.value})}
            />
            <div id = "player-one-nums">
                <p id="number-style-two">{this.state.OneNumOne}     </p>
                <p id="number-style-two">{this.state.OneNumTwo}     </p>
                <p id="number-style-two">{this.state.OneNumThree}     </p>
                <p id="number-style-two">{this.state.OneNumFour}     </p>
                <p id="number-style-two">{this.state.OneNumFive}     </p>
                <p id="number-style-two">{this.state.OneNumSix}     </p>
                <p id="number-style-two">{this.state.OneNumSeven}</p>
            </div>
        </div>


        <div id="player-two">
            <p style={{color: "whitesmoke", textAlign: "center", fontSize: "24px" }}> {this.state.nameTwo} </p>

            <input 
                placeholder = "Display Name"
                id = "player-two-input"
                type='text' 
                value = {this.state.nameTwo}
                onChange= {e => this.setState({nameTwo: e.target.value})}
            />
            <div id="player-two-nums">
                <p id="number-style-two">{this.state.TwoNumOne}     </p>
                <p id="number-style-two">{this.state.TwoNumTwo}     </p>
                <p id="number-style-two">{this.state.TwoNumThree}     </p>
                <p id="number-style-two">{this.state.TwoNumFour}     </p>
                <p id="number-style-two">{this.state.TwoNumFive}     </p>
                <p id="number-style-two">{this.state.TwoNumSix}     </p>
                <p id="number-style-two">{this.state.TwoNumSeven}</p>
            </div>
        </div>


        <div id="button-pos">
          <button id="randomizer-style" onClick={()=>this.operation()}>Generate Numbers</button>
          <button id="winner-style" onClick={()=>this.checkWinner()} >Determine Winner </button>
        </div>


      </div>
     

    )
  }



}