import React, {Fragment} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class Footer extends React.Component {

    state = {
        modal: false
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <Fragment>
                <div className="app-footer newFooter">
                    <div className="app-footer__inner">
                        <div className="app-footer-right">
                            <span className="d-inline-block mb-2 mr-2">
                                <Button color="link" onClick={this.toggle}>Credits</Button>
                                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                    <ModalHeader toggle={this.toggle}>Credits</ModalHeader>
                                    <ModalBody>
                                        Kashish Goyal
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="link" onClick={this.toggle}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </span>
                        </div>
                    </div>
                </div>
            </Fragment>
        )}
}

export default Footer;