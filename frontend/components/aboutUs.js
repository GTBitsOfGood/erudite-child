import React from 'react';
import {changeName,postPerson,getPerson} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button} from 'react-bootstrap'
import { Grid, Card, Icon, Image, Menu } from 'semantic-ui-react';
import PersonCard from './personCard';

class AboutUs extends React.Component {
    componentDidMount(){
        this.props.getPerson()
      }
    handleNameChange() {
        this.props.changeName();
    }
    handlePostPerson() {
        console.log("pressed");
        const p = {
            title: "Sample Title",
            description: "Sample",
            images: "https://lifehacker.com/puppies-love-your-baby-talk-but-dogs-dont-1794355775"
        }
        this.props.postPerson(p)
    }
    handleGetPerson() {
        console.log((this.props.pep)[0])
    }
    
    render() {
        const bb = this.props.pep;
        console.log(bb);
        
        const personList = this.props.pep.map(function(perArr){
            return(
              <div key={perArr._id}>
                <PersonCard
                      _id= {perArr._id}
                      title={perArr.title}
                      description={perArr.description}
                      images={perArr.images}/>
              </div>
            )
          })
          
        return (
            <div>
                <h1 >About Us</h1>
                <h2>Founders</h2>
                <Grid >
                    <Grid.Column width={4}>
                        <Image src='https://www.oxfamamerica.org/static/media/images/Aziz_iKQ1qg1.jpg' />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        fkweklm kflkw emeflk mkl emwfkl melfkmwekl mfewkl fmlkwemf kflkwfmwl
                        fmwel mkfklwe klmfmweklfmw lkmfklew mlkwefm kewmf klmwlfe mklfewm 
                        fmw eklmkflmfklwem lk fmwlmkflwm lkmflkwmfwm klm mfwlkmfkl emwfm kewmfwf mk
                        fwmk lmfwklemfwelkf mwklm klwfmklwe mlkfme klfmwkl mfklwem lfwekm fmwklm
                        fkweklm kflkw emeflk mkl emwfkl melfkmwekl mfewkl fmlkwemf kflkwfmwl
                        fmwel mkfklwe klmfmweklfmw lkmfklew mlkwefm kewmf klmwlfe mklfewm 
                        fmw eklmkflmfklwem lk fmwlmkflwm lkmflkwmfwm klm mfwlkmfkl emwfm kewmfwf mk
                        fwmk lmfwklemfwelkf mwklm klwfmklwe mlkfme klfmwkl mfklwem lfwekm fmwklm
                        fkweklm kflkw emeflk mkl emwfkl melfkmwekl mfewkl fmlkwemf kflkwfmwl
                        fmwel mkfklwe klmfmweklfmw lkmfklew mlkwefm kewmf klmwlfe mklfewm 
                        fmw eklmkflmfklwem lk fmwlmkflwm lkmflkwmfwm klm mfwlkmfkl emwfm kewmfwf mk
                        fwmk lmfwklemfwelkf mwklm klwfmklwe mlkfme klfmwkl mfklwem lfwekm fmwklm
                    </Grid.Column>
                </Grid>
                <Grid>
                    <Grid.Column width={4}>
                        <Image src='https://www.oxfamamerica.org/static/media/images/Aziz_iKQ1qg1.jpg' />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        fkweklm kflkw emeflk mkl emwfkl melfkmwekl mfewkl fmlkwemf kflkwfmwl
                        fmwel mkfklwe klmfmweklfmw lkmfklew mlkwefm kewmf klmwlfe mklfewm 
                        fmw eklmkflmfklwem lk fmwlmkflwm lkmflkwmfwm klm mfwlkmfkl emwfm kewmfwf mk
                        fwmk lmfwklemfwelkf mwklm klwfmklwe mlkfme klfmwkl mfklwem lfwekm fmwklm
                        fkweklm kflkw emeflk mkl emwfkl melfkmwekl mfewkl fmlkwemf kflkwfmwl
                        fmwel mkfklwe klmfmweklfmw lkmfklew mlkwefm kewmf klmwlfe mklfewm 
                        fmw eklmkflmfklwem lk fmwlmkflwm lkmflkwmfwm klm mfwlkmfkl emwfm kewmfwf mk
                        fwmk lmfwklemfwelkf mwklm klwfmklwe mlkfme klfmwkl mfklwem lfwekm fmwklm
                        fkweklm kflkw emeflk mkl emwfkl melfkmwekl mfewkl fmlkwemf kflkwfmwl
                        fmwel mkfklwe klmfmweklfmw lkmfklew mlkwefm kewmf klmwlfe mklfewm 
                        fmw eklmkflmfklwem lk fmwlmkflwm lkmflkwmfwm klm mfwlkmfkl emwfm kewmfwf mk
                        fwmk lmfwklemfwelkf mwklm klwfmklwe mlkfme klfmwkl mfklwem lfwekm fmwklm
                    </Grid.Column>
                </Grid>
                <h2>Helpers</h2>
                <div style={{marginTop:'25px'}}>
                <Card.Group >
                {personList}
                </Card.Group>
                </div>
                <div style={{marginTop:'25px'}}>
                <Button bsStyle="primary" onClick={this.handleNameChange.bind(this)}>Change</Button>
                <Button bsStyle="primary" onClick={this.handleGetPerson.bind(this)}>Get Persons</Button>
                <Button bsStyle="primary" href="/aboutForm">Edit People</Button>

                </div>
            </div>
        )
            
    }
}
function mapStateToProps(state) {
    return {
        pep: state.people
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeName,postPerson,getPerson
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(AboutUs);