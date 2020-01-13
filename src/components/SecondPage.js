import React from 'react';
import { connect } from "react-redux";

class SecondPage extends React.Component {
   
    render() {
        return (
            <div>
                <label>SECOND PAGE</label>
                <label>{this.props.title}</label>
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

            </div>
            
        );
    }
}


const mapStateToProps = state => ({
    count:state.count,
    data:state.data,
    title:state.title    
}
);

export default connect(mapStateToProps) (SecondPage);
