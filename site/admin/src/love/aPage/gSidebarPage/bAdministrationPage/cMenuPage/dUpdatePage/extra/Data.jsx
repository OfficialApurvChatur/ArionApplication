import handleInput from "@/love/dFunction/dHandleInput"
import Function from "./Function"
import validateFormObject from "@/love/dFunction/bValidateFormObject"
import FinalRouteName from "@/love/gRoute/FinalRouteName"

const Data = (Redux, id) => {
  return (
    {
      header: {
        label: "Menu Update",
        buttons: [
          {
            label: "Delete",
            route: `${FinalRouteName.ContentRoute.SidebarRoute.AdministrationRoute.MenuRoute.DeleteRoute}/${id}`
          },
        ]
      },
      component: "Create",
      content: {
        create: {
          cards: [
            {
              display: false,
              title: "Critical Info",
              inputs: [],  
            },
            {
              display: true,
              title: "Basic Info",
              inputs: [
                {
                  label: "Image",
                  placeholder: "Image",
                  type: "file",
                  name: "image",
                  onChange: event => handleInput(event, Redux),
                  // value: Redux.state.FormObject.FormValue?.image
                },
                {
                  label: "Title",
                  placeholder: "Title",
                  type: "text",
                  name: "title",
                  onChange: event => handleInput(event, Redux),
                  value: Redux.state.FormObject.FormValue?.title
                },    
                {
                  label: "Subtitle",
                  placeholder: "Subtitle",
                  type: "text",
                  name: "subtitle",
                  onChange: event => handleInput(event, Redux),
                  value: Redux.state.FormObject.FormValue?.subtitle
                },    
                {
                  label: "Description",
                  placeholder: "Description",
                  type: "text-area",
                  name: "description",
                  onChange: event => handleInput(event, Redux),
                  value: Redux.state.FormObject.FormValue?.description
                },  
                {
                  label: "Detail",
                  placeholder: "Detail",
                  type: "text-area",
                  name: "detail",
                  onChange: event => handleInput(event, Redux),
                  value: Redux.state.FormObject.FormValue?.detail
                },      
                {
                  label: "Status",
                  placeholder: "Status",
                  type: "radio-new",
                  name: "status",
                  value: Redux.state.FormObject.FormValue?.status,
                  options: [
                    { label: "Active", value: "Active" },
                    { label: "Inactive", value: "Inactive" },
                  ],
                  onChange: event => Redux.dispatch({
                    type: Redux.action.FormObject,
                    payload: {
                      ...Redux.state.FormObject,
                      FormValue: {
                        ...Redux.state.FormObject?.FormValue,
                        [event.target.name]: event.target.checked ? 'Active' : 'Inactive',
                      },
                    },
                  })
                },          
              ],
            },
            {
              display: false,
              title: "Personal Info",
              inputs: [],  
            },
            {
              display: false,
              title: "Relation Info",
              inputs: [],  
            },
            {
              display: false,
              title: "More Info",
              inputs: [],  
            },
          ],
          buttons: [
            {
              type: "button",
              label: "Update",
              onClick: event => validateFormObject(event, Redux, Function.validateFormValues)
            },
          ],
        }
      }
    }
  )
}

export default Data