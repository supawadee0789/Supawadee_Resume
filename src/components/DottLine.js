import React from 'react';


function Dott(){
    const mystyle = {
        backgroundColor:'#9BCEF5',
        borderRadius:'50px',
        height:'20px',
        width:'20px',
        margin:'10px',
        display:'inline-block',
      };
    return(
        <div style={{alignItems:'center', margin:'50px auto',padding: '80px 0'}}>
            <div style={mystyle}/>
            <div style={mystyle}/>
            <div style={mystyle}/>
        </div>
    );
}
export default Dott;