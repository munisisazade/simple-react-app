import React, {Components} from 'react';
import ReactDOM from 'react-dom';



class MyApp extends Components {

    render() {
        return (
            <div>Simple React app started</div>
        )
    }
};


ReactDOM.render(
    <MyApp/>,
    document.querySelector('.container')
);