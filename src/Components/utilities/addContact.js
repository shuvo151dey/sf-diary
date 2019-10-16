import React from 'react';
import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, Input, FormGroup
} from 'reactstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { newAlumni, newCompany, getData } from '../../services'
import { addAlumni, addCompany } from '../../Actions'

class AddContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitState();
    }

    getInitState() {
        const initState = {
            modal: false,
            formData: {
                name: '',
                contact_name: '',
                mobile: '',
                email: '',
                post: '',
                linkedin: '',
                addr: '',
                remarks: '',
                update: ''
            }
        };
        return initState;
    }

    handleChange = (e) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        if (!this.state.formData.name && !this.state.formData.mobile && !this.state.formData.update ) {
            alert("Fill all fields");
        }
        else {
            if (this.props.type === "alumni") {
                const temp = {
                    member_id: localStorage.getItem('id'),
                    name: this.state.formData.name,
                    mobile: this.state.formData.mobile,
                    email: this.state.formData.email,
                    linkedin: this.state.formData.linkedin,
                    addr: this.state.formData.addr,
                    remarks: this.state.formData.remarks,
                    update: this.state.formData.update
                };
                const response = await newAlumni(temp);
                const Data = await getData({id: localStorage.getItem('id'), type: this.props.type});
                this.props.addAlumni(Data.data);
                alert(response.data);
            }
            else {
                const temp = {
                    member_id: localStorage.getItem('id'),
                    company_name: this.state.formData.name,
                    contact_name: this.state.formData.contact_name,
                    mobile: this.state.formData.mobile,
                    email: this.state.formData.email,
                    update: this.state.formData.update,
                    post: this.state.formData.post,
                    addr: this.state.formData.addr,
                    remarks: this.state.formData.remarks
                };
                const response = await newCompany(temp);
                const Data = await getData({id: localStorage.getItem('id'), type: this.props.type});
                this.props.addCompany(Data.data);
                alert(response.data);
            }
            this.toggle();
        }
        this.setState(this.getInitState());
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <span className="d-inline-block mb-2 mr-2">
                <Button color="primary" onClick={this.toggle}>Add Contact</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add {this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1)} Contact</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                        <FormGroup><Input type="text" placeholder={(this.props.type === "alumni") ?"Name" : "Comapny Name"} name="name" value={this.state.formData.name} onChange={this.handleChange} /></FormGroup>
                            {
                                (this.props.type === "company") ?
                                    <FormGroup><Input type="text" placeholder="Contact Person name" name="contact_name" value={this.state.formData.contact_name} onChange={this.handleChange} /></FormGroup>
                                     : ""
                            }
                            <FormGroup><Input type="number" placeholder="Phone number" name="mobile" value={this.state.formData.mobile} onChange={this.handleChange} /></FormGroup>
                            <FormGroup><Input type="email" placeholder="Email" name="email" value={this.state.formData.email} onChange={this.handleChange} /></FormGroup>
                            {
                                (this.props.type === "alumni") ?
                                    <FormGroup><Input type="text" placeholder="LinkedIn link" name="linkedin" value={this.state.formData.linkedin} onChange={this.handleChange} /></FormGroup>
                                    : <FormGroup><Input type="text" placeholder="Post of Contact" name="post" value={this.state.formData.post} onChange={this.handleChange} /></FormGroup>
                            }
                            <FormGroup><Input type="text" placeholder="Address" name="addr" value={this.state.formData.addr} onChange={this.handleChange} /></FormGroup>
                            <FormGroup><Input type="text" placeholder="First Update" name="update" value={this.state.formData.update} onChange={this.handleChange} /></FormGroup>
                            <FormGroup><Input type="text" placeholder="Remarks" name="remarks" value={this.state.formData.remarks} onChange={this.handleChange} /></FormGroup>
                            <Button>Add Contact</Button>
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
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addAlumni: addAlumni,
        addCompany: addCompany
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(AddContact);
