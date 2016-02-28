import React from 'react';

//default means that if another module requires this, it will be default export the below
export default React.createClass({
    //*render is a required function for this object to have
    render: function () {

        return (
            <div>
                <h1> {this.props.title} </h1>
                <h1> {this.props.tagline} </h1>
            </div>
        );
    }   
});

