import React, { Component } from 'react'
import {Form} from 'react-bootstrap';

export class Formbeast extends Component {
  render() {
    return (
      <div id='form'>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>HORNED BEAST ❤️ </Form.Label>
            <Form.Control type="name" placeholder="Baby Rhino" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>View The Beasts By The Number Of Horns .</Form.Label>
            <Form.Control onChange={this.filter} as="select">
              <option vakue='1'>1</option>
              <option vakue='1'>2</option>
              <option vakue='1'>3</option>
              <option vakue='1'>100</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default Formbeast
