const InitialState = {
	A: "Bro... Inside NotificationUpdatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const NotificationUpdatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-notification-update-page':
			return {...state, FormObject: action.payload}
		case 'received-object-notification-update-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-notification-update-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-notification-update-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-notification-update-page',
	ReceivedObject: 'received-object-notification-update-page',
	RequiredObject: 'required-object-notification-update-page',
	ExtraObject: 'extra-object-notification-update-page',
}  

export default NotificationUpdatePageState