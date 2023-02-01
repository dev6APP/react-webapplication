import * as React from 'react'
import { useParams, NavLink } from "react-router-dom";
import DbAPI from '../../../apis/databaseAPI';

import Fetching from '../../basics/fetching';

export default function WorkerDetails(){
    const { workerId, farmId } = useParams();
    const [worker, setWorker] = React.useState(null);

    async function getWorkerById(workerId){
      const result = await DbAPI.getWorkerById(workerId);
      setWorker(result[0]);
      console.log(result[0])
    }

    React.useEffect(() => {
        console.log("workerId", workerId)
        getWorkerById(workerId);
    }, []);
    
    if(!worker) return <Fetching/>

    return (
        <div>
            <h1>Worker: {worker.name}</h1>
            <div className="listItemSub">{worker.city}, {worker.country}</div>
            <div className="subLists">
                <div className="subList">
                    <div className="subListLabel">Contact information</div>
                    <div className="subListItems">
                        <div className="subListItem">{worker.emailAddress}</div>
                        <div className="subListItem">{worker.phoneNumber}</div>
                    </div>
                </div>
                <div className="subList">
                    <div className="subListLabel">Contract information</div>
                    <div className="subListItems">
                        <div className="subListItem">Start: {worker.contractStartDate}</div>
                        <div className="subListItem">End: {worker.contractEndDate}</div>
                    </div>
                </div>
                <div className="subList">
                    <div className="subListLabel">Personal information</div>
                    <div className="subListItems">
                        <div className="subListItem">Permission: ...</div>
                        <div className="subListItem">Language: Dutch</div>
                    </div>
                </div>
            </div>
            <NavLink to={`/farms/${farmId}`}>Back</NavLink>
        </div>
    )
}