import React from 'react';
import {changeName,postPerson,getPerson,getSponsors, postSponsor} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button} from 'react-bootstrap'
import { Grid, Card, Icon, Image, Menu } from 'semantic-ui-react';
import PersonCard from './personCard';
import Slider from "react-slick";
import '../assets/stylesheets/base.scss';
import Navbar from './Navbar';

class AboutUs extends React.Component {
    getData() {
        this.props.getPerson();
        this.props.getSponsors();
    }
    constructor(props) {
        super(props);
        this.getData();
      }
    //componentDidMount(){
    //    this.props.getPerson();
     //   this.props.getSponsors()
    //  }
    handleNameChange() {
        this.props.changeName();
    }
    handlePostPerson() {
        console.log("pressed");
        const per = {
            title: "Helper Boy",
            description: "I carry stuff",
            images: "https://cdn.shopify.com/s/files/1/2315/6477/collections/backpack-col.progressive.jpg",
            isSponsor: false
        }
        this.props.postPerson(per)
    }

    handlePostSponsor() {
        console.log("pressed");
        const spon = {
            title: "Laughing Cat",
            description: "I laugh at your pain",
            images: "http://www.catster.com/wp-content/uploads/2016/11/600-Lil-BUB.png",
            isSponsor: true
        }
        this.props.postSponsor(spon)
    }

    handleGetPerson() {
        console.log((this.props.personPropArray)[0])
    }

    render() {
        const sponsorList = this.props.sponsorPropArray.map(function(sponsorArray){
            return(
                <div key={sponsorArray._id}>
                <PersonCard
                      _id= {sponsorArray._id}
                      title={sponsorArray.title}
                      description={sponsorArray.description}
                      images={sponsorArray.images}/>
            </div>

            )
          })

        const personList = this.props.personPropArray.map(function(personArr){
            return(
                <div key={personArr._id}>
                <PersonCard
                      _id= {personArr._id}
                      title={personArr.title}
                      description={personArr.description}
                      images={personArr.images}/>
            </div>
            )
          })
          var settings = {
            dots: true,
            slidesToShow: 3,
            initialSlide: 1,
            variableWidth: true
          };

          const carouselHelpersSponsors = (
              <div>
                  <h2>Sponsors</h2>
                  <div>
                      <Slider {...settings}>{sponsorList} </Slider>
                  </div>
                  <center>
                  <hr />
                  </center>
                  <h2>Staff</h2>
                  <div >
                      <Slider {...settings}>{personList}</Slider>
                  </div>
              </div>
            )

        return (
            <div id="main">
            <Navbar />
                <header >
					<h2>About Us</h2>
					<p>Some Line about Erudite Child</p>
				</header>
                <div className="inner">
                <h2>Founders</h2>
                <Grid >
                    <Grid.Column width={4}>
                        <Image src='https://www.oxfamamerica.org/static/media/images/Aziz_iKQ1qg1.jpg' />
                    </Grid.Column>
                    <Grid.Column width={10} style={{marginTop:'-8px'}}>
                        fkweklm kflkw emeflk mkl emwfkl melfkmwekl mfewkl fmlkwemf kflkwfmwl
                        fmwel mkfklwe klmfmweklfmw lkmfklew mlkwefm kewmf klmwlfe mklfewm
                        fmw eklmkflmfklwem lk fmwlmkflwm lkmflkwmfwm klm mfwlkmfkl emwfm kewmfwf mk
                        fwmk lmfwklemfwelkf mwklm klwfmklwe mlkfme klfmwkl mfklwem lfwekm fmwklm
                        fkweklm kflkw emeflk mkl emwfkl melfkmwekl mfewkl fmlkwemf kflkwfmwl
                        fmwel mkfklwe klmfmweklfmw lkmfklew mlkwefm kewmf klmwlfe mklfewm

                    </Grid.Column>
                </Grid>
                <Grid>
                    <Grid.Column width={4} >
                        <Image src='https://www.oxfamamerica.org/static/media/images/Aziz_iKQ1qg1.jpg' />
                    </Grid.Column>
                    <Grid.Column width={10} style={{marginTop:'-8px'}}>
                        fkweklm kflkw emeflk mkl emwfkl melfkmwekl mfewkl fmlkwemf kflkwfmwl
                        fmwel mkfklwe klmfmweklfmw lkmfklew mlkwefm kewmf klmwlfe mklfewm
                        fmw eklmkflmfklwem lk fmwlmkflwm lkmflkwmfwm klm mfwlkmfkl emwfm kewmfwf mk
                        fwmk lmfwklemfwelkf mwklm klwfmklwe mlkfme klfmwkl mfklwem lfwekm fmwklm
                        fkweklm kflkw emeflk mkl emwfkl melfkmwekl mfewkl fmlkwemf kflkwfmwl
                        fmwel mkfklwe klmfmweklfmw lkmfklew mlkwefm kewmf klmwlfe mklfewm
                        fmw eklmkflmfklwem lk fmwlmkflwm lkmflkwmfwm klm mfwlkmfkl emwfm kewmfwf mk
                        fwmk lmfwklemfwelkf mwklm klwfmklwe mlkfme klfmwkl mfklwem lfwekm fmwklm
                        fkweklm kflkw emeflk mkl emwfkl melfkmwekl mfewkl fmlkwemf kflkwfmwl

                    </Grid.Column>
                </Grid>
                <center>
                <hr />
                </center>
                {carouselHelpersSponsors}

                </div>

            </div>
        )

    }
}
/* Debuggin Button
                <div style={{marginTop:'25px'}}>
                <Button bsStyle="primary" onClick={this.handleNameChange.bind(this)}>Change</Button>
                <Button bsStyle="primary" onClick={this.handlePostSponsor.bind(this)}>Get Persons</Button>
                <Button bsStyle="primary" href="/aboutform">Edit People</Button>
                </div>

*/
function mapStateToProps(state) {
    return {
        personPropArray: state.people,
        sponsorPropArray: state.sponsors
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeName,postPerson,getPerson,getSponsors,postSponsor
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(AboutUs);