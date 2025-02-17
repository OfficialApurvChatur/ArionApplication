import { toast } from "@/components/ui/use-toast";

const handleInput = (event, Redux) => {
  const { name, value, type, multiple } = event.target;

  switch (true) {
    // case type === "select-one":
    //   Redux.dispatch({
    //     type: Redux.action.FormObject,
    //     payload: {
    //       ...Redux.state.FormObject,
    //       FormValue: {
    //         ...Redux.state.FormObject?.FormValue,
    //         [name]: {id: value},
    //       },
    //     },
    //   });
    //   break;

    case type !== "file":
      Redux.dispatch({
        type: Redux.action.FormObject,
        payload: {
          ...Redux.state.FormObject,
          FormValue: {
            ...Redux.state.FormObject?.FormValue,
            [name]: value,
          },
        },
      });
      break;

    case type === "file" && multiple:

      if (event.target.files.length > 10) {
        toast({
          description: "You can only upload up to 10 images at a time.",
        });        
        return;
      }

      Redux.dispatch({
        type: Redux.action.FormObject,
        payload: {
          ...Redux.state.FormObject,
          FormValue: {
            ...Redux.state.FormObject?.FormValue,
            [name]: Redux.state.FormObject?.FormValue?.[name]?.length > 0 ? [
                ...Redux.state.FormObject?.FormValue?.[name],
                ...Array.from(event.target.files)
              ] : [
                ...Array.from(event.target.files)
              ],
          },
        },
      });
      break;

    case type === "file":
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          return (
            Redux.dispatch({
              type: Redux.action.FormObject,
              payload: {
                ...Redux.state.FormObject,
                FormValue: {
                  ...Redux.state.FormObject?.FormValue,
                  [name]: {url: reader.result}
                },
              },
            })
          )
        }
      };

      reader.readAsDataURL(file);
      break;
    
    default:
      console.log("Not Good Input ");
  }
};

export default handleInput
