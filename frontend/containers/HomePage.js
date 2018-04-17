import React from 'react';
import Navbar from '../components/Navbar';
import SignupForm from '../components/signupForm';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Newsfeed from '../components/Newsfeed';
import {Grid, Container, Segment, Image, Header, Button, Divider} from 'semantic-ui-react';

class HomePage extends React.Component {
  render() {
    return (
      <Container fluid className="home-body">
        <div className="home-nav">
            <Navbar name="Login"/>
        </div>
        <Carousel/>

        <div className="header-1">
          <Header as='h1' floated='right'>
            The Erudite Child
          </Header>
        </div>
        <div className="home-info-1">
          <Grid>
            <Grid.Column width={4}>
              <Image src='/assets/images/child.png' size="small"/>
            </Grid.Column>
            <Grid.Column width={4}>
                  <div className="home-text-1">
                    <p>
                        Headquarted and active in India the Erudite Child
                        is an organization dedicated to providing better facilites and education
                        to a number of children in communities across the country.
                    </p>
                  </div>
            </Grid.Column>
          </Grid>
       </div>
       <div className="home-info-2">
         <Header as='h1' floated='left'>
           They need your help
         </Header>
         <Grid columns='equal'>
             <Grid.Column>
                <Segment>
                    <Image src="https://water.org/media/images/Waterorg_Homepage_Footer.original.jpg" />
                </Segment>
             </Grid.Column>
             <Grid.Column >
                 <Segment>
                     <Image src="https://water.org/media/images/Waterorg_Homepage_Footer.original.jpg" />
                 </Segment>
             </Grid.Column>
             <Grid.Column>
                 <Segment>
                     <Image src="https://water.org/media/images/Waterorg_Homepage_Footer.original.jpg" />
                 </Segment>
             </Grid.Column>
             <div className="home-text-2">
               <p>
                   One of the major barriers to education for most is financing.
                   Through our organization you can help hundreds of children gain
                   access to a better education. You can donate whenever you want and
                   also choose to engage every month with our Adopt A Child initiative which allows
                   you to donate monthly to a child in need that you can connect with.
               </p>
               <p>
                   By supporting The Erudite Child, you are part of a solution that reaches children in need.
                   So far, we have reached dozens - and our goal is to grow and impact millions and you can help us.
               </p>
             </div>
          </Grid>
       </div>
       <div className="home-info-3">
          <Grid columns={2}>
            <Grid.Column stretched>
                <Image src="https://water.org/media/images/Waterorg_Homepage_Img-4.original.jpg " />
            </Grid.Column>
            <Grid.Column>
                <Grid.Column>
                  <p>
                    Whether you are an individual or a company, we have opportunities for you to make an impact.
                    You can start by donation or enrolling our adopt a child program.
                  </p>
                  <p>Help a child by signing up</p>
                  <Segment><SignupForm name="Sign up and Donate"/></Segment>
                </Grid.Column>
            </Grid.Column>
          </Grid>
       </div>
       <Footer />
    </Container>
    )
  }
}

export default HomePage;
