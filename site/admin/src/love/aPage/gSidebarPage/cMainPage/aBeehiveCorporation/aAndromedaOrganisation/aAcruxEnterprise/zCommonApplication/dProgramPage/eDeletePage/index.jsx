import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';
import Data from './extra/Data';
import APIs from './extra/APIs';
import { useNavigate, useParams } from 'react-router-dom';
import MainSection2 from '@/love/aComponent/gSidebarComponent/children/aMain2';
import { useToast } from '@/components/ui/use-toast';
import { getSocket } from '@/love/iSocket/socket';


const ProgramDeletePage = ({ ReduxUltimate }) => {
	// Variables
	const { toast } = useToast()
	const { id } = useParams();
	const navigate = useNavigate()
	const socket = getSocket();

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.ProgramDeletePageState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		RetrieveAPICall: () => APIs.RetrieveAPI(Redux, ReduxUltimate, id),
		DeleteAPICall: () => APIs.DeleteAPI(Redux, ReduxUltimate, id, navigate, toast, socket),
	}		

  // All Render
	// First Render
	useEffect(() => {
		APICalls.RetrieveAPICall()
	}, [])

	// Extra Render
	// useEffect(() => {
	// 	console.log(Redux.state)
	// }, [Redux.state])

  // JSX
  return (
    <React.Fragment>
			{ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Program')[0]?.access?.delete ? 
				<MainSection2 Data={Data(Redux, id)} Redux={Redux} ReduxUltimate={ReduxUltimate} DeleteAPI={APICalls.DeleteAPICall} />
				:
				"Fuck Off! You don't have access to this route."
			}
    </React.Fragment>
  )
}

export default ProgramDeletePage