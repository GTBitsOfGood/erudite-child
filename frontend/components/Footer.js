import React from 'react';
import { Grid } from 'semantic-ui-react';

class Footer extends React.Component {
  render(){
    return(
      <div className="footer-home">
        <Grid columns={4} padded>
        <div className="footer-content">
            <Grid.Column>
              <a href="#">Contact</a>
            </Grid.Column>
        </div>
        </Grid>
      </div>
    )
  }
}

export default Footer;
