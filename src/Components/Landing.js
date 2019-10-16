import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import auth from '../Config/Auth'
import { addUser } from '../Actions'
import { login } from '../services'
import sflogo from '../assets/sflogo.png'
import '../Stylesheets/Landings.sass'

import { 
	Form, Input,
	Button,
	Row, Col,
	Card, CardBody, CardTitle
} from 'reactstrap';

class Landing extends Component {
	state = {
		data: {
			email: '',
			password: ''
		},
		showForm: false
	}

	handleChange = (e) => {
		this.setState({
			data: {
				...this.state.data,
				[e.target.name]: e.target.value
			}
		})
	}

	toggleForm = () => {
		this.setState({ showForm: !this.state.showForm })
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const userDetails = await login(this.state.data);
		if (userDetails.data.por === 'ctm' || userDetails.data.por === 'cth') {
			this.props.addUser(userDetails.data);
			localStorage.setItem('id', userDetails.data.id);
			auth.login(userDetails.data.por, () => {
				this.props.history.push('/' + userDetails.data.por)
			});
		}
		else {
			alert(userDetails.data);
		}
	}

	render() {
		return (
			<Fragment>
				<ReactCSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          className = {"h-80"}
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}>
					<Col xs="12">
						<Row className="mt-4">
							<Col className= "col-xs-12 col-md-7 font-size-lg text-center">
								<img src={sflogo} alt="SF-logo" width="300rem"/>
								<h1 className="pe-4x">SF Diary</h1>
							</Col>
							<Col className="col-xs-6 col-md-4">
								<Card className="main-card mb-3">
									<CardBody>
										<CardTitle className="text-center pe-2x">Login</CardTitle>
										<Form onSubmit={this.handleSubmit}>
											<Input type="email" name="email" placeholder="Email" value={this.state.data.email} onChange={this.handleChange}/><br />
											<Input type="password" name="password" placeholder="Password" value={this.state.data.password} onChange={this.handleChange} />
											<Button color="primary" className="mt-3">Login</Button>
										</Form>
									</CardBody>
								</Card>
							</Col>
						</Row>
					</Col>
				</ReactCSSTransitionGroup>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		
	}
}

const matchDispatchToProps = (dispatch) => {
	return bindActionCreators({
		addUser: addUser
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Landing);