
const Data = (Redux, id) => {
  return (
    {
      header: {
        label: "Hero Delete",
        buttons: []
      },
      component: "Delete",
      content: {
        detail: {
          cards: Redux.state.ReceivedObject?.Retrieve && [
            {
              display: false,
              title: "Critical Info",
              values: [],  
            },
            {
              display: true,
              title: "Basic Info",
              values: [
                {
                  type: "file",
                  label: "Image",
                  value: Redux.state.ReceivedObject?.Retrieve["image"]?.url
                },
                {
                  label: "Title",
                  value: Redux.state.ReceivedObject?.Retrieve["title"]
                },
                {
                  label: "Subtitle",
                  value: Redux.state.ReceivedObject?.Retrieve["subtitle"]
                },
                {
                  label: "Description",
                  value: Redux.state.ReceivedObject?.Retrieve["description"]
                },
                {
                  label: "Detail",
                  value: Redux.state.ReceivedObject?.Retrieve["detail"]
                },
                {
                  label: "Slug",
                  value: Redux.state.ReceivedObject?.Retrieve["slug"]
                },
              ],
            },
            {
              display: true,
              title: "Personal Info",
              values: [
                {
                  label: "Created By",
                  value: Redux.state.ReceivedObject?.Retrieve["createdBy"]
                },
                {
                  label: "Created At",
                  value: Redux.state.ReceivedObject?.Retrieve["createdAt"]
                },
                {
                  label: "Updated By",
                  value: Redux.state.ReceivedObject?.Retrieve["updatedBy"]
                },
                {
                  label: "Updated At",
                  value: Redux.state.ReceivedObject?.Retrieve["updatedAt"]
                },
              ],  
            },
            {
              display: false,
              title: "Relation Info",
              values: [],  
            },
            {
              display: true,
              title: "More Info",
              values: [
                {
                  label: "Tag",
                  value: Redux.state.ReceivedObject?.Retrieve["tag"]
                },
                {
                  label: "Type",
                  value: Redux.state.ReceivedObject?.Retrieve["type"]
                },
                {
                  type: "links2",
                  label: "Social Links",
                  value: Redux.state.ReceivedObject?.Retrieve["socialLinks"]
                },
                {
                  type: "links1",
                  label: "Web Links",
                  value: Redux.state.ReceivedObject?.Retrieve["webLinks"]
                },
              ],  
            },
          ],
        },
      }
    }
  )
}

export default Data