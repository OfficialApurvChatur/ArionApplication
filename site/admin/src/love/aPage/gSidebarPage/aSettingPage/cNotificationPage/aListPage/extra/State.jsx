const InitialState = {
	A: "Bro... Inside NotificationListPageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const NotificationListPageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-notification-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-notification-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-notification-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-notification-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-notification-list-page',
	ReceivedObject: 'received-object-notification-list-page',
	RequiredObject: 'required-object-notification-list-page',
	ExtraObject: 'extra-object-notification-list-page',
}  

export default NotificationListPageState