import * as React from 'react';
import { NavLink, useParams } from "react-router-dom";
import DbAPI from '../../../apis/databaseAPI';
import Fetching from "../../basics/fetching";

export default function AdminFieldOwnerDetails() {
    const { fieldOwnerId } = useParams();

    const [fieldOwner, setFieldOwner] = React.useState(null);

    async function adminGetFieldOwnerById(id){
      const result = await DbAPI.adminGetFieldOwnerById(id);
      setFieldOwner(result[0]);
      console.log(result[0])
    }
  
    React.useEffect(() => {
        adminGetFieldOwnerById(fieldOwnerId)
    }, []);
    
    if(!fieldOwner) return <Fetching/>

    return(
        <div>            
            <h1>Admin (Fieldowner): {fieldOwner.name}</h1>
            <div className="listItemSub">{fieldOwner.city}, {fieldOwner.country}</div>
            <div>{fieldOwner.farms ? fieldOwner.farms.length : 0} Farms</div>
            {fieldOwner.farms?.length > 0 && (
                <table>
                    <thead>
                        <tr className="thead">
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fieldOwner.farms.map((item, index) => (
                            <tr>
                                {console.log(item)}
                                <td key={`name${index}`} data-label="name">{item.name}</td>
                                <td key={`date${index}`} data-label="date">{item.address}</td>
                                <td key={`manage${index}`} data-label="manage">
                                    <div key={`manageButtons${index}`} className="manageButtons">
                                        <NavLink key={`infoLink${index}`} to={`farm/${item.farmID}`}><i key={`infoÌcon${index}`} className="fa-solid fa-info"></i></NavLink>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            )}
            <NavLink to="/admin/adminFieldOwners">Back</NavLink>
        </div>
    )
}