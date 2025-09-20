import { use } from "react"

export default function Friends({ friendsPromise }) {

    const friend = use(friendsPromise);

    console.log(friend);

    return (

        <div className="card2">
            <h1>Friends: {friend.length}</h1>
        </div>
    )
}