import React from 'react';

const ScrollView = (props) => {
    return (
        <div className="row" style={{ overflowY: 'scroll', height: '400px', width: '100%' }}>
            {props.assistList}
        </div>
    )
}

export default ScrollView;