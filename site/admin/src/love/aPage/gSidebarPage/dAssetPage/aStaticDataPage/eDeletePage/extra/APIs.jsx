
import API from "@/love/aAPI/API";
import loading from "@/love/dFunction/fLoading";
import FinalRouteName from "@/love/gRoute/FinalRouteName";
import { STATIC_DATA_DELETED } from "@/love/iSocket/event";
import moment from "moment";

const APIs = {
  // Retrieve API
  RetrieveAPI: (Redux, ReduxUltimate, id) => {
    loading(ReduxUltimate, true)

    API.ContentAPI.SidebarAPI.AssetAPI.StaticDataAPI.RetrieveAPI({id})
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
            createdAt: serverResponse.retrieve.bCreatedAt && moment(serverResponse.retrieve.bCreatedAt).format('MMM Do YYYY, h:mm:ss a'),
            updatedBy: serverResponse.retrieve.bUpdatedBy,
            updatedAt: serverResponse.retrieve.bUpdatedAt && moment(serverResponse.retrieve.bUpdatedAt).format('MMM Do YYYY, h:mm:ss a'),

            cards: serverResponse.retrieve.dCards,
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

    API.ContentAPI.SidebarAPI.AssetAPI.StaticDataAPI.DeleteAPI({id})
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        toast({
          description: serverResponse.message,
        }); 
        socket.emit(STATIC_DATA_DELETED, serverResponse.delete);	
        navigate(FinalRouteName.ContentRoute.SidebarRoute.AssetRoute.StaticDataRoute.ListRoute)
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