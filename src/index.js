import React, {Components} from 'react';
import ReactDOM from 'react-dom';



const MyApp = () => {
    return (
        <div>Simple React app started</div>
    )
};


ReactDOM.render(
    <MyApp/>,
    document.querySelector('.container')
);