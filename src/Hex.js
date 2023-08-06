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

  let red = props.red.toString(16).toUpperCase(); // Getting the color value for red and turning it into hex
  let green = props.green.toString(16).toUpperCase(); // Getting the color value for green and turning it into hex
  let blue = props.blue.toString(16).toUpperCase(); // Getting the color value for blue and turning it into hex


  // adds a 0 to the front of the hex code; if the hex code is one character
  if(red.length === 1){//  |      
    red = "0" + red;//     |         
  }//                      |                          
  if(green.length === 1){//|
    green = "0" + green;// |
  }//                      |
  if(blue.length === 1){// |
    blue = "0" + blue;//   |
  }//                      | 
  //------------------------


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