import React from 'react';
import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, Input, FormGroup, Label
} from 'reactstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getDetails, getData, editDetails } from '../../services'
import { addAlumni, addCompany } from '../../Actions'

class DetailModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitState();
    }

    getInitState() {
        const initState = {
            modal: false,
            details: {
                company_name: '',
                name: '',
                contact_name: '',
                mobile: '',
                email: '',
                linkedin: '',
                addr: '',
                post: '',
                remarks: '',
            }
        };
        return initState;
    }
    handleChange = (e) => {
        this.setState({
            details: {
                ...this.state.details,
                [e.target.name]: e.target.value
            }})
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const temp = {
            id: this.props.data.id,
            member_id: this.state.details.member_id,
            type: this.props.type,
            mobile: this.state.details.mobile,
            email: this.state.details.email,
            linkedin: (this.state.details.linkedin) ? this.state.details.linkedin : '',
            addr: this.state.details.addr,
            post: (this.state.details.post) ? this.state.details.post : '',
            remarks: this.state.details.remarks
        };
        const response = await editDetails(temp);
        const Data = await getData({id: localStorage.getItem('id'), type: this.props.type});
        (this.props.type === 'alumni') ? this.props.addAlumni(Data.data) : this.props.addCompany(Data.data);
        alert(response.data);
        this.toggle();
        this.setState({value: ''})
    }

    toggle = async () => {
        if (!this.state.modal) {
            const temp = {
                id: this.props.data.id,
                type: (this.props.type === "alumni" || this.props.type === "ctmAlumni") ? "alumni" : "company"
            };
            const details = await getDetails(temp);
            this.setState({
                modal: true,
                details: details.data
            });
        }
        else this.setState(this.getInitState());
    }

    render() {
        return (
            <span className="d-inline-block mb-2 mr-2">
                <Button onClick={this.toggle}>Edit</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Edit</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                        <FormGroup><Label>Name</Label><Input type="text" disabled name="name" value={(this.props.type === "company") ? this.state.details.company_name : this.state.details.name} /></FormGroup>
                            {
                                (this.props.type === "company") ?
                                    <FormGroup><Label>Contact Name</Label><Input disabled type="text" placeholder="Contact Person name" name="contact_name" value={this.state.details.contact_name} /></FormGroup>
                                     : ""
                            }
                            <FormGroup><Label>Phone No</Label><Input type="number" placeholder="Phone number" name="mobile" value={this.state.details.mobile} onChange={this.handleChange} /></FormGroup>
                            <FormGroup><Label>Email</Label><Input type="email" placeholder="Email" name="email" value={this.state.details.email} onChange={this.handleChange} /></FormGroup>
                            {
                                (this.props.type === "alumni") ?
                                    <FormGroup><Label>LinkedIn</Label><Input type="text" placeholder="LinkedIn link" name="linkedin" value={this.state.details.linkedin} onChange={this.handleChange} /></FormGroup>
                                    : <FormGroup><Label>Post</Label><Input type="text" placeholder="Post of Contact" name="post" value={this.state.details.post} onChange={this.handleChange} /></FormGroup>
                            }
                            <FormGroup><Label>Address</Label><Input type="text" placeholder="Address" name="addr" value={this.state.details.addr} onChange={this.handleChange} /></FormGroup>
                            <FormGroup><Label>Remarks</Label><Input type="text" placeholder="Remarks" name="remarks" value={this.state.details.remarks} onChange={this.handleChange} /></FormGroup>
                            <Button>Save</Button>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="link" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </span>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        alumniTable: state.alumniDetailTable,
        companyTable: state.companyDetailTable
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addAlumni: addAlumni,
        addCompany: addCompany
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(DetailModal);
