import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';
import Data from './extra/Data';
import APIs from './extra/APIs';

import MainSection2 from '@/love/aComponent/gSidebarComponent/children/aMain2';
import { getSocket } from '@/love/iSocket/socket';
import { useSocketEvent } from '@/love/dFunction/hHook';
import { HERO_LISTED } from '@/love/iSocket/event';


const HeroListPage = ({ ReduxUltimate }) => {
	// Variables
	const socket = getSocket();
	const [realTimeList, setRealTimeList] = useState([])

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.HeroListPageState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		ListAPICall: () => APIs.ListAPI(Redux, ReduxUltimate)
	}		

  // All Render
	// First Render
	useEffect(() => {
		APICalls.ListAPICall()
	}, [])

	// Extra Render
	// useEffect(() => {
	// 	console.log(Redux.state)
	// }, [Redux.state])

	// Listening Socket Events
	const listHandler = useCallback(data => {
		// console.log("HERO_LISTED", data)
		setRealTimeList([...realTimeList, data])
	}, [realTimeList])

	const eventHandler = {
		[HERO_LISTED]: listHandler,
	}

	useSocketEvent(socket, eventHandler)

  // JSX
  return (
    <React.Fragment>
			{/* {realTimeList?.map((each, index) => {
				return (
					<div className="mb-2">
						<p key={index}>{each.aTitle}</p>
					</div>
				)
			})} */}
			{ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Hero')[0]?.access?.list ? 
				<MainSection2 Data={Data(Redux)} Redux={Redux} ReduxUltimate={ReduxUltimate} />
				:
				"Fuck Off! You don't have access to this route."
			}
    </React.Fragment>
  )
}

export default HeroListPage