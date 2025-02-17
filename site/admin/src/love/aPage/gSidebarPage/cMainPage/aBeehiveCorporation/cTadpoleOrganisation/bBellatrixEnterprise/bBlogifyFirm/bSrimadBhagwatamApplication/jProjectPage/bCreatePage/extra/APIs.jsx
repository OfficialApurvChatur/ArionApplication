import API from "@/love/aAPI/API";
import clearFormObject from "@/love/dFunction/aClearFormObject";
import loading from "@/love/dFunction/fLoading";
import FinalRouteName from "@/love/gRoute/FinalRouteName";

const APIs = {
  CreateAPI: (Redux, ReduxUltimate, navigate, toast) => {
    loading(ReduxUltimate, true)

    const formData = new FormData();
    formData.append('aTitle', JSON.stringify(Redux.state.FormObject.FormValue?.title || ""));
    formData.append('aSubtitle', JSON.stringify(Redux.state.FormObject.FormValue?.subtitle || ""));
    formData.append('aDescription', JSON.stringify(Redux.state.FormObject.FormValue?.description || ""));
    formData.append('aDetail', JSON.stringify(Redux.state.FormObject.FormValue?.detail || ""));
    formData.append('aImage', JSON.stringify(Redux.state.FormObject.FormValue?.image || ""));
    formData.append('aStatus', JSON.stringify(Redux.state.FormObject.FormValue?.status === 'Active' ? true : false));
    formData.append('dWebLinks', JSON.stringify(Redux.state.FormObject.FormValue?.webLinks || ""));
    Redux.state.FormObject.FormValue?.galleryImages?.length && 
      Redux.state.FormObject.FormValue?.galleryImages?.forEach(file => {
        formData.append('dGalleryImages', file);
      });

    API.ContentAPI.SidebarAPI.MainAPI.ProjectAPI.CreateAPI({
			data: formData
    })
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        toast({
          description: serverResponse.message,
        });
        clearFormObject(Redux)
        navigate(FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.ListRoute)
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