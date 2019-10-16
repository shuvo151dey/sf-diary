import { combineReducers } from 'redux'
import alumniData from './alumniData'
import companyData from './companyData'
import ctmData from './ctmData'
import userDetails from './userDetails'
import alumniDetailTable from './alumniDetailTable'
import companyDetailTable from './companyDetailTable'

const reducers = combineReducers({
	alumni: alumniData,
	company: companyData,
	userDetails: userDetails,
	alumniDetailTable: alumniDetailTable,
	companyDetailTable: companyDetailTable,
	ctm: ctmData
});

export default reducers;