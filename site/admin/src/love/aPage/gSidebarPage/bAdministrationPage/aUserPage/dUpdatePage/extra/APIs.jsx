import API from "@/love/aAPI/API";
import clearFormObject from "@/love/dFunction/aClearFormObject";
import loading from "@/love/dFunction/fLoading";
import FinalRouteName from "@/love/gRoute/FinalRouteName";
import { USER_UPDATED } from "@/love/iSocket/event";

const APIs = {
  // Retrieve API
  RetrieveAPI: (Redux, ReduxUltimate, id) => {
    loading(ReduxUltimate, true)

    API.ContentAPI.SidebarAPI.AdministrationAPI.UserAPI.RetrieveAPI({id})
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.FormObject, payload: {
          ...Redux.state.FormObject,
          FormValue: {
            id: serverResponse.retrieve._id,

            // createdBy: serverResponse.retrieve.bCreatedBy,
            // createdAt: moment(serverResponse.retrieve.bCreatedAt).format('MMM Do YYYY, h:mm:ss a'),
            // updatedBy: serverResponse.retrieve.bUpdatedBy,
            // updatedAt: moment(serverResponse.retrieve.bUpdatedAt).format('MMM Do YYYY, h:mm:ss a'),

            firstName: serverResponse.retrieve.eFirstName,
            lastName: serverResponse.retrieve.eLastName,
            email: serverResponse.retrieve.eEmail,
            mobile: serverResponse.retrieve.eMobile,
            image: serverResponse.retrieve.eImage,
            
            title: serverResponse.retrieve.aTitle,
            subtitle: serverResponse.retrieve.aSubtitle,
            description: serverResponse.retrieve.aDescription,
            detail: serverResponse.retrieve.aDetail,
            coverImage: serverResponse.retrieve.aImage,
            status: serverResponse.retrieve.aStatus === true ? 'Active' : 'Inactive',

            role: serverResponse.retrieve.cRole,

            address: serverResponse.retrieve.dAddress,
            links: serverResponse.retrieve.dLinks,
          }
        }})
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response.data
    })
    .finally(() => loading(ReduxUltimate, false) );
  },
  
   // Update API
   UpdateAPI: (Redux, ReduxUltimate, id, navigate, toast, socket) => {
    loading(ReduxUltimate, true)

    API.ContentAPI.SidebarAPI.AdministrationAPI.UserAPI.UpdateAPI({
      id,
			data: {
        eFirstName: Redux.state.FormObject.FormValue.firstName,
        eLastName: Redux.state.FormObject.FormValue.lastName,
        eEmail: Redux.state.FormObject.FormValue.email,
        ePassword: Redux.state.FormObject.FormValue.password,
        eMobile: Redux.state.FormObject.FormValue.mobile,
        eImage: Redux.state.FormObject.FormValue.image,

        aTitle: Redux.state.FormObject.FormValue.title,
        aSubtitle: Redux.state.FormObject.FormValue.subtitle,
        aDescription: Redux.state.FormObject.FormValue.description,
        aDetail: Redux.state.FormObject.FormValue.detail,
        aImage: Redux.state.FormObject.FormValue.coverImage,
        aStatus: Redux.state.FormObject.FormValue.status === 'Active' ? true : false,

        cRole: Redux.state.FormObject.FormValue.role,

        dAddress: Redux.state.FormObject.FormValue.address,
        dLinks: Redux.state.FormObject.FormValue.links,
			}
    })
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        toast({
          description: serverResponse.message,
        });
        clearFormObject(Redux)
        socket.emit(USER_UPDATED, serverResponse.update);	
        navigate(FinalRouteName.ContentRoute.SidebarRoute.AdministrationRoute.UserRoute.ListRoute)
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response?.data
    })
    .finally(() => loading(ReduxUltimate, false) );
  },

  // Other APIs
  // Role List API
  RoleListAPI: (Redux, ReduxUltimate) => {
    loading(ReduxUltimate, true)

    API.ContentAPI.SidebarAPI.AdministrationAPI.RoleAPI.ListAPI()
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.RequiredObject, payload: {
          ...Redux.state.RequiredObject,
          RoleList: serverResponse.list.map(each => {
            return {
              id: each._id,
              title: each.aTitle,
            }
          })
        } })
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response.data
    })
    .finally(() => loading(ReduxUltimate, false) );
  },
  
}

export default APIs