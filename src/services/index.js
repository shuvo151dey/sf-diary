import { HTTP } from '../Config/apiConfig'
import { trackPromise } from 'react-promise-tracker';

export const login = (data) => 
	trackPromise(HTTP.post('sfdiary/login', JSON.stringify(data), {

		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Origin":"true",
		}
	}).then(res => {

		return res.data;
	}).catch(err => {
		console.log(err);
		return null;
	}));

export const getData = (data) => 
	trackPromise(HTTP.post('sfdiary/getdata', JSON.stringify(data), {
		headers: {
			"Content-Type": "application/json"
		}
	}).then(res => {
		return res.data;
	}).catch(err => {
		console.log(err);
		return null;
	}))

export const getDetails = (data) => 
	trackPromise(HTTP.post('sfdiary/getdetails', JSON.stringify(data), {
		headers: {
			"Content-Type": "application/json"
		}
	}).then(res => {
		return res.data;
	}).catch(err => {
		console.log(err);
		return null;
	}))

export const addUpdate = (data) => 
	trackPromise(HTTP.post('sfdiary/addupdate', JSON.stringify(data), {
		headers: {
			"Content-Type": "application/json"
		}
	}).then(res => {
		return res.data;
	}).catch(err => {
		console.log(err);
		return null;
	}))

export const newAlumni = (data) => 
	trackPromise(HTTP.post('sfdiary/addalumni', JSON.stringify(data), {
		headers: {
			"Content-Type": "application/json"
		}
	}).then(res => {
		return res.data;
	}).catch(err => {
		console.log(err);
		return null;
	}))

export const newCompany = (data) => 
	trackPromise(HTTP.post('sfdiary/addcompany', JSON.stringify(data), {
		headers: {
			"Content-Type": "application/json"
		}
	}).then(res => {
		return res.data;
	}).catch(err => {
		console.log(err);
		return null;
	}))

export const getCTMS = (data) => 
	trackPromise(HTTP.post('sfdiary/getctms', JSON.stringify(data), {
		headers: {
			"Content-Type": "application/json"
		}
	}).then(res => {
		return res.data;
	}).catch(err => {
		console.log(err);
		return null;
	}))

export const editDetails = (data) => 
	trackPromise(HTTP.post('sfdiary/editdetail', JSON.stringify(data), {
		headers: {
			"Content-Type": "application/json"
		}
	}).then(res => {
		return res.data;
	}).catch(err => {
		console.log(err);
		return null;
	}))