import * as React from 'react'
import { NavLink, useParams } from "react-router-dom";
import DbAPI from '../../apis/databaseAPI';

import Fetching from '../basics/fetching';

export default function FarmDetails() {
    const { farmId } = useParams();
    const [workers, setWorkers] = React.useState(null);
    const [farm, setFarm] = React.useState(null);

    async function getFarmById(farmId){
      const result = await DbAPI.getFarmById(farmId);
      setFarm(result[0]);
    }

    async function getWorkersByFarmId(farmId){
      const result = await DbAPI.getWorkersByFarmId(farmId);
      setWorkers(result);
      console.log(result)
    }
  
    React.useEffect(() => {
        getFarmById(farmId)
        getWorkersByFarmId(farmId);
    }, []);
    
    if(!farm) return <Fetching/>

    return(
        <div>
            <h1>Farm: {farm.name}</h1>
            <div className="listItemSub">{farm.address}</div>
            <div>{farm.fields ? farm.fields.length : 0} Fields</div>
            {farm.fields.length > 0 && (
                <table>
                    <thead>
                        <tr className="thead">
                            <th scope="col">Name</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {farm.fields.map((field, index) => (
                            <tr>
                                <td key={`name${index}`} data-label="name">{field.name}</td>
                                <td key={`manage${index}`} data-label="manage">
                                    <div key={`manageButtons${index}`} className="manageButtons">
                                        <i key={`penIcon${index}`} className="fa-solid fa-pen"></i>
                                        <i key={`trashIcon${index}`} className="fa-solid fa-trash"></i>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            )}
            <div>{workers ? workers.length : 0} Workers</div>
            {workers && (
                <table>
                    <thead>
                        <tr className="thead">
                            <th scope="col">Name</th>
                            <th scope="col">Region</th>
                            <th scope="col">Phone number</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {workers.map((item, index) => (
                            <tr>
                                {console.log(item)}
                                <td data-label="name">{item.worker.name}</td>
                                <td data-label="region">{item.worker.city}, {item.worker.country}</td>
                                <td data-table="phone">{item.worker.phoneNumber}</td>
                                <td data-label="manage">
                                    <div className="manageButtons">
                                        <NavLink to={`worker/${item.worker.workerID}`}><i className="fa-solid fa-info"></i></NavLink>
                                        <i className="fa-solid fa-pen"></i>
                                        <i className="fa-solid fa-trash"></i>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <NavLink to="/farms/">Back</NavLink>
        </div>
    )
}