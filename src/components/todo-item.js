import React from 'react';
import classNames from 'classnames';

export default React.createClass({
    render: function () {
        console.log(this.props.key);
        var classes = classNames({
            'todo-item': true,
            'done': this.props.status
        })
        
        return ( 
        <div className={classes} onClick={this.props.onClick}>
            {this.props.task},
            {this.props.status? 'Done' : ''}
        </div>
        )
    }
})