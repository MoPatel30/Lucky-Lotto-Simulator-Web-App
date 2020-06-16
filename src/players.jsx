import React from 'react';

import './players.css';
import {RandomNumber} from './App'



export class Players extends React.Component{
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
            randNumSeven : Math.floor(Math.random() * 101)
        })
        
    }

   

    

    render(){
        return(
                    
           
            <div>
                <p id="number-style">{this.state.randNumOne}</p>
                <p id="number-style">{this.state.randNumTwo}</p>
                <p id="number-style">{this.state.randNumThree}</p>
                <p id="number-style">{this.state.randNumFour}</p>
                <p id="number-style">{this.state.randNumFive}</p>
                <p id="number-style">{this.state.randNumSix}</p>
                <p id="number-style">{this.state.randNumSeven}</p>


                <button id="randomizer-style" onClick={()=>this.operation()}>Generate Numbers</button>
            </div>
        )
    }
}





export class PlayersToo extends React.Component{
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
            randNumSeven : Math.floor(Math.random() * 101)
        })

    }

    render(){
        return(

           
            <div>
                <p id="number-style">{this.state.randNumOne}</p>
                <p id="number-style">{this.state.randNumTwo}</p>
                <p id="number-style">{this.state.randNumThree}</p>
                <p id="number-style">{this.state.randNumFour}</p>
                <p id="number-style">{this.state.randNumFive}</p>
                <p id="number-style">{this.state.randNumSix}</p>
                <p id="number-style">{this.state.randNumSeven}</p>

            
                <button id="randomizer-style" onClick={()=>this.operation()}>Generate Numbers</button>
            </div>
        )
    }
}



export class PlayerOne extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            guessOne: 0,
            guessTwo: 0,
            guessThree: 0,
            guessFour: 0,
            guessFive: 0,
            guessSix: 0,
            guessSeven: 0,

            
        }
        
   
    
    }

  

    
    handleSubmitOne(e){
        e.preventDefault()
        this.setState({
          guessOne: e.target.value
        })   
     
    }
      
    handleSubmitTwo(e){
        e.preventDefault()
        this.setState({
          guessTwo: e.target.value
        })
     
    }

    handleSubmitThree(e){
        e.preventDefault()
        this.setState({
          guessThree: e.target.value
        })
       
    }

    handleSubmitFour(e){
        e.preventDefault()
        this.setState({
          guessFour: e.target.value
        })     
  

    }

    handleSubmitFive(e){
        e.preventDefault()
        this.setState({
          guessFive: e.target.value
        })

    }

    handleSubmitSix(e){
        e.preventDefault()
        this.setState({
          guessSix: e.target.value
        })
    
    }

    handleSubmitSeven(e){
        e.preventDefault()
        this.setState({
          guessSeven: e.target.value
        })
      
    }

    
    
      
   
    render(){
        return(
            
            <div id="player-one">
                 

                <h1 style = {{color: 'whitesmoke', fontSize: "32px", textAlign: "center", fontFamily: "Open Sans Condensed"}}><u> Player One </u></h1>
                

                <div id="guesses-form">
                    <form onSubmit= {e => this.handleSubmitOne}>
                        <p style = {{color: 'whitesmoke'}}>Geuess #1</p>
                        
                        <input 
                            type='number' 
                            value = {this.state.guessOne}
                            onChange= {e => this.setState({guessOne: e.target.value})}
                        />

                       
                        <button type="button" id="enter-style" style = {{position: "relative", left:"25px"}} onCLick =  {e => this.handleSubmitOne}> Enter </button>
                    </form>



                    <form onSubmit={e => this.handleSubmitTwo}>
                        <p style = {{color: 'whitesmoke'}}>Geuess #2</p>
                        
                        <input 
                            type='number' 
                            value = {this.state.guessTwo}
                            onChange= {e => this.setState({guessTwo: e.target.value})}
                        />

                        <button type="button" id="enter-style" style = {{position: "relative", left:"25px"}} onCLick =  {e => this.handleSubmitTwo}> Enter </button>
                    </form>
                    


                    <form onSubmit={e => this.handleSubmitThree}>
                        <p style = {{color: 'whitesmoke'}}>Geuess #3</p>
                        
                        <input 
                            type='number' 
                            value = {this.state.guessThree}
                            onChange= {e => this.setState({guessThree: e.target.value})}
                        />

                        <button type="button" id="enter-style" style = {{position: "relative", left:"25px"}} onCLick =  {e => this.handleSubmitThree}> Enter </button>
                    </form>



                    <form onSubmit={e => this.handleSubmitFour}>
                        <p style = {{color: 'whitesmoke'}}>Geuess #4</p>
                        
                        <input 
                            type='number' 
                            value = {this.state.guessFour}
                            onChange= {e => this.setState({guessFour: e.target.value})}
                        />

                        <button type="button" id="enter-style" style = {{position: "relative", left:"25px"}} onCLick =  {e => this.handleSubmitFour}> Enter </button>
                    </form>



                    <form onSubmit={e => this.handleSubmitFive}>
                        <p style = {{color: 'whitesmoke'}}>Geuess #5</p>
                        
                        <input 
                            type='number' 
                            value = {this.state.guessFive}
                            onChange= {e => this.setState({guessFive: e.target.value})}
                        />

                        <button type="button" id="enter-style" style = {{position: "relative", left:"25px"}} onCLick =  {e => this.handleSubmitFive}> Enter </button>
                    </form>



                    <form onSubmit={e => this.handleSubmitSix}>
                        <p style = {{color: 'whitesmoke'}}>Geuess #6</p>
                        
                        <input 
                            type='number' 
                            value = {this.state.guessSix}
                            onChange= {e => this.setState({guessSix: e.target.value})}
                        />

                        <button type="button" id="enter-style" style = {{position: "relative", left:"25px"}} onCLick =  {e => this.handleSubmitSix}> Enter </button>
                    </form>



                    <form onSubmit={e => this.handleSubmitSeven}>
                        <p style = {{color: 'whitesmoke'}}>Geuess #7</p>
                        
                        <input 
                            type='number' 
                            value = {this.state.guessSeven}
                            onChange= {e => this.setState({guessSeven: e.target.value})}
                        />

                        <button type="button" id="enter-style" style = {{position: "relative", left:"25px"}} onCLick =  {e => this.handleSubmitSeven}> Enter </button>
                    </form>
                </div>



                <p id = "guesses-displayer" style = {{color: 'whitesmoke'}}>{this.state.guessOne}, {this.state.guessTwo}, {this.state.guessThree}, {this.state.guessFour}, {this.state.guessFive}, {this.state.guessSix}, {this.state.guessSeven} </p>
                <RandomNumber randNumOne = {Math.floor(Math.random() * 101)} randNumTwo = {Math.floor(Math.random() * 101)} randNumThree = {Math.floor(Math.random() * 101)} randNumFour = {Math.floor(Math.random() * 101)} randNumFive = {Math.floor(Math.random() * 101)} randNumSix = {Math.floor(Math.random() * 101)} randNumSeven = {Math.floor(Math.random() * 101)} />
                
                <div>
                    <p style={{color: "black", fontSize: "50px"}}>{this.props.randNumOne}</p>
                    <p style={{color: "green", fontSize: "50px"}}>{this.props.randNumTwo}</p>
                    <p style={{color: "black", fontSize: "50px"}}>{this.props.randNumThree}</p>
                    <p style={{color: "green", fontSize: "50px"}}>{this.props.randNumFour}</p>
                    <p style={{color: "black", fontSize: "50px"}}>{this.props.randNumFive}</p>
                    <p style={{color: "green", fontSize: "50px"}}>{this.props.randNumSix}</p>
                    <p style={{color: "black", fontSize: "50px"}}>{this.props.randNumSeven}</p>
                </div>

            </div>

        )
    }
    

    
}





export class Winner extends React.Component{
    state = {
        one: 0,
        two:0,
        three:0,
        four:0,
        five:0,
        six:0,
        seven:0
    }

    render(){
        return(
            <p>hello</p>
        )
    }
}

//          



export class PlayerTwo extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            guessOne: 0,
            guessTwo: 0,
            guessThree: 0,
            guessFour: 0,
            guessFive: 0,
            guessSix: 0,
            guessSeven: 0
            
        }
        
    } 
   
    

    
    handleSubmitOne(e){
        e.preventDefault()
        this.setState({
          guessOne: e.target.value
        })   
  
    }

    handleSubmitTwo(e){
        e.preventDefault()
        this.setState({
          guessTwo: e.target.value
        })
      
    }

    handleSubmitThree(e){
        e.preventDefault()
        this.setState({
          guessThree: e.target.value
        })

    }

    handleSubmitFour(e){
        e.preventDefault()
        this.setState({
          guessFour: e.target.value
        })
  
    }

    handleSubmitFive(e){
        e.preventDefault()
        this.setState({
          guessFive: e.target.value
        })
  
    }

    handleSubmitSix(e){
        e.preventDefault()
        this.setState({
          guessSix: e.target.value
        })

    }

    handleSubmitSeven(e){
        e.preventDefault()
        this.setState({
          guessSeven: e.target.value
        })
  
    }
    
      
    render(){
        return(
            
            <div id="player-one">
                 

                <h1 style = {{color: 'whitesmoke', fontSize: "32px", textAlign: "center", fontFamily: "Open Sans Condensed"}}><u> Player One </u></h1>
                

                <div id="guesses-form">
                    <form onSubmit= {e => this.handleSubmitOne}>
                        <p style = {{color: 'whitesmoke'}}>Geuess #1</p>
                        
                        <input 
                            type='number' 
                            value = {this.state.guessOne}
                            onChange= {e => this.setState({guessOne: e.target.value})}
                        />

                       
                        <button type="button" id="enter-style" style = {{position: "relative", left:"25px"}} onCLick =  {e => this.handleSubmitOne}> Enter </button>
                    </form>



                    <form onSubmit={e => this.handleSubmitTwo}>
                        <p style = {{color: 'whitesmoke'}}>Geuess #2</p>
                        
                        <input 
                            type='number' 
                            value = {this.state.guessTwo}
                            onChange= {e => this.setState({guessTwo: e.target.value})}
                        />

                        <button type="button" id="enter-style" style = {{position: "relative", left:"25px"}} onCLick =  {e => this.handleSubmitTwo}> Enter </button>
                    </form>
                    


                    <form onSubmit={e => this.handleSubmitThree}>
                        <p style = {{color: 'whitesmoke'}}>Geuess #3</p>
                        
                        <input 
                            type='number' 
                            value = {this.state.guessThree}
                            onChange= {e => this.setState({guessThree: e.target.value})}
                        />

                        <button type="button" id="enter-style" style = {{position: "relative", left:"25px"}} onCLick =  {e => this.handleSubmitThree}> Enter </button>
                    </form>



                    <form onSubmit={e => this.handleSubmitFour}>
                        <p style = {{color: 'whitesmoke'}}>Geuess #4</p>
                        
                        <input 
                            type='number' 
                            value = {this.state.guessFour}
                            onChange= {e => this.setState({guessFour: e.target.value})}
                        />

                        <button type="button" id="enter-style" style = {{position: "relative", left:"25px"}} onCLick =  {e => this.handleSubmitFour}> Enter </button>
                    </form>



                    <form onSubmit={e => this.handleSubmitFive}>
                        <p style = {{color: 'whitesmoke'}}>Geuess #5</p>
                        
                        <input 
                            type='number' 
                            value = {this.state.guessFive}
                            onChange= {e => this.setState({guessFive: e.target.value})}
                        />

                        <button type="button" id="enter-style" style = {{position: "relative", left:"25px"}} onCLick =  {e => this.handleSubmitFive}> Enter </button>
                    </form>



                    <form onSubmit={e => this.handleSubmitSix}>
                        <p style = {{color: 'whitesmoke'}}>Geuess #6</p>
                        
                        <input 
                            type='number' 
                            value = {this.state.guessSix}
                            onChange= {e => this.setState({guessSix: e.target.value})}
                        />

                        <button type="button" id="enter-style" style = {{position: "relative", left:"25px"}} onCLick =  {e => this.handleSubmitSix}> Enter </button>
                    </form>



                    <form onSubmit={e => this.handleSubmitSeven}>
                        <p style = {{color: 'whitesmoke'}}>Geuess #7</p>
                        
                        <input 
                            type='number' 
                            value = {this.state.guessSeven}
                            onChange= {e => this.setState({guessSeven: e.target.value})}
                        />

                        <button type="button" id="enter-style" style = {{position: "relative", left:"25px"}} onCLick =  {e => this.handleSubmitSeven}> Enter </button>
                    </form>
                </div>


                <p style = {{color: "black", fontSize: "50px"}}>{this.state.hello}</p>
                <p id = "guesses-displayer" style = {{color: 'whitesmoke'}}>{this.state.guessOne}, {this.state.guessTwo}, {this.state.guessThree}, {this.state.guessFour}, {this.state.guessFive}, {this.state.guessSix}, {this.state.guessSeven} </p>
               
           
            </div>

        )
    }

    
}


/*


type playerone = {
    guessOne: number,
    guessTwo: number,
    guessThree: number,
    guessFour: number,
    guessFive: number,
    guessSix: number,
    guessSeven: number,
}


type MyProps = {
    guessOne: number,
    guessTwo: number,
    guessThree: number,
    guessFour: number,
    guessFive: number,
    guessSix: number,
    guessSeven: number,

}



export class PlayerOne extends React.Component<playerone, MyProps, any>{
    public state = {
        guessOne: 0,
        guessTwo: 0,
        guessThree: 0,
        guessFour: 0,
        guessFive: 0,
        guessSix: 0,
        guessSeven: 0
    }

    constructor(props: playerone){
        super(props)
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    
    handleChange(event: { target: { value: any; }; }) {
        this.setState({guessOne: event.target.value});
      }

    
    handleSubmit(event: { preventDefault: () => void; }) {
        alert('A name was submitted: ' + this.state.guessOne); 
        event.preventDefault();
      }


    render(){
        return(
            <div id="player-one">
                <h1 style = {{color: 'whitesmoke', fontSize: "32px", textAlign: "center", fontFamily: "Open Sans Condensed"}}><u> Player One </u></h1>
                
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Name:
                    <input type="number" value={this.state.guessOne} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

           
            </div>

        )
    }
}

*/