import React, { Component } from 'react';

class Button extends Component {
    render() { 
        let {addWhole, val} = this.props;
        return ( 
            <>
                <button onClick={addWhole}>{val}</button>
            </>
         );
    }
}
 
export default Button;