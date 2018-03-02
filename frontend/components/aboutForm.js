"use strict"
import React from 'react';
import {MenuItem, InputGroup, DropdownButton, Image, Col, Row, Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {postPerson,getPerson,removePerson,postSponsor,getSponsors,removeSponsor} from '../actions/index';
import axios from 'axios';

class AboutForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      titlePerson: '',
      descriptionPerson: '',
      imagePerson: '',
      titleSponsor: '',
      descriptionSponsor: '',
      imageSponsor: '',
      personToRemove:'select',
      sponsorToRemove:'select'
    }
  }
  componentDidMount(){
    console.log(this.props.pep);
    this.props.getPerson();
    console.log(this.props.pep);
    this.props.getSponsors();
  }
  handlePersonSubmit(){
   // console.log(this.state.title)
    const person=[{
      title: this.state.titlePerson,
      description: this.state.descriptionPerson,
      images: this.state.imagePerson,
      isSponsor:false
    }]
    this.props.postPerson(person);
  }

  handleSponsorSubmit(){
    // console.log(this.state.title)
     const sponsor=[{
       title: this.state.titleSponsor,
       description: this.state.descriptionSponsor,
       images: this.state.imageSponsor,
       isSponsor:true
     }]
     this.props.postSponsor(sponsor);
   }

  onDeletePerson(){
    let pId = this.state.personToRemove;//findDOMNode(this.refs.deletePerson).value;
   // console.log(pId)
    this.props.removePerson(pId);
  }

  onDeleteSponsor(){
    let sId = this.state.sponsorToRemove;//findDOMNode(this.refs.deleteSponsor).value;
    //console.log(sId)
    this.props.removeSponsor(sId);
  }


  render(){
    //console.log(this.props.pep)
    const personList = this.props.pep.map(function(per){
      return (
        <option key={per._id} value={per._id}> {per.title}</option>
      )
    })
    const sponsorList = this.props.spon.map(function(eachSponsor){
      return (
        <option key={eachSponsor._id} value={eachSponsor._id}> {eachSponsor.title}</option>
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
                    ref="title" 
                    value={this.state.titlePerson}
                    onChange={e => this.setState({titlePerson: e.target.value})}/>
                    <FormControl.Feedback/>
              </FormGroup>
              <FormGroup controlId="description">
                <ControlLabel>Description</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Enter Description"
                    ref="description" 
                    value={this.state.descriptionPerson}
                    onChange={e => this.setState({descriptionPerson: e.target.value})}/>
                    <FormControl.Feedback/>
              </FormGroup>
              <FormGroup controlId="image" >
                <ControlLabel>Image</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Enter image url"
                    ref="image" 
                    value={this.state.imagePerson}
                    onChange={e => this.setState({imagePerson: e.target.value})}/>
                    <FormControl.Feedback/>
              </FormGroup>
              <Button bsStyle="success" onClick={this.handlePersonSubmit.bind(this)}>
              Submit
              </Button>
            </Panel>
            <h1>Add Sponsor</h1>
            <Panel>
              <FormGroup controlId="title" >
                <ControlLabel>Title</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Enter Title"
                    ref="title" 
                    value={this.state.titleSponsor}
                    onChange={e => this.setState({titleSponsor: e.target.value})}/>
                    <FormControl.Feedback/>
              </FormGroup>
              <FormGroup controlId="description">
                <ControlLabel>Description</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Enter Description"
                    ref="description" 
                    value={this.state.descriptionSponsor}
                    onChange={e => this.setState({descriptionSponsor: e.target.value})}/>
                    <FormControl.Feedback/>
              </FormGroup>
              <FormGroup controlId="image" >
                <ControlLabel>Image</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Enter image url"
                    ref="image" 
                    value={this.state.imageSponsor}
                    onChange={e => this.setState({imageSponsor: e.target.value})}/>
                    <FormControl.Feedback/>
              </FormGroup>
              <Button bsStyle="success" onClick={this.handleSponsorSubmit.bind(this)}>
              Submit
              </Button>
            </Panel>
          </Col>
          <h1>Delete Person</h1>
          <Panel>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Select a person to delete</ControlLabel>
                <FormControl ref="deletePerson" componentClass="select" placeholder="select"  
                onChange={e => this.setState({personToRemove: e.target.value})}>
                  <option value={this.state.personToRemove}>select</option>
                    {personList}
                </FormControl>
              </FormGroup>
              <Button onClick={this.onDeletePerson.bind(this)} bsStyle="danger">Delete Person</Button>
            </Panel>
          <h1>Delete Sponsor</h1>
          <Panel>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Select a sponsor to delete</ControlLabel>
                <FormControl ref="deleteSponsor" componentClass="select" placeholder="select" 
                onChange={e => this.setState({sponsorToRemove: e.target.value})}>
                  <option value={this.state.sponsorToRemove}>select</option>
                    {sponsorList}
                </FormControl>
              </FormGroup>
              <Button onClick={this.onDeleteSponsor.bind(this)} bsStyle="danger">Delete Sponsor</Button>
            </Panel>
        </Row>

      </Well>
    )
  }
}
function mapStateToProps(state){
  return {
    pep: state.people,
    spon: state.sponsors
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    postPerson,
    getPerson,
    removePerson,
    postSponsor,
    getSponsors,
    removeSponsor
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AboutForm);
