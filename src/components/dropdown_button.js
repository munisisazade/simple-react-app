/**
 * Created by munis on 4/20/17.
 */
import React,{Component} from 'react';



const DropdownButton = ({data,onOpen,onClass,term,onChangeTerm,onClose}) => {

    const ItemList = data.map(function (item) {
        return(
            <li key={item.title}><a href="#" onClick={(event) => onChangeTerm(item.title)}>{item.title}</a></li>
        );
    });


    return(
            <div className={"dropdown" + (onClass ? " open" : "")} onClick={() => {onOpen()}}  onBlur={() => {onClose()}}>
              <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  {term}
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                 {ItemList}
              </ul>
            </div>
    );

};

export default DropdownButton