import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 100px;
  width: 100px;
  position: fixed;
  
`;

const Bar = styled.div`
  border: 2px solid #fff;
  background-color: #fff;
  animation: rotate 1s infinite alternate;
  transform-origin: 0% 100%;
  font-weight: 500;
  color: #000;
  text-align: center;

  @keyframes rotate {
    0% { transform: rotate(0deg);}
    100% { transform: rotate(-15deg); }
  }
`;

const Box = styled.div`
  text-align: center;
  border: 2px solid #fff;
  font-size: 20px;
  padding: 0.25px;
  color: #000;
`;

const Label = styled.div`
  background-color: #fff;
  padding: 15px 0 25px;
  font-weight:  bold;
  color: #000;
`;

const Dots = styled.span`
  animation: opacity 1s infinite alternate;

  @keyframes opacity {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

class Loader extends Component {
  componentDidMount() {}
  
  render() {
    return (
      <Container>
        <Bar>
          Loading...
          </Bar>
        <Box>
          <Label>
            <Dots>
              . . . .
            </Dots>
          </Label>
        </Box>
      </Container>
    );
  }
}

export default Loader;
