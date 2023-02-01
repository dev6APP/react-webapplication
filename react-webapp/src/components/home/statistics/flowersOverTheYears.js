import * as React from 'react'
import DbAPI from '../../../apis/databaseAPI';

import Fetching from '../../basics/fetching';

export default function FlowersOverTheYears() {
    const min = 0;
    const [max, setMax] = React.useState(0);
    const [data, setData] = React.useState([]);
    const [nrYears, setNrYears] = React.useState(3);

    async function getData(fieldOwnerId){
        let currentYear = new Date().getFullYear();
        let dataTemp = [];
        let currentHighest = 0;
        for(let i = 0; i < nrYears; i++){
            const year = currentYear - i;
            const result = await DbAPI.getDataByYear(fieldOwnerId, year);
            const newData = [year, result];
            if(result > currentHighest) currentHighest = result;
            dataTemp.push(newData);
        }
        setMax(currentHighest)
        setData(dataTemp);
    }
  
    React.useEffect(() => {
        getData(1);
    }, [nrYears]);
    
    if(!data) return <Fetching/>

    return(
        <div className='statisticBarChartContainer'>
            {data && (
                <div>
                    <h2>Flowers over the last {nrYears} {nrYears === 1 ? 'year' : 'years'}</h2>
                    <div className='changeYears'>
                        <div className='changeYearsButton' onClick={onYearChangeUp}>+</div>
                        <div className='changeYearsLabel'>{nrYears}</div>
                        <div className='changeYearsButton' onClick={onYearChangeDown}>-</div>
                    </div>
                    <div className="barChart">
                        <div className='dataPoints'>
                            {data.map((item, index) => (
                                <div>
                                    <div key={`dataPoint${index}`} className='dataPoint'>
                                        <div key={`dataPointLabel${index}`} className='dataPointLabel'>{item[0]}</div>
                                        <div key={`dataPointValue${index}`} style={{width: 'calc((100% - 80px) * ((' + item[1] + '-' + min + ') / (' + max + '-' + min + ')))'}} className={`dataPointValue ${item[1] === 0 ? "text-rev" : ""}`}>{item[1]}</div>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                        <div className='minPoint'>{min}</div>
                        <div className='maxPoint'>{max}</div>              
                    </div>
                </div>
            )}
        </div>
    )

    function onYearChangeUp(){
        setNrYears(nrYears + 1)
    }

    function onYearChangeDown(){
        if(nrYears > 1) setNrYears(nrYears - 1)
    }
}