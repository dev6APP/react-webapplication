import * as React from 'react'
import DbAPI from '../../apis/databaseAPI';
import App from '../../App';

import Fetching from '../basics/fetching';

export default function Account() {
    const [account, setAccount] = React.useState(null);

    async function getAccount(accountId){
      const result = await DbAPI.getAccount(accountId);
      setAccount(result[0]);
      console.log(result[0])
    }
  
    React.useEffect(() => {
        getAccount(1);
    }, []);
    
    if(!account) return <Fetching/>

    if(account.workerID){
        return (
            <div>
                <h1>Worker: {account.name}</h1>
                <div className="listItemSub">{account.city}, {account.country}</div>
                <div className='subLists'>
                    <div className='subList'>
                        <div className='subListLabel'>Personal information</div>
                        <div className='subListItems'>
                            <div>{account.language.name}</div>
                            <div>{account.permission.name}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    if(account.fieldOwnerID){
        return(
            <div>
                <h1>Field owner: {account.name}</h1>
                <div className="listItemSub">{account.city}, {account.country}</div>
                <div className='subLists'>
                    <div className='subList'>
                        <div className='subListLabel'>Personal information</div>
                        <div className='subListItems'>
                            <div>{account.language.name}</div>
                            <div>{account.started}</div>
                        </div>
                    </div>
                    {account.fields > 0}
                    <div className='subList'>
                        <div className='subListLabel'>Farms</div>
                        <div className='subListItems'>
                            {account.farms.map((farm, index) => (
                                <div key={`FarmName${index}`}>{farm.name}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <button onClick={App.logOut}>Log out</button>
            </div>
        )
    }
}