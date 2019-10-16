import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import sflogo from '../../assets/sflogo.png'
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

class Header extends React.Component {
    state = {
        isOpen: false,
    }

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    className={"app-header header-shadow"}
                    transitionName="HeaderAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={1500}
                    transitionEnter={false}
                    transitionLeave={false}>
                        <div className="w-100">
                            <Navbar light expand="md">
                                <NavbarBrand className="mr-auto">
                                    <img className="float-left" src={sflogo} alt="SF-logo" width="40px"/>
                                    <h2 className="ml-2 float-left">SF diary</h2>
                                </NavbarBrand>
                                <NavbarToggler onClick={this.toggle} />
                                    <Collapse isOpen={this.state.isOpen} navbar>
                                        <Nav className="ml-auto" navbar>
                                            {
                                                (this.props.type === 'cth')
                                                ? <NavItem onClick={() => this.props.changeTable('ctm')}><NavLink>CTM</NavLink></NavItem>
                                                : ""
                                            } 
                                            <NavItem onClick={() => this.props.changeTable('alumni')}><NavLink>Alumni</NavLink></NavItem>
                                            <NavItem onClick={() => this.props.changeTable('company')}><NavLink>Company</NavLink></NavItem>
                                            <NavItem onClick={() => this.props.logout()}><NavLink>Log Out</NavLink></NavItem>
                                        </Nav>
                                    </Collapse>
                            </Navbar>
                        </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}

export default Header;