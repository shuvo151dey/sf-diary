import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import DetailModal from './Modal'
import EditModal from './editModal'
import AddContact from './addContact'
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

const LoadingIndicator = props => {
	const { promiseInProgress } = usePromiseTracker();

  return promiseInProgress && <div className="loader t-container text-center">
  		<Loader type="ThreeDots" color="#2BAD60" height={100} width={100} />
    </div>
}  

class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ctm: {},
			tableData: [],
			columns_ctm: [{ 
					Header: 'Name',
					accessor: 'name',
					filterable: true
				},{
					Header: 'Phone Number',
					accessor: 'mobile',
					filterable: true
				}, {
					Header: 'Email',
					accessor: 'email'
				}, {
					filterable: false,
					Cell: props => 
						(<Button color="primary" onClick={() => this.setCTM(props.original)}>View</Button>)
				}
			]
		}
	}

	setCTM = (ctm_data) => {
		this.setState({ctm: ctm_data});
		this.props.changeTable("ctmAlumni", ctm_data.id);
	}

	static getDerivedStateFromProps(nextProps) {
		return {
			tableData: (nextProps.type === 'alumni' || nextProps.type === 'ctmAlumni') 
								 ? nextProps.alumni 
								 : (nextProps.type === "ctm") 
								 ? nextProps.ctm 
								 : nextProps.company,
			columns_alumni: [{ 
					Header: 'Name',
					accessor: 'name',
					filterable: true
				}, {
					Header: 'Phone Number',
					accessor: 'mobile',
					filterable: true
				}, {
					Header: 'Last Update',
					accessor: 'last_update'
				}, {
					Header: 'Last Update Date',
					accessor: 'updated_at'
				}, {
					filterable: false,
					width: 80,
					Cell: props => 
						(<DetailModal id={props.original.id} type={nextProps.type} />)
				}, {
					filterable: false,
					width: 60,
					show: (nextProps.type === "alumni"),
					Cell: props => 
						(<EditModal data={props.original} type={nextProps.type} />)
				}
			],
			columns_company: [{ 
					Header: 'Company Name',
					accessor: 'company_name',
					filterable: true
				},{ 
					Header: 'Contact Name',
					accessor: 'contact_name',
					filterable: true
				}, {
					Header: 'Phone Number',
					accessor: 'mobile',
					filterable: true
				}, {
					Header: 'Last Update',
					accessor: 'last_update'
				}, {
					Header: 'Last Update Date',
					accessor: 'updated_at'
				}, {
					filterable: false,
					width: 80,
					Cell: props => 
						(<DetailModal id={props.original.id} type={nextProps.type} />)
				}, {
					filterable: false,
					width: 60,
					show: (nextProps.type === "company"),
					Cell: props => 
						(<EditModal data={props.original} type={nextProps.type} />)
				}
			]
		}
	}

	render() {
		let otherType = (this.props.type === "ctmAlumni") ? "ctmCompany" : (this.props.type === "ctmCompany") ? "ctmAlumni" : "";
		return (
			(this.props.view === "ctm") ?
			<Fragment>
				<div className="w-100 mt-4 mb-4">
					<div className="float-right"><AddContact type={this.props.type}/></div>
					<h2 className="text-center">{this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1) + " Contacts"}</h2>
				</div>
				<div className="t-container overflow-hidden">
					<ReactTable 
						data = {this.state.tableData}
						LoadingComponent = {LoadingIndicator}
						columns = {(this.props.type === 'alumni') ? this.state.columns_alumni : this.state.columns_company}
						defaultPageSize = {100}
						sortable = {false}
					/>
				</div>
			</Fragment> :
			<Fragment>
				{
					(this.props.type === "ctmAlumni" || this.props.type === "ctmCompany") ? 
					<div className="w-100 mt-4 mb-4">
						<Button className="float-right mr-4" onClick={() => this.props.changeTable(otherType, this.state.ctm.id)}>View {otherType} updates</Button>
						<h2 className="text-center">{this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1) + " Updates ("+ this.state.ctm.name +")"}</h2>
					</div> :
					<div className="w-100 mt-4 mb-4">
						{(this.props.type === "ctm") ? "" : <div className="float-right"><AddContact type={this.props.type}/></div>}
						<h2 className="text-center">{this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1)}</h2>
					</div> 
				}
				<div className="t-container overflow-hidden">
					<ReactTable 
						data = {this.state.tableData}
						LoadingComponent = {LoadingIndicator}
						columns = {
							(this.props.type === 'alumni' || this.props.type === 'ctmAlumni') 
							? this.state.columns_alumni 
							: (this.props.type === 'company' || this.props.type === 'ctmCompany') 
							? this.state.columns_company
							: this.state.columns_ctm
						}
						defaultPageSize = {10}
						sortable = {false}
					/>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		alumni: state.alumni,
		company: state.company,
		ctm: state.ctm
	}
}

export default connect(mapStateToProps)(Table);