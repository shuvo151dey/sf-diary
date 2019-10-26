import React from 'react';
import {
    Button, Row, Col,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, Input, FormGroup,
    ListGroup, ListGroupItem
} from 'reactstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getDetails, addUpdate, getData } from '../../services'
import { addAlumni, addCompany } from '../../Actions'

class DetailModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            value: '',
            details: {},
            table: []
        };
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        if (!this.state.value) {
            alert("Field is empty");
        }
        else {
            const temp = {
                id: this.props.id,
                member_id: this.state.details.member_id,
                update: this.state.value,
                type: this.props.type,
                n_updates: this.state.details.n_updates
            };
            const response = await addUpdate(temp);
            console.log(temp);
            const Data = await getData({id: localStorage.getItem('id'), type: this.props.type});
            (this.props.type === 'alumni') ? this.props.addAlumni(Data.data) : this.props.addCompany(Data.data);
            alert(response.data);
            this.toggle();
        }
        this.setState({value: ''})
    }

    toggle = async () => {
        if (!this.state.modal) {
            const temp = {
                id: this.props.id,
                type: (this.props.type === "alumni" || this.props.type === "ctmAlumni") ? "alumni" : "company"
            };
            const details = await getDetails(temp);
            this.setState({
                details: details.data
            });
        }
        this.setState({
            table: (this.props.type === "alumni" || this.props.type === "ctmAlumni") ? this.props.alumniTable : this.props.companyTable,
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <span className="d-inline-block mb-2 mr-2">
                {
                    (this.props.type === "ctmAlumni" || this.props.type === "ctmCompany") 
                    ? <Button color="primary" onClick={this.toggle}>Details</Button> : 
                    <Button color="primary" onClick={this.toggle}>Update</Button>
                }
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    {
                        (this.props.type === "ctmAlumni" || this.props.type === "ctmCompany") 
                        ? <ModalHeader toggle={this.toggle}>Details</ModalHeader> : 
                        <ModalHeader toggle={this.toggle}>Update</ModalHeader>
                    }
                    <ModalBody>
                        <table className="w-100">
                            <tbody>
                            {
                                this.state.table.map((row) => {
                                    const keys = Object.keys(this.state.details);
                                    const updates = keys.splice(9, 2*(this.state.details.n_updates-1)).concat(keys.splice(-3, 1), keys.splice(-1, 1));
                                    return (
                                        <tr key={row.index}>
                                            <td>{row.Header}</td>
                                            <td>{(row.accessor !== 'updates') 
                                                ? this.state.details[row.accessor]
                                                : <ListGroup>
                                                        {updates.map((update, index) => {
                                                            return (
                                                                <ListGroupItem 
                                                                    className={"border-0 p-0"} 
                                                                    key={update}>
                                                                        {((index%2) ? "- " : "") + this.state.details[update]}
                                                                </ListGroupItem>
                                                            );
                                                        })}
                                                  </ListGroup>
                                                }
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                            </tbody>
                        </table>
                        {
                            (this.props.type === "ctmAlumni" || this.props.type === "ctmCompany") 
                            ? "" : 
                            <Form onSubmit={this.handleSubmit}>
                                <Row form>
                                    <Col md={8}><FormGroup><Input type="text" placeholder="Add Update" value={this.state.value} onChange={this.handleChange} /></FormGroup></Col>
                                    <Col md={4}><Button className="float-left">Add Update</Button></Col>
                                </Row>
                            </Form>
                        }
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