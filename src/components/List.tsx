import { useEffect, useState } from "react";
const url = "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"

interface IUserTypes {
    id: string,
    name: string
}

export default function List () {

    const [user, setUser] = useState<IUserTypes[]>([]);

    const fetchData = () => {
        fetch(url)
          .then(response => {
            return response.json()
          })
          .then(data => {
            setUser(data)
          })
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div>
                {user.map(users => (
                    <button key={users.id}>{users.name}</button>
                ))}
            </div>
        </>
    )
}