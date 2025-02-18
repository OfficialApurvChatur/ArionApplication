import API from "@/love/aAPI/API";
import clearFormObject from "@/love/dFunction/aClearFormObject";
import loading from "@/love/dFunction/fLoading";
import FinalRouteName from "@/love/gRoute/FinalRouteName";


const APIs = {
  // Profile Retrieve API
  ProfileRetrieveAPI: (Redux, ReduxUltimate) => {
    loading(ReduxUltimate, true)

    API.ContentAPI.TopbarAPI.ProfileAPI.RetrieveAPI()
    .then(response => {
    //   console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.ReceivedObject, payload: {
          ...Redux.state.ReceivedObject,
          Retrieve: {
            firstName: serverResponse.profile_retrieve.eFirstName,
            lastName: serverResponse.profile_retrieve.eLastName,
            email: serverResponse.profile_retrieve.eEmail,
            mobile: serverResponse.profile_retrieve.eMobile,
            image: serverResponse.profile_retrieve.eImage,
            
            title: serverResponse.profile_retrieve.aTitle,
            subtitle: serverResponse.profile_retrieve.aSubtitle,
            description: serverResponse.profile_retrieve.aDescription,
            coverImage: serverResponse.profile_retrieve.aImage,

            role: serverResponse.profile_retrieve.cRole,

            address: serverResponse.profile_retrieve.dAddress,
            links: serverResponse.profile_retrieve.dLinks,
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

  // Profile Delete API
  ProfileDeleteAPI: (Redux, ReduxUltimate) => {
    loading(ReduxUltimate, true)

    API.ContentAPI.TopbarAPI.ProfileAPI.DeleteAPI()
    .then(response => {
      console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        window.location.reload()
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