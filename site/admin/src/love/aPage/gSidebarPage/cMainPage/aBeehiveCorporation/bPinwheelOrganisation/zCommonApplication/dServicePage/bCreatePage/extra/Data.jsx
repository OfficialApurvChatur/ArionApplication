import handleInput from "@/love/dFunction/dHandleInput"
import Function from "./Function"
import validateFormObject from "@/love/dFunction/bValidateFormObject"

const Data = (Redux) => {
  return (
    {
      header: {
        label: "Service Create",
        buttons: []
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
                },
                {
                  label: "Title",
                  placeholder: "Title",
                  type: "text",
                  name: "title",
                  onChange: event => handleInput(event, Redux),
                },    
                {
                  label: "Subtitle",
                  placeholder: "Subtitle",
                  type: "text",
                  name: "subtitle",
                  onChange: event => handleInput(event, Redux),
                },    
                {
                  label: "Description",
                  placeholder: "Description",
                  type: "rich-text",
                  name: "description",
                  onChange: event => handleInput(event, Redux),
                },    
                {
                  label: "Detail",
                  placeholder: "Detail",
                  type: "text-area",
                  name: "detail",
                  onChange: event => handleInput(event, Redux),
                },    
                {
                  label: "Status",
                  placeholder: "Status",
                  type: "radio-new",
                  name: "status",
                  options: [
                    { label: "Active", value: "Active" },
                    { label: "Inactive", value: "Inactive" },
                  ]
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
              label: "Create",
              onClick: event => validateFormObject(event, Redux, Function.validateFormValues)
            },
          ],
        }
      }
    }
  )
}

export default Data