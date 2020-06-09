import React from "react";
import PropTypes from "prop-types";
import Weather from "./Weather";
import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'react-bootstrap';

const WeatherList = props => {
  return (
    <div>
      {/*
        README! Since in the reducer I insert a new city at the first position
        of the `data` array, I cannot use the index as the `key`. Also, since
        a user could potentially search the same city twice (or more), the `key`
        I am using here might not be unique (it's a warning, not an error).
      */}
      
      {
      <div className={"weather row"}>
      
      <div className={"col s12 m4"}>
      <h3></h3>
      </div>
      <div className={"col s12 m4"}>
      <h2 className="py-3">{props.data.locationName}</h2>
      </div>
      <div className={"col s12 m4"}>
      <h3></h3>
      </div>
    </div>

      }

{

<div className={"weather row"}>
      
<div className={"col s12 m4"}>
<span className={"text"}>Currect Temperature</span>
<h4>{props.data.temperatureC}  
        </h4>
</div>
<div className={"col s12 m4"}>
<span className={"text"}>Temperature Max</span>
<h4>{props.data.temperatureMax}</h4>
</div>
<div className={"col s12 m4"}>
<span className={"text"}>Temperature Min</span>
<h4>{props.data.temperatureMin}</h4>
</div>
</div>       
}

      {

<div className={"weather row"}>
      

<div className={"col s12 m6"}>
<span className={"text"}>Sunrise</span>
<h4>{props.data.sunrise}</h4>
</div>
<div className={"col s12 m6"}>
<span className={"text"}>Sunset</span>
<h4>{props.data.sunset}</h4>
</div>
</div>       
}

{
  <div className={"weather row"}>
    <div className={"col s12 m6"}>
    <span className={"text"}>Pressure</span>
<h4>{props.data.pressure}  
        </h4>
</div>
<div className={"col s12 m6"}>
<span className={"text"}>Humidity</span>
<h4>{props.data.humidity}</h4>
</div>
</div>
}
      

    </div>
  );
};



export default WeatherList;
