import React, { Component } from 'react';

class Options extends Component {
    render() { 
        let {vals, handleChange, names} = this.props;
        return ( 
            <>
                <input type="radio" name={names} value={vals} onChange={handleChange}/>
            </>
         );
    }
}
 
export default Options;