const initialState = [
	{
    Header: 'Compay Name',
    accessor: 'company_name',
	index: 1
    },
    {
    Header: 'Contact Person Name',
    accessor: 'contact_name',
    index: 2
    },
	{
    Header: 'Phone No',
    accessor: 'mobile',
	index: 3
    },
	{
    Header: 'Email',
    accessor: 'email',
	index: 4
    },
	{
    Header: 'Post of Contact',
    accessor: 'post',
	index: 5
    },
	{
    Header: 'Address',
    accessor: 'addr',
	index: 6
    },
	{
    Header: 'Remarks',
    accessor: 'remarks',
	index: 7
    },
	{
    Header: 'Updates',
    accessor: 'updates',
	index: 8
    }
];

export default function (state = initialState, action) {
    switch(action.type){
        case 'COMPANY_DETAIL_TABLE':
            return action.payload;
        default:
            return state;
    }
}