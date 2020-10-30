import React, {useState} from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const [users, setUsers] = useState([
        {
            name: 'Elon Musk',
            age: '49',
            imgUrl: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg'
        },
        {
            name: 'Grimes',
            age: '32',
            imgUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/02/24/14/grimes.jpg?width=990'
        }
    ]);

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
