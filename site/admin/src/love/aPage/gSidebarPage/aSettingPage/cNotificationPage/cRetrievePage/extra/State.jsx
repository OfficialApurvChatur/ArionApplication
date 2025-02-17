const InitialState = {
	A: "Bro... Inside NotificationRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const NotificationRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-notification-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-notification-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-notification-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-notification-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-notification-retrieve-page',
	ReceivedObject: 'received-object-notification-retrieve-page',
	RequiredObject: 'required-object-notification-retrieve-page',
	ExtraObject: 'extra-object-notification-retrieve-page',
}  

export default NotificationRetrievePageState