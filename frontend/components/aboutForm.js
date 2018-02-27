"use strict"
import React from 'react';
import {MenuItem, InputGroup, DropdownButton, Image, Col, Row, Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {postPerson,getPerson,removePerson} from '../actions/index';
import axios from 'axios';

class AboutForm extends React.Component{
  componentDidMount(){
    this.props.getPerson();
  }
  handleSubmit(){
    const person=[{
      title: findDOMNode(this.refs.title).value,
      description: findDOMNode(this.refs.description).value,
      images:findDOMNode(this.refs.image).value,
    }]
    this.props.postPerson(person);
  }
  onDelete(){
    let pId = findDOMNode(this.refs.delete).value;
    console.log(pId)
    this.props.removePerson(pId);
  }


  render(){
    console.log(this.props.pep)
    const personList = this.props.pep.map(function(per){
      return (
        <option key={per._id} value={per._id}> {per.title}</option>
      )
    })

    return(
      <Well>
        <Row>
          <Col>
          <h1>Add Person</h1>
            <Panel>
              <FormGroup controlId="title" >
                <ControlLabel>Title</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Enter Title"
                    ref="title" />
                    <FormControl.Feedback/>
              </FormGroup>
              <FormGroup controlId="description">
                <ControlLabel>Description</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Enter Description"
                    ref="description" />
                    <FormControl.Feedback/>
              </FormGroup>
              <FormGroup controlId="image" >
                <ControlLabel>Image</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Enter image url"
                    ref="image" />
                    <FormControl.Feedback/>
              </FormGroup>
              <Button bsStyle="success" onClick={this.handleSubmit.bind(this)}>
              Submit
              </Button>
            </Panel>

          </Col>
          <h1>Delete Someone</h1>
          <Panel>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Select a person to delete</ControlLabel>
                <FormControl ref="delete" componentClass="select" placeholder="select">
                  <option value="select">select</option>
                    {personList}
                </FormControl>
              </FormGroup>
              <Button onClick={this.onDelete.bind(this)} bsStyle="danger">Delete Person</Button>
            </Panel>
        </Row>

      </Well>
    )
  }
}
function mapStateToProps(state){
  return {
    pep: state.people
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    postPerson,
    getPerson,
    removePerson
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AboutForm);
