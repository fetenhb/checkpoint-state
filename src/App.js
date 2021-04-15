
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Button } from 'react-bootstrap';

export default class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
     
        time: 0,
        show: false,
        x: 'Show',
      Person: {
        fullName: "Feten Hajboubaker",
        bio: "I am a student in GO MY CODE",
        imgSrc: "me.jpg",
        profession: "full-stack developer",
        
      }
    }

  }



  handleClick = () =>{ this.setState({show: !this.state.show , time:0});
  if (this.state.show===false) {
    this.setState({show: true});
    this.setState({x: 'Hide'});
  }
  else if (this.state.show===true) {
    this.setState({show: false}); 
    this.setState({x: 'Show'});
  }
}
  
  componentDidMount(){
    setInterval( ()=> {
      this.setState({
        time: this.state.time +1
      })
    } ,1000  )
  }
  render() {
    const {fullName, bio, imgSrc, profession} = this.state.Person;

  return (

    <div>
   
       <div className={this.state.show ? "visible" : "hide"}>
         <p style={{fontFamily:'Fredericka the Great', fontSize:'60px'}}> Hi ! my name is {fullName}</p>
     
         <p style={{fontFamily:'Gloria Hallelujah', fontSize:'30px'}}> my Bio: {bio}</p>

         <div>

           <ul style={{marginBottom:'50px'}} >
             <li><img  src={imgSrc} width="250" />
               <p style={{  fontFamily: 'Gloria Hallelujah'}}>It's me !</p>
              </li>
            </ul>
            <div class="light"></div>
 
          </div>

          <p style={{fontFamily:'Gloria Hallelujah', fontSize:'25px', fontWeight:'bold'}}>I'm <span>{profession}</span></p>
           <h2>{this.state.time}</h2>
     
       </div>

      <div className="visible">
         <Button variant="warning"  className="Btn" onClick={this.handleClick}
             style={{ marginTop:'20px', fontWeight:'bold', width:'170px',height:'50px'}}>
            {this.state.x} </Button>{' '}
      </div>
    </div>
    )
  }
}