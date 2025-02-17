const InitialState = {
	A: "Bro... Inside NotificationCreatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const NotificationCreatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-notification-create-page':
			return {...state, FormObject: action.payload}
		case 'received-object-notification-create-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-notification-create-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-notification-create-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-notification-create-page',
	ReceivedObject: 'received-object-notification-create-page',
	RequiredObject: 'required-object-notification-create-page',
	ExtraObject: 'extra-object-notification-create-page',
}  

export default NotificationCreatePageState