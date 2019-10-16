class Auth {
	constructor() {
		this.ctm_authenticated = false;
		this.cth_authenticated = false;
	}

	login(type, callback) {
		// (type === 'ctm') ? this.ctm_authenticated = true : this.cth_authenticated = true;
		localStorage.setItem('login_state', type);
		callback();
	}

	logout(callback) {
		// this.ctm_authenticated = false;
		// this.cth_authenticated = false;
		localStorage.setItem('login_state', false);
		localStorage.removeItem('id');
		callback();
	}

	isAuthenticated() {
		// return this.ctm_authenticated || this.cth_authenticated;
		return localStorage.getItem('login_state');
	}
}

export default new Auth()