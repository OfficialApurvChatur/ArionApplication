import API from "@/love/aAPI/API";
import clearFormObject from "@/love/dFunction/aClearFormObject";
import loading from "@/love/dFunction/fLoading";
import FinalRouteName from "@/love/gRoute/FinalRouteName";
import { ADMIN_HERO_CREATED } from "@/love/iSocket/event";

const APIs = {
  CreateAPI: (Redux, ReduxUltimate, navigate, toast, socket) => {
    loading(ReduxUltimate, true)

    API.ContentAPI.SidebarAPI.SettingAPI.AdminHeroAPI.CreateAPI({
			data: {
        aTitle: Redux.state.FormObject.FormValue.title,
        aSubtitle: Redux.state.FormObject.FormValue.subtitle,
        aDescription: Redux.state.FormObject.FormValue.description,
        aDetail: Redux.state.FormObject.FormValue.detail,
        aImage: Redux.state.FormObject.FormValue.image,
        aStatus: Redux.state.FormObject.FormValue.status === 'Active' ? true : false,

        dTag: Redux.state.FormObject.FormValue.tag,
        dSocialLinks: Redux.state.FormObject.FormValue.socialLinks,
        dWebLinks: Redux.state.FormObject.FormValue.webLinks,
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
        socket.emit(ADMIN_HERO_CREATED, serverResponse.create);	
        navigate(FinalRouteName.ContentRoute.SidebarRoute.SettingRoute.AdminHeroRoute.ListRoute)
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response?.data
    })
    .finally(() => loading(ReduxUltimate, false) );
  },
}

export default APIs