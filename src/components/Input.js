import React, { Component } from 'react';

class Input extends Component {
    render() { 
        let {vals, handleChange, placeHolder, name} = this.props;
        return ( 
            <>
                <input type="text" value={vals} name={name} onChange={handleChange} placeholder={placeHolder} />
            </>
         );
    }
}
 
export default Input;