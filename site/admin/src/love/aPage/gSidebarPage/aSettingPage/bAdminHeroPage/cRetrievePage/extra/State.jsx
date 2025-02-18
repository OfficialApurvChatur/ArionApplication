const InitialState = {
	A: "Bro... Inside AdminHeroRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const AdminHeroRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-admin-hero-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-admin-hero-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-admin-hero-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-admin-hero-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-admin-hero-retrieve-page',
	ReceivedObject: 'received-object-admin-hero-retrieve-page',
	RequiredObject: 'required-object-admin-hero-retrieve-page',
	ExtraObject: 'extra-object-admin-hero-retrieve-page',
}  

export default AdminHeroRetrievePageState