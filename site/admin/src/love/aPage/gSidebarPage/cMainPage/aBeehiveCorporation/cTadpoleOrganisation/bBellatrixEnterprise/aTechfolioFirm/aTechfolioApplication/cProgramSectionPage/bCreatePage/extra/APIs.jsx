import API from "@/love/aAPI/API";
import clearFormObject from "@/love/dFunction/aClearFormObject";
import loading from "@/love/dFunction/fLoading";
import FinalRouteName from "@/love/gRoute/FinalRouteName";

const APIs = {
  CreateAPI: (Redux, ReduxUltimate, navigate, toast) => {
    loading(ReduxUltimate, true)

    API.ContentAPI.SidebarAPI.MainAPI.ProgramSectionAPI.CreateAPI({
			data: {
        aTitle: Redux.state.FormObject.FormValue.title,
        aSubtitle: Redux.state.FormObject.FormValue.subtitle,
        aDescription: Redux.state.FormObject.FormValue.description,
        aDetail: Redux.state.FormObject.FormValue.detail,
        aImage: Redux.state.FormObject.FormValue.image,
        aStatus: Redux.state.FormObject.FormValue.status === 'Active' ? true : false,

        cPrograms: Redux.state.FormObject.FormValue.programs,
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
        navigate(FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.ListRoute)
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response?.data
    })
    .finally(() => loading(ReduxUltimate, false) );
  },

  // Other APIs
  // Program List API
  ProgramListAPI: (Redux, ReduxUltimate) => {
    loading(ReduxUltimate, true)

    API.ContentAPI.SidebarAPI.MainAPI.ProgramAPI.ListAPI()
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.RequiredObject, payload: {
          ...Redux.state.RequiredObject,
          ProgramList: serverResponse.list.map(each => {
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