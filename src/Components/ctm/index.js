import React, { Component, Fragment } from 'react'
import auth from '../../Config/Auth'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addAlumni, addCompany } from '../../Actions'
import Table from '../utilities/Table'
import { getData } from '../../services'
import Header from '../utilities/header'

class CTM extends Component {
	state = {
		table: 'alumni',
		allData: false
	}

	async componentDidMount() {
		if (auth.isAuthenticated() !== 'ctm') {
			this.props.history.push('/');
		}
		else await this.getAllData();
	}

	getAllData = async () => {
		const temp = {
			id: localStorage.getItem('id'),
			type: 'alumni'
		};
		const alumniData = await getData(temp);
		this.props.addAlumni(alumniData.data);
		
		const temp2 = {
			id: localStorage.getItem('id'),
			type: 'company'
		};
		const companyData = await getData(temp2);
		this.props.addCompany(companyData.data);
	}

	handleLogout = () => {
		this.props.addAlumni([]);
		this.props.addCompany([]);
		auth.logout(() => {
			this.props.history.push('/');
		});
	}

	changeTable = async (tableName) => {
		await this.getAllData();
		this.setState({ table: tableName });
	}

	render() {
		return (
			<Fragment>
        	<Header changeTable={this.changeTable} type="ctm" logout={this.handleLogout}/>
					<Table view="ctm" type={this.state.table} id={localStorage.getItem('id')}/>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		userDetails: state.userDetails
	}
}

const matchDispatchToProps = (dispatch) => {
	return bindActionCreators({
		addAlumni: addAlumni,
		addCompany: addCompany
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CTM);