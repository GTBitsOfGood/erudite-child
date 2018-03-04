import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Header, Container, Grid, Form, Button, Checkbox, Image } from 'semantic-ui-react';

const DonateContainer = () => {
    return (
        <div>
            <Image fluid src='http://photography-cameras.org/images/stories/wide-angle-lens.jpg' />
            <Header textAlign='center' as='h1'>Donate</Header>
            <Grid padded divided columns={2}>
                <Grid.Column>
                    <Container fluid textAlign='justified' text>
                        <Header as='h3'>Help Us Fix School Infrastructure.</Header>
                        <p>Donate money. That is a good thing to do. Think of the poor children. GIVE US YOUR MONEY. asdfasdfasdfasdkjhglrulirafvfv</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
                    </Container>
                </Grid.Column>
                <Grid.Column>
                    <Form>
                        <Form.Field>
                            <label>First Name</label>
                            <input placeholder='First Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input placeholder='Last Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Choose Amount</label>
                            <input placeholder='$1,000,000,000' />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox label='I agree to give you all of my money.' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default DonateContainer;