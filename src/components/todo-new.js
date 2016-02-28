import React from 'react';

export default React.createClass({
    getInitialState: function() {
      return {
          value: 'Add a new todo here'
      }  
    },
    
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    
    onKeyDown: function(event) {
        //13 code for ENTER
        console.log(event.keyCode);
        //console.log(this.props.onSubmit)
       if (event.key === 'Enter') {
            console.log('Hit ENTER :' + this.state.value);
            this.props.onSubmit(this.state.value);
            this.setState({value: ''});
        }
    },
    
    
    render: function () {
        return ( 
        <div>
            Add item
                <input 
                    value={this.state.value} 
                    onChange={this.handleChange} 
                    onKeyDown={this.onKeyDown}  
                    type="text" 
                />
            <div> This is the value: {this.state.value}</div>
        </div>
        )
    }
})