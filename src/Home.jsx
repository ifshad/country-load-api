import { useEffect, useState } from "react";
import User from "./User";

const Home = () => {
    const [name, setName] = useState([]);
    // console.log(name);

    useEffect(() => {
        fetch('/public/demo.json')
        .then(res => res.json())
        .then(data => setName(data.persons))
        .catch(error => console.log(error))
    },[])
    return (
        <div className="min-h-screen flex justify-center items-center text-2xl font-semibold gap-6 text-center ">
            {
                name.map(user => <User user={user} key={user.id}></User>)
            }  
        </div>
    );
};

export default Home;