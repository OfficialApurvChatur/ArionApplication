import API from "@/love/aAPI/API";
import clearFormObject from "@/love/dFunction/aClearFormObject";
import loading from "@/love/dFunction/fLoading";
import FinalRouteName from "@/love/gRoute/FinalRouteName";

const APIs = {
  // Retrieve API
  RetrieveAPI: (Redux, ReduxUltimate, id) => {
    loading(ReduxUltimate, true)

    API.ContentAPI.SidebarAPI.MainAPI.ProjectAPI.RetrieveAPI({id})
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.FormObject, payload: {
          ...Redux.state.FormObject,
          FormValue: {
            id: serverResponse.retrieve._id,
            image: serverResponse.retrieve.aImage,
            title: serverResponse.retrieve.aTitle,
            subtitle: serverResponse.retrieve.aSubtitle,
            description: serverResponse.retrieve.aDescription,
            detail: serverResponse.retrieve.aDetail,
            slug: serverResponse.retrieve.aSlug,
            status: serverResponse.retrieve.aStatus === true ? 'Active' : 'Inactive',

            createdBy: serverResponse.retrieve.bCreatedBy,
            createdAt: serverResponse.retrieve.bCreatedAt,
            updatedBy: serverResponse.retrieve.bUpdatedBy,
            updatedAt: serverResponse.retrieve.bUpdatedAt,

            webLinks: serverResponse.retrieve.dWebLinks,
            galleryImages: serverResponse.retrieve.dGalleryImages,

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
   UpdateAPI: (Redux, ReduxUltimate, id, navigate, toast) => {
    loading(ReduxUltimate, true)

    const formData = new FormData();
    formData.append('aTitle', JSON.stringify(Redux.state.FormObject.FormValue?.title || ""));
    formData.append('aSubtitle', JSON.stringify(Redux.state.FormObject.FormValue?.subtitle || ""));
    formData.append('aDescription', JSON.stringify(Redux.state.FormObject.FormValue?.description || ""));
    formData.append('aDetail', JSON.stringify(Redux.state.FormObject.FormValue?.detail || ""));
    formData.append('aImage', JSON.stringify(Redux.state.FormObject.FormValue?.image || ""));
    formData.append('aStatus', JSON.stringify(Redux.state.FormObject.FormValue?.status === 'Active' ? true : false));
    formData.append('dWebLinks', JSON.stringify(Redux.state.FormObject.FormValue?.webLinks || ""));
    formData.append('dGalleryImages', JSON.stringify(Redux.state.FormObject.FormValue?.galleryImages
      ?.map(each => {
        if (each?.public_id) return each
      })
      ?.filter(each => each) || ""
    ));
    Redux.state.FormObject.FormValue?.galleryImages?.length && 
      Redux.state.FormObject.FormValue?.galleryImages?.forEach(file => {
        if (file.name) formData.append('dGalleryImages', file);
      });

    API.ContentAPI.SidebarAPI.MainAPI.ProjectAPI.UpdateAPI({
      id,
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