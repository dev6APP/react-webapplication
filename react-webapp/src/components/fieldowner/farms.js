import * as React from 'react'
import { NavLink } from "react-router-dom";
import DbAPI from '../../apis/databaseAPI';

import Fetching from '../basics/fetching';

export default function Farms() {
    const [farms, setFarms] = React.useState(null);

    async function getFarmsByFieldOwner(fieldOwnerId){
      const result = await DbAPI.farmsByFieldOwnerId(fieldOwnerId);
      setFarms(result);
      console.log(result)
    }
  
    React.useEffect(() => {
        getFarmsByFieldOwner(1);
    }, []);
    
    if(!farms) return <Fetching/>

    return (
        <div>
            <h1>Your farms</h1>
            {farms?.length > 0 && (
                <table>
                    <thead>
                        <tr className="thead">
                            <th scope="col">Name</th>
                            <th scope="col">Adress</th>
                            <th scope="col"># Fields</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {farms?.map((item, index) => (
                            <tr>
                                <td key={`name${index}`} data-label="name">{item.name}</td>
                                <td key={`adress${index}`} data-label="adress">{item.address}</td>
                                <td key={`nrFields${index}`} data-label="nrFields">{item.fields?.length}</td>
                                <td key={`manage${index}`} data-label="manage">
                                    <div key={`manageButtonsIcon${index}`} className="manageButtons">
                                        <NavLink key={`manageInfoIconLink${index}`} to={`/farms/${item.farmID}`}><i key={`manageIcon${index}Info`} className="fa-solid fa-info"></i></NavLink>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}