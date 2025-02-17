import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';
import Data from './extra/Data';
import APIs from './extra/APIs';

import MainSection2 from '@/love/aComponent/gSidebarComponent/children/aMain2';
import { getSocket } from '@/love/iSocket/socket';
import { useSocketEvent } from '@/love/dFunction/hHook';
import { BASE_LISTED } from '@/love/iSocket/event';
import FinalRouteName from '@/love/gRoute/FinalRouteName';


const BaseListPage = ({ ReduxUltimate }) => {
	// Variables
	const socket = getSocket();
	const [realTimeList, setRealTimeList] = useState([])
	
  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.BaseListPageState),
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
		setRealTimeList([...realTimeList, {
			title: data?.aTitle,
			status: data?.aStatus === true ? 'Active' : 'Inactive',
			
			createdBy: data?.bCreatedBy,
			updatedBy: data?.bUpdatedBy,

			retrieve: `${FinalRouteName.ContentRoute.SidebarRoute.SettingRoute.BaseRoute.RetrieveRoute}/${data?._id}`,
			update: `${FinalRouteName.ContentRoute.SidebarRoute.SettingRoute.BaseRoute.UpdateRoute}/${data?._id}`,
			delete: `${FinalRouteName.ContentRoute.SidebarRoute.SettingRoute.BaseRoute.DeleteRoute}/${data?._id}`,		}])
	}, [realTimeList])

	const eventHandler = {
		[BASE_LISTED]: listHandler,
	}

	useSocketEvent(socket, eventHandler)	

  // JSX
  return (
    <React.Fragment>
			{ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Base')[0]?.access?.list ? 
				<MainSection2 Data={Data(Redux)} Redux={Redux} ReduxUltimate={ReduxUltimate} RealTimeList={realTimeList} />
				:
				"Fuck Off! You don't have access to this route."
			}
    </React.Fragment>
  )
}

export default BaseListPage