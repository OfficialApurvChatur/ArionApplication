import axios from 'axios';


const APIBase = (props) => {
    // Base URL
	var BASE_URL

    switch (import.meta.env.VITE_CORPORATION) {
        case 'BeehiveCorporation':
    
            switch (import.meta.env.VITE_ORGANISATION) {
                case 'AndromedaOrganisation':
                    
                    switch (import.meta.env.VITE_ENTERPRISE) {
                        case 'AcruxEnterprise':

                            switch (import.meta.env.VITE_APPLICATION) {
                                case 'ArionApplication':
                                    BASE_URL = "https://backend-for-arion-application.onrender.com"
                                    break;
                                case 'AnkasApplication':
                                    BASE_URL = "https://backend-for-ankas-application.onrender.com"
                                    break;
                                case 'AbolApplication':
                                    BASE_URL = "https://backend-for-abol-application.onrender.com"
                                    break;
                                default:
                                    break;
                            }   
                            break;

                        case 'AnserEnterprise':
                            switch (import.meta.env.VITE_APPLICATION) {
                                case 'SwiftTalkApplication':
                                    BASE_URL = "https://backend-for-swift-talk-application.onrender.com"
                                    break;
                                default:
                                    break;
                            }   
                            break;

                        default:
                            break;
                    }   
                    break;
    
                case 'PinwheelOrganisation':
    
                    switch (import.meta.env.VITE_APPLICATION) {
                        case 'BeehiveApplication':
                            BASE_URL = "https://backend-for-beehive-application.onrender.com"
                            break;
                        case 'AndromedaApplication':
                            BASE_URL = "https://backend-for-andromeda-application.onrender.com"
                            break;
                        case 'PinwheelApplication':
                            BASE_URL = "https://backend-for-pinwheel-application.onrender.com"
                            break;
                        case 'TadpoleApplication':
                            BASE_URL = "https://backend-for-tadpole-application.onrender.com"
                            break;
                        case 'AcruxApplication':
                            BASE_URL = "https://backend-for-acrux-application.onrender.com"
                            break;
                        case 'AnserApplication':
                            BASE_URL = "https://backend-for-anser-application.onrender.com"
                            break;
                        case 'AquilaApplication':
                            BASE_URL = "https://backend-for-aquila-application.onrender.com"
                            break;
                        case 'BellatrixApplication':
                            BASE_URL = "https://backend-for-bellatrix-application.onrender.com"
                            break;
                        case 'CapellaApplication':
                            BASE_URL = "https://backend-for-capella-application.onrender.com"
                            break;
                        default:
                            break;
                    }   
                    break;
    
                case 'TadpoleOrganisation':
    
                    switch (import.meta.env.VITE_ENTERPRISE) {
                        case 'AquilaEnteprise':
                            break;

                        case 'BellatrixEnterprise':

                            switch (import.meta.env.VITE_FIRM) {
                                case 'TechfolioFirm':

                                    switch (import.meta.env.VITE_APPLICATION) {
                                        case 'TechfolioApplication':
                                            BASE_URL = "https://backend-for-techfolio-application.onrender.com"
                                            break;
                                        case 'ApurvChaturApplication':
                                            BASE_URL = "https://backend-for-apurv-chatur-application.onrender.com"
                                            break;
                                        case 'AnushreeMandapeApplication':
                                            BASE_URL = "https://backend-for-anushree-mandape-application.onrender.com"
                                            break;
                                        case 'SofieBerkinApplication':
                                            BASE_URL = "https://backend-for-sofie-berkin-application.onrender.com"
                                            break;
                                        default:
                                            break;
                                    }   
                                    break;

                                case 'BlogifyFirm':

                                    switch (import.meta.env.VITE_APPLICATION) {
                                        case 'BlogifyApplication':
                                            BASE_URL = "https://backend-for-blogify-application.onrender.com"
                                            break;
                                        case 'SrimadBhagwatamApplication':
                                            BASE_URL = "https://backend-for-srimad-bhagwatam-application.onrender.com"
                                            break;
                                        case 'BhagwadGitaApplication':
                                            BASE_URL = "https://backend-for-bhagwad-gita-application.onrender.com"
                                            break;
                                        case 'InterviewQuestionApplication':
                                            BASE_URL = "https://backend-for-interview-question-application.onrender.com"
                                            break;
                                        default:
                                            break;
                                    }   
                                    break;

                                default:
                                    break;
                            }   
                            break;

                        case 'CapellaEnteprise':
                            break;
                        default:
                            break;
                    }   
                    break;
            }  
            break;
    
        default:
            BASE_URL = "https://some-application.onrender.com/SomeOtherStuff"
            break;
    }

    // Request Configuration
    const configuration = {
        method: props.method,
        url: props.url,
        baseURL: import.meta.env.VITE_ENVIRONMENT === "Production" ? BASE_URL : "http://localhost:8000",
        // headers: { 
        //     'Content-Type': 'application/json',
        // },
        withCredentials: true,
        credentials: 'include'
    }

    // Request Header
    if (props.contentType === "FormData") {
        configuration.headers = {
            'Content-Type': 'multipart/form-data',
        }
    } else {
        configuration.headers = {
            'Content-Type': 'application/json',
        }
    }

    // Request Data
    if (props.method === "POST" || props.method === "PUT") {
        configuration.data = props.data;
    }

    // Request Params
    if (props.method === "GET") {
        configuration.params = props.params;
    }

    // Return Request
    return axios(configuration)
}

export default APIBase
