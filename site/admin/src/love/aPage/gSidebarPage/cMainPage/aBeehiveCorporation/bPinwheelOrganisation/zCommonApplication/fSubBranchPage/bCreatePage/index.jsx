import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';
import Data from './extra/Data';
import APIs from './extra/APIs';
import submitFormObject from '@/love/dFunction/cSubmitFormObject';

import MainSection2 from '@/love/aComponent/gSidebarComponent/children/aMain2';
import { useToast } from '@/components/ui/use-toast';
import { getSocket } from '@/love/iSocket/socket';


const SubBranchCreatePage = ({ ReduxUltimate }) => {
	// Variables
	const { toast } = useToast()
	const navigate = useNavigate()
	const socket = getSocket();

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.SubBranchCreatePageState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		CreateAPICall: () => APIs.CreateAPI(Redux, ReduxUltimate, navigate, toast, socket),
		SubSubBranchListAPICall: () => APIs.SubSubBranchListAPI(Redux, ReduxUltimate),
	}		

  // All Render
	// First Render
	useEffect(() => {
		APICalls.SubSubBranchListAPICall()
	}, [])
	
	// Submit Render
	useEffect(() => {
		submitFormObject(Redux, APICalls.CreateAPICall)
	}, [Redux.state.FormObject.FormError])
		
	// Extra Render
	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])

  // JSX
  return (
    <React.Fragment>
			{ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Branch Group')[0]?.access?.create ? 
				<MainSection2 Data={Data(Redux)} Redux={Redux} ReduxUltimate={ReduxUltimate} />
				:
				"Fuck Off! You don't have access to this route."
			}
    </React.Fragment>
  )
}

export default SubBranchCreatePage