import {INCREMENT,DECREMENT} from './Constant'
import { connect } from "react-redux";
import {getDecAction,getIncAction,rediectStatus} from './Action'
import React, { Component } from "react";
import {getApiCall} from './ApiCall'
import { Redirect } from "react-router";

class HomePage extends Component   {   

    constructor(props) {
        super(props);
        this.state = {
            toDashboard:false
        } 

    }
     mIncrement=()=>{
        this.props.dispatch(getIncAction())      
    } 
     mDecrement=()=>{
        this.props.dispatch(getDecAction());
    }
    mRedirect=()=>{
      //  <Redirect to="/nextpage" ></Redirect>
      this.props.dispatch(rediectStatus())

    }
    componentDidMount(){  
      
        this.props.dispatch(getApiCall());

    }

    
    render() {
   
        if (this.props.redirectStatus === true) {
            return <Redirect to="/secondpage" />;
          }
      
    return ( <div>
        <button onClick={this.mIncrement}>{INCREMENT}</button>   
        <label>{this.props.count} </label> 
        <button onClick={this.mDecrement}>{DECREMENT}</button> 
        <button onClick={this.mRedirect}>GOTO SECOND PAGE</button>           
           <div> 
                <label>{this.props.title}</label>
                {
                    this.props.data.map((item,i)=>
                     <div key={i}>
                          {item.title} - {item.releaseYear}
                    </div>
                    )
                }
            </div>
         </div> );
       
   }          
}

 const mapStateToProps = state => ({
    count:state.count,
    data:state.data,
    title:state.title ,
    redirectStatus:state.redirectStatus,  
}
);

export default connect(mapStateToProps) (HomePage);