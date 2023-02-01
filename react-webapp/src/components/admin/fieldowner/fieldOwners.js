import * as React from 'react'
import { NavLink } from "react-router-dom";
import DbAPI from '../../../apis/databaseAPI';

import Fetching from '../../basics/fetching';

export default function AdminFieldOwners() {
    const [fieldOwners, setFieldOwners] = React.useState(null);

    async function adminGetFieldOwners(){
      const result = await DbAPI.adminGetFieldOwners();
      setFieldOwners(result);
      console.log(result)
    }
  
    React.useEffect(() => {
        adminGetFieldOwners();
    }, []);
    
    if(!fieldOwners) return <Fetching/>
    
    return (
        <div>
            <h1>Admin: Field owners</h1>
            <table>
                <thead>
                    <tr className="thead">
                        <th scope="col">Name</th>
                        <th scope="col">Region</th>
                        <th scope="col"># Farms</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {fieldOwners.map((item, index) => (
                        <tr key={`table${index}`}>
                            <td key={`name${index}`}>{item.name}</td>
                            <td key={`region${index}`}>{item.country}, {item.city}</td>
                            <td key={`nrFarms${index}`}>{item.farms ? item.farms.length : 0}</td>
                            <td key={`manage${index}`} data-label="manage">
                                <div className="manageButtons">
                                    <NavLink to={`/admin/adminFieldOwners/${item.fieldOwnerID}`}><i className="fa-solid fa-info"></i></NavLink>
                                    <i className="fa-solid fa-pen"></i>
                                    <i className="fa-solid fa-trash"></i>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}