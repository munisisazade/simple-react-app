import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DropdownButton from './components/dropdown_button';



class MyApp extends Component {

    handledata() {
        return [
            {title:'Python'},
            {title:'C'},
            {title:'C++'},
            {title:'C#'},
            {title:'Java'},
            {title:'Ruby'},
            {title:'Php'},
            {title:'Go'},
            {title:'Perl'}
        ];
    }



    constructor(props) {
        super(props);
        this.state = {is_open:false,onclassname:"dropdown",item:"Select Language"};
        this.toggle.bind(this);
        this.close.bind(this);
        this.select.bind(this);
    }

    close() {
        this.setState({is_open:false})
    }

    toggle() {
        this.setState({is_open:!this.state.is_open});
    }
    select(text) {
        this.setState({item:text});
    }

    render() {
        return (
            <div className="App">
                <h1>React Simple </h1>
                <DropdownButton term={this.state.item} onClose={() => {this.close()}} onChangeTerm={(item) => {this.select(item)}} onClass={this.state.is_open} onOpen={() => {this.toggle()}} key={this.handledata()[0].title} data={this.handledata()} />
            </div>
        );
    }
};


ReactDOM.render(
    <MyApp/>,
    document.querySelector('.container')
);