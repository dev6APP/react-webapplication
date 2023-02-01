import * as React from 'react'
import DbAPI from '../../../apis/databaseAPI';

import Fetching from '../../basics/fetching';

export default function FlowersThisYear() {
    const [amount, setAmount] = React.useState(0);
    const [year, setYear] = React.useState(2018);

    async function getAmount(fieldOwnerId){
        const currentYear = new Date().getFullYear();
        const result = await DbAPI.getDataByYear(fieldOwnerId, currentYear);
        
        setAmount(result);
        setYear(currentYear)
    }
  
    React.useEffect(() => {
        getAmount(1);
    }, []);
    
    if(!amount) return <Fetching/>

    return(
        <>
            {amount && (
                <div>
                        <h2>Flowers this years ({year})</h2>
                        <div className='oneStatistic'>
                            {amount} {amount === 1 ? 'flower' : 'flowers'}
                        </div>
                </div>
            )}
        </>
    )
}