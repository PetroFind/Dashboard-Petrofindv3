import React from 'react';
import {Paragraph} from './styles';

const Text = (props) =>{
  return(
    <Paragraph fontWeight={props.fontWeight} fontSize={props.fontSize}>
      {props.text}
    </Paragraph>
  )
};

export default Text;