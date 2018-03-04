import React from 'react';
import Navbar from '../components/Navbar';
import SignupForm from '../components/SignupForm';
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
            What is The Erudite Child?
          </Header>
        </div>
        <div className="home-info-1">
          <Grid>
            <Grid.Column width={4}>
              <Image src='/assets/images/image.png' />
              <Image src="https://water.org/media/images/Waterorg_Homepage_Img-5.original.jpg" />
            </Grid.Column>
            <Grid.Column width={9}>
                  <div className="home-text-1">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
        
        
        <a className="twitter-grid" href="https://twitter.com/TwitterDev/timelines/539487832448843776?ref_src=twsrc%5Etfw">National Park Tweets</a> 
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        <script id="twitter-wjs" type="text/javascript" async defer src="//platform.twitter.com/widgets.js"></script>
        <a class="twitter-timeline" href="https://twitter.com/TwitterDev/timelines/539487832448843776?ref_src=twsrc%5Etfw">National Park Tweets - Curated tweets by TwitterDev</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        
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
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                   nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                   in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                   Excepteur sint occaecat cupidatat non proident,
                   sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <p>Help a child forever by signing up</p>
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
