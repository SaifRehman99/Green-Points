import React, {useState} from 'react'
import Moment from 'react-moment';
import SinglePoint from './SinglePoint';

const Cards = ({name, address, timestamp, index}) => {

    const [currentData, setCurrentData] = useState([]);

    const setData = (name, address, timestamp) => setCurrentData([{name, address, timestamp}]);

    return (
        <>
        <div className="d-flex mt-35 card_Layout" onClick={() => setData(name, address.text, timestamp)}>
            <div className="card__Img" />
            <div className="card__Text">

                <h2 className="h-1 d-flex mb-10"> <span className="font-w6 green mr-10"># {index}</span> {name}</h2>
                <p className="font-w1 mb-10">{address.text}</p>
                <p className="font-w1 f-15 mb-10">Next pickup on:</p>
                <p className="font-w6">    <Moment format="dddd, MMM DD  hh:mm">
                {timestamp}
            </Moment></p>

            </div>
        </div>

        {currentData?.length ? <SinglePoint currentData={currentData} setCurrentData={setCurrentData}/> : null}

        </>
    )
}

export default Cards;