const InitialState = {
	A: "Bro... Inside NotificationDeletePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const NotificationDeletePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-notification-delete-page':
			return {...state, FormObject: action.payload}
		case 'received-object-notification-delete-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-notification-delete-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-notification-delete-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-notification-delete-page',
	ReceivedObject: 'received-object-notification-delete-page',
	RequiredObject: 'required-object-notification-delete-page',
	ExtraObject: 'extra-object-notification-delete-page',
}  

export default NotificationDeletePageState