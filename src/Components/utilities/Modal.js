import React from 'react';
import {
    Button, Row, Col,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, Input, FormGroup,
    ListGroup, ListGroupItem, Label, Card, CardHeader, CardBody, Alert
} from 'reactstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getDetails, addUpdate, getData } from '../../services'
import gCalendar from '../../Config/gCalendarConfig.json'
import { addAlumni, addCompany } from '../../Actions'

require('dotenv').config()
var gapi = window.gapi
class DetailModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            value: '',
            details: {},
            table: [],
            gc_title: "",
            gc_body: "",
            gc_date: "",
            gc_time: "",
            event_message: ""
        };
    } 
    handleClick = () => {
        var callback = (link) => {
            //window.open(link);
            this.setState({event_message: (
                <Alert color="success">
                    The event is successfully created. Go to:<br/> 
                    <a href={link} target="_blank">{link}</a>.
                </Alert>
            )})
        }
        if (!this.state.gc_title) {
            alert("Event title is required")
            return
        }
        if (!this.state.gc_time) {
            alert("Event time is required")
            return
        }
        if (!this.state.gc_date) {
            alert("Event date is required")
            return
        }
        gapi.load('client:auth2', () => {
            console.log("gapi loaded")
            gapi.client.init({
                apiKey: process.env.REACT_APP_API_KEY,
                clientId: process.env.REACT_APP_CLIENT_ID,
                discoveryDocs: gCalendar.DISCOVERY_DOCS,
                scope: gCalendar.SCOPES
            })
            gapi.client.load('calendar', 'v3', ()=> {console.log('OK!')})
            gapi.auth2.getAuthInstance().signIn()
            .then(() => {
                var endtime = this.state.gc_time
                var h = Number(endtime.slice(0, 2))+1
                endtime = ('0' + h).slice(-2) + endtime.slice(2)
                var event = {
                    'summary': this.state.gc_title,
                    'description': this.state.gc_body,
                    'start': {
                        'dateTime': this.state.gc_date+'T'+this.state.gc_time+':00',
                        'timeZone': 'Asia/Kolkata'
                    },
                    'end': {
                        'dateTime': this.state.gc_date+'T'+endtime+':00',
                        'timeZone': 'Asia/Kolkata'
                    },
                    'reminders': {
                        'useDefault': false,
                        'overrides': [
                            {'method': 'popup', 'minutes': 120},
                            {'method': 'popup', 'minutes': 30}
                        ]
                    }
                };
                var request = gapi.client.calendar.events.insert({
                    'calendarId': 'primary',
                    'resource': event
                });
                    
                request.execute(function(event) {
                    callback(event.htmlLink)
                });
            }).catch((er) => {
                console.log(er.error)
            })
        })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
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
                                    const updates = keys.splice(13, 2*(this.state.details.n_updates-1)).concat(keys.splice(-3, 1), keys.splice(-1, 1));
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
                                    <Col md={8}>
                                        <FormGroup>
                                            <Input 
                                                type="text" 
                                                name="value" 
                                                placeholder="Add Update" 
                                                value={this.state.value} 
                                                onChange={this.handleChange} 
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <Button className="float-left">
                                            Add Update
                                        </Button>
                                    </Col>
                                    <Col md={12}>
                                        <Card>
                                            <CardHeader>
                                                <h6>Add Reminder through Google Calendar</h6>
                                            </CardHeader>
                                            <CardBody>
                                                <FormGroup>
                                                    <Input 
                                                        type="text" 
                                                        name="gc_title" 
                                                        placeholder="Event Summary*" 
                                                        value={this.state.gc_title} 
                                                        onChange={this.handleChange} 
                                                    />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Input 
                                                        type="textarea" 
                                                        name="gc_body" 
                                                        placeholder="Event Details" 
                                                        value={this.state.gc_body} 
                                                        onChange={this.handleChange} 
                                                    />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label>Event Date*</Label>
                                                    <Input 
                                                        type="date" 
                                                        name="gc_date" 
                                                        placeholder="Event date" 
                                                        value={this.state.gc_date}
                                                        onChange={this.handleChange} 
                                                    />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label>Event Time*</Label>
                                                    <Input 
                                                        type="time" 
                                                        name="gc_time" 
                                                        placeholder="Event Time" 
                                                        value={this.state.gc_time}
                                                        onChange={this.handleChange} 
                                                    />
                                                </FormGroup>
                                                <Button onClick={this.handleClick}>
                                                    Add Event to Google Calendar
                                                </Button>
                                                <div className="mt-3">{this.state.event_message}</div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    
                                    
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