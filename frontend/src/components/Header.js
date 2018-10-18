import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
class Header extends React.Component {	
	onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }
 render(){
	return (
<div style={{ width:'1190px'}}>
 <Navbar />
		<header id="header" className="m-animated">
		
		<div className="header-bg">
			<div className="header-inner">

				<div className="header-branding">
					<Link to="/"><img src="images/logo.png" alt="BeautySpot" data-hires="images/logo.2x.png" width="291"/></Link>
				</div>
				<div className="header-navigation">
					<nav className="header-menu">
						<button className="header-menu-toggle" type="button"><i className="fa fa-bars"></i>MENU</button>
						<ul>
							<li className="m-active">
								<span><Link to="/employees">Manage Employees</Link></span>
							</li>
							<li>
								<span><Link to="/services">Manage Services </Link></span>								
							</li>
							<li>
								<span><Link to="/reservation">Manage Reservation</Link></span>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</header>
	</div>
  );
};
};
Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps, { logoutUser })(withRouter(Header));