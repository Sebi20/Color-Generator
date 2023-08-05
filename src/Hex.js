import React from "react";
import { styled } from "styled-components";

const H3 = styled.h3`
    margin-left: 10px;
    color: aliceblue;
`

const ColorSpan = styled.span`
    color: ${prop => prop.color};
`

function Hex(props){

  let red = props.red.toString(16).toUpperCase();
  let green = props.green.toString(16).toUpperCase();
  let blue = props.blue.toString(16).toUpperCase();

  console.log(typeof(props.red))

  if(red.length == 1){
    red = "0" + red;
  }

  if(green.length == 1){
    green = "0" + green;
  }

  if(blue.length == 1){
    blue = "0" + blue;
  }

  return(
    <>
        <H3> 
            #
            <ColorSpan color="red">{red}</ColorSpan>
            <ColorSpan color="limegreen">{green}</ColorSpan>
            <ColorSpan color="deepskyblue">{blue}</ColorSpan>
            
        </H3>
    </>
  )

}

export default Hex;