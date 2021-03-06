import React, { Component, Fragment } from 'react'
import auth from '../../Config/Auth'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addAlumni, addCompany, addCTM } from '../../Actions'
import Table from '../utilities/Table'
import { getData, getCTMS } from '../../services'
import Header from '../utilities/header'

class CTH extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			autoLogout: false,
			table: 'alumni'
		}
		this.events = [
      "load",
      "mousemove",
      "mousedown",
      "click",
      "scroll",
      "keypress"
    ];

    for (var i in this.events) {
      window.addEventListener(this.events[i], this.resetTimeout);
    }

		this.setTimeout();
	}

	clearTimeout() {
    if (this.logoutTimeout) clearTimeout(this.logoutTimeout);
  }

	setTimeout = () => {
    this.logoutTimeout = setTimeout(this.autoLogout, 600 * 1000);
  }

  autoLogout = () => {
  	this.setState({ autoLogout: true });
  	this.handleLogout();
  }

  resetTimeout = () => {
  	this.clearTimeout();
  	this.setTimeout();
  }

  destroy = () => {
    this.clearTimeout();

    for (var i in this.events) {
      window.removeEventListener(this.events[i], this.resetTimeout);
    }
  }

	async componentDidMount() {
		if (auth.isAuthenticated() !== 'cth') {
			this.props.history.push('/');
		}
		else await this.getAllData(localStorage.getItem('id'));
	}

	getAllData = async (id) => {
		const temp = {
			id: id,
			type: 'alumni'
		};
		const alumniData = await getData(temp);
		this.props.addAlumni(alumniData.data);
		
		const temp2 = {
			id: id,
			type: 'company'
		};
		const companyData = await getData(temp2);
		this.props.addCompany(companyData.data);

		const temp3 = {
			id: localStorage.getItem('id'),
			type: 'cth'
		};
		const ctmData = await getCTMS(temp3);
		this.props.addCTM(ctmData.data);
	}

	handleLogout = () => {
		if (this.state.autoLogout)
			alert("You have been logged out due to inactivity");
		this.props.addAlumni([]);
		this.props.addCompany([]);
		this.props.addCTM([]);
		this.destroy();
		auth.logout(() => {
			this.props.history.push('/');
		});
	}

	changeTable = async (tableName, id=localStorage.getItem('id')) => {
		await this.getAllData(id);
		this.setState({ table: tableName })
	}

	render() {
		return (
			<Fragment>
        	<Header changeTable={this.changeTable} type="cth" logout={this.handleLogout}/>
        	<Table view="cth" type={this.state.table} changeTable={this.changeTable}/>
					{/*(this.state.table === 'ctm') ? <CTMTable /> : <Table type={this.state.table} />*/}
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
		addCompany: addCompany,
		addCTM: addCTM
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CTH);