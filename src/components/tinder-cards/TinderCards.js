import React, {useState, useEffect} from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import axios from '../../utils/axios';

function TinderCards() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/tinder/cards');
            setUsers(req.data);
        };
        fetchData();
    }, []);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: ", nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = name => {
        console.log(name, " left the screen");
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {
                    users.map((user => (
                        <TinderCard
                            className="swipe"
                            key={user.name}
                            preventSwipe={["up", "down"]}
                            onSwipe={dir => swiped(dir, user.name)}
                            onCardLeftScreen={() => outOfFrame(user.name)}
                        >
                            <div
                                style={{backgroundImage: `url(${user.imgUrl})`}}
                                className="card"
                            >
                                <h1>{user.age}</h1>
                                <h3>{user.name}</h3>
                            </div>
                        </TinderCard>
                    )))
                }
            </div>
        </div>
    )
}

export default TinderCards
