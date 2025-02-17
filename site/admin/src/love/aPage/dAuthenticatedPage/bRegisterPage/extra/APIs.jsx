import API from "../../../../aAPI/API";
import loading from "../../../../dFunction/fLoading";
import clearFormObject from "../../../../dFunction/aClearFormObject";
import FinalRouteName from "../../../../gRoute/FinalRouteName";

const APIs = {
  // Register API
  RegisterAPI: (Redux, navigate, ReduxUltimate, toast) => {
    loading(ReduxUltimate, true)

    API.AuthAPI.RegisterAPI({
      data: {
        eFirstName: Redux.state.FormObject.FormValue.firstName,
        eLastName: Redux.state.FormObject.FormValue.lastName,
        eEmail: Redux.state.FormObject.FormValue.email,
        ePassword: Redux.state.FormObject.FormValue.password,

        aTitle: `This is ${Redux.state.FormObject.FormValue.firstName}`,
        aSubtitle: "Hi there I am using Beehive",
        aDescription: "This is some detailed description",
        aStatus: true,

        cRole: 
          import.meta.env.VITE_APPLICATION === "BeehiveApplication" ? "660fcdc5a869d9ca69d3954a" :
          import.meta.env.VITE_APPLICATION === "AndromedaApplication" ? "660fce6508fcfc0e847c534a" :
          import.meta.env.VITE_APPLICATION === "PinwheelApplication" ? "660fced5be340bf2b85ab6d3" :
          import.meta.env.VITE_APPLICATION === "TadpoleApplication" ? "660fcf1e27ecc1188bdef78e" :
          import.meta.env.VITE_APPLICATION === "AcruxApplication" ? "660fcfc7e1fcdbeca791302b" :
          import.meta.env.VITE_APPLICATION === "AnserApplication" ? "660fd03d03b23a2d8536825c" :
          import.meta.env.VITE_APPLICATION === "AquilaApplication" ? "660fd0a023cbda8f65890bcc" :
          import.meta.env.VITE_APPLICATION === "BellatrixApplication" ? "660fd0fbe5d1afe66e6f3d46" :
          import.meta.env.VITE_APPLICATION === "CapellaApplication" ? "660fd14db067fbbcb97442b2" :
          import.meta.env.VITE_APPLICATION === "ArionApplication" ? "660fd4488b02b9d6fb716c63" :
          import.meta.env.VITE_APPLICATION === "AnkasApplication" ? "660fd49647395ad3b930230f" :
          import.meta.env.VITE_APPLICATION === "AbolApplication" ? "660fd4f7d79c72748211e5ac" :
          import.meta.env.VITE_APPLICATION === "TechfolioApplication" ? "660fd74c3c4c7fe812deaaf9" :
          import.meta.env.VITE_APPLICATION === "ApurvChaturApplication" ? "660fd84e8794d65c2ef1bcef" :
          import.meta.env.VITE_APPLICATION === "AnushreeMandapeApplication" ? "660fd8b244b32e89222b541b" :
          import.meta.env.VITE_APPLICATION === "SofieBerkinApplication" ? "660fd909c23f73ef3055aeca" :
          import.meta.env.VITE_APPLICATION === "BlogifyApplication" ? "660fd7bfb15aa06d7209e138" :
          import.meta.env.VITE_APPLICATION === "SrimadBhagwatamApplication" ? "660fd98c4ccdb799e59cb56f" :
          import.meta.env.VITE_APPLICATION === "BhagwadGitaApplication" ? "660fd9e1ea3388fed891116e" :
          import.meta.env.VITE_APPLICATION === "InterviewQuestionApplication" ? "660fda27b112ec1f2d15caf9" :
          import.meta.env.VITE_APPLICATION === "SwiftTalkApplication" ? "661a937e5987289487c92b5d" :
          null
      }
    })
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        ReduxUltimate.dispatch({ type: ReduxUltimate.action.ExtraObject, payload: {
          ...ReduxUltimate.state.ExtraObject,
          Halchal: !ReduxUltimate.state.ExtraObject?.Halchal || true
        }})
        toast({
          description: serverResponse.message,
        });
        clearFormObject(Redux)
        navigate(FinalRouteName.GlobalRoute.HomeRoute)
      }
    })
    .catch(error => {
      // console.log(error.response.data);
      const serverResponse = error.response.data
      toast({
        description: serverResponse.message,
      });
    })
    .finally(() => loading(ReduxUltimate, false) );
  },
}

export default APIs