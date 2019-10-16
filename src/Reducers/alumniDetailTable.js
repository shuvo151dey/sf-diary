const initialState = [
	{
    Header: 'Name',
    accessor: 'name',
	index: 1
    },
	{
    Header: 'Phone No',
    accessor: 'mobile',
	index: 2
    },
	{
    Header: 'Email',
    accessor: 'email',
	index: 3
    },
	{
    Header: 'LinkedIn Link',
    accessor: 'linkedin',
	index: 4
    },
	{
    Header: 'Address',
    accessor: 'addr',
	index: 5
    },
	{
    Header: 'Remarks',
    accessor: 'remarks',
	index: 6
    },
	{
    Header: 'Updates',
    accessor: 'updates',
	index: 7
    }
];

export default function (state = initialState, action) {
    switch(action.type){
        case 'ALUMNI_DETAIL_TABLE':
            return action.payload;
        default:
            return state;
    }
}