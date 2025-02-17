
import API from "@/love/aAPI/API";
import loading from "@/love/dFunction/fLoading";
import FinalRouteName from "@/love/gRoute/FinalRouteName";
import { ADMIN_HERO_DELETED } from "@/love/iSocket/event";
import moment from "moment";

const APIs = {
  // Retrieve API
  RetrieveAPI: (Redux, ReduxUltimate, id) => {
    loading(ReduxUltimate, true)

    API.ContentAPI.SidebarAPI.SettingAPI.AdminHeroAPI.RetrieveAPI({id})
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.ReceivedObject, payload: {
          ...Redux.state.ReceivedObject,
          Retrieve: {
            id: serverResponse.retrieve._id,
            image: serverResponse.retrieve.aImage,
            title: serverResponse.retrieve.aTitle,
            subtitle: serverResponse.retrieve.aSubtitle,
            description: serverResponse.retrieve.aDescription,
            detail: serverResponse.retrieve.aDetail,
            slug: serverResponse.retrieve.aSlug,
            status: serverResponse.retrieve.aStatus === true ? 'Active' : 'Inactive',

            createdBy: serverResponse.retrieve.bCreatedBy,
            createdAt: moment(serverResponse.retrieve.bCreatedAt).format('MMM Do YYYY, h:mm:ss a'),
            updatedBy: serverResponse.retrieve.bUpdatedBy,
            updatedAt: moment(serverResponse.retrieve.bUpdatedAt).format('MMM Do YYYY, h:mm:ss a'),

            tag: serverResponse.retrieve.dTag,
            socialLinks: serverResponse.retrieve.dSocialLinks,
            webLinks: serverResponse.retrieve.dWebLinks,
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

   // Delete API
   DeleteAPI: (Redux, ReduxUltimate, id, navigate, toast, socket) => {
    loading(ReduxUltimate, true)

    API.ContentAPI.SidebarAPI.SettingAPI.AdminHeroAPI.DeleteAPI({id})
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        toast({
          description: serverResponse.message,
        }); 
        socket.emit(ADMIN_HERO_DELETED, serverResponse.delete);	
        navigate(FinalRouteName.ContentRoute.SidebarRoute.SettingRoute.AdminHeroRoute.ListRoute)
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