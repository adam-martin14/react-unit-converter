// FUNCTIONAL COMPONENT - NO STATE MANAGEMENT (STATELESS COMPONENT)
import React from 'react';
import '../DropDownMenuSelect/DropDownMenuSelect.css';

const dropDownMenuSelect = (props) => {

    return (

        <select onChange={props.changed} defaultValue={props.defaultValue} id={props.id}>

            {/* 'props.children' enables this component to wrap the 'DropDownMenuOptions' component  */}
            {props.children}

        </select>
        
    );

}


export default dropDownMenuSelect;