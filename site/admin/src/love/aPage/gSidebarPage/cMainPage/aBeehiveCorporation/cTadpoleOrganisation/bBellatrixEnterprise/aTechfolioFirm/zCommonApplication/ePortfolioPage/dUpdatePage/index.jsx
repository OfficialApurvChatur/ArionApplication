import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';
import Data from './extra/Data';
import APIs from './extra/APIs';
import { useNavigate, useParams } from 'react-router-dom';
import submitFormObject from '@/love/dFunction/cSubmitFormObject';
import MainSection2 from '@/love/aComponent/gSidebarComponent/children/aMain2';
import { useToast } from '@/components/ui/use-toast';


const PortfolioUpdatePage = ({ ReduxUltimate }) => {
	// Variables
	const { toast } = useToast()
	const { id } = useParams();
	const navigate = useNavigate()

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.PortfolioUpdatePageState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		RetrieveAPICall: () => APIs.RetrieveAPI(Redux, ReduxUltimate, id),
		UpdateAPICall: () => APIs.UpdateAPI(Redux, ReduxUltimate, id, navigate, toast),
		PortfolioCardListAPICall: () => APIs.PortfolioCardListAPI(Redux, ReduxUltimate),
	}		

  // All Render
	// First Render
	useEffect(() => {
		APICalls.PortfolioCardListAPICall()
	}, [])

	// Second Render
	useEffect(() => {
		Redux.state.RequiredObject?.PortfolioCardList && APICalls.RetrieveAPICall()
	}, [Redux.state.RequiredObject?.PortfolioCardList])

	// Submit Render
	useEffect(() => {
		submitFormObject(Redux, APICalls.UpdateAPICall)
	}, [Redux.state.FormObject.FormError])
	
	// Extra Render
	// useEffect(() => {
	// 	console.log(Redux.state)
	// }, [Redux.state])

  // JSX
  return (
    <React.Fragment>
			{ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Portfolio')[0]?.access?.update ? 
				<MainSection2 Data={Data(Redux, id)} Redux={Redux} ReduxUltimate={ReduxUltimate} />
				:
				"Fuck Off! You don't have access to this route."
			}
    </React.Fragment>
  )
}

export default PortfolioUpdatePage