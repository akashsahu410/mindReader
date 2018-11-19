import React, { Component } from 'react';
class App extends Component {
  state={
    table:[],
    show:true,
    iconshow:[]
    
  }
  toggle=()=>{
    if(this.state.show === true){
      this.setState({show:false})
    }
    else{
      this.setState({show:true})
    }
  }

  createTable = () => {
   let icons=['fas fa-ambulance','fas fa-air-freshener','fab fa-apple','fas fa-atom','	fas fa-award',
  'fas fa-bicycle','fab fa-bitcoin','	fab fa-bluetooth','fas fa-broadcast-tower','fas fa-cannabis',
'fas fa-cat','fas fa-chess-knight','	fas fa-city','fas fa-cloud-sun','fas fa-crow','fab fa-d-and-d'
,'far fa-dizzy'];
    let table = []
    let c=1,d,differentIcon;
    let fixIcon=icons[(Math.floor(Math.random()*icons.length))]
    // console.log(fixIcon)
    this.state.iconshow.push(fixIcon)
    // console.log("iconshow",this.state.iconshow)
    let css={
      fontSize:20,
    }
    // Outer loop to create parent
    for (let i = 0; i < 20; i++) {
      d=c;
      let children = []
      //Inner loop to create children
      for (let j = 0; j < 5; j++) {
        if(d%9==0){
          children.push(<td><span style={css}>{` ${d}`}</span>&nbsp;<i class={fixIcon} style={css}></i></td>)
        }
        else{
          differentIcon=icons[(Math.floor(Math.random()*icons.length))]
        children.push(<td><span style={css}>{` ${d}`}</span>&nbsp;<i class={differentIcon} style={css}></i></td>)
        }
        d=d+20;
      }
      c++;
      //Create the parent and add the children
      table.push(<tr>{children}</tr>)
    }
    return table
  }
  render() {
    
    return (
      <div style={{backgroundColor:"#8be4e2"}}>
      <div class="container"  >
      <center><h1 style={{color:"#c9302c",textShadow:"2px 3px white"}}>Magic Numbers</h1></center>
      {this.state.show === true ?
       (<div>
         <table class="table">
        {this.createTable()}
      </table>
      <p>
        <b>Follow these 4 simple steps.<br/>
        1) Think of any number between 10 to 99.<br/>
        2) Add its digits to make a single digit.<br/>
        3) Subtract the total from the original number.<br/>
        4) Your final number after subtraction, is coupled with your lucky symbol. Check Your Lucky Symbol.<br/>
        </b>
      </p>
      <center><button class="btn btn-danger btn-md" onClick={this.toggle}>Check</button></center>
      </div>) :
      (
        <div>
          <center>
            <br/><br/>
            <h3><label for>You think about this symbol</label></h3>
            <a href="/"><b><h3>Play Again</h3></b></a><br/>
            <i class={this.state.iconshow[0]} style={{paddingTop:40,fontSize:250,height:500}}></i>
            
          </center>
        </div>)

      }
      </div>
      </div>
    );
  }
}

export default App;
