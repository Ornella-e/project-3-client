import React, {useState} from 'react'
//not needed
const Ranking = () => {
    const [ranking, setRanking]= useState(null);
    return (
    <div>
        {[...Array(5)].map((star, i) =>{
            const rankingValue= i + 1;
            return<label>
                <input type="radio" name='ranking' value={rankingValue} onClick={()=> setRanking(rankingValue)}
                />
            </label>     
        })}
        <p>The grade is: {ranking}</p>
     </div>
    )
};

export default Ranking;
