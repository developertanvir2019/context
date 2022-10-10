import { useContext } from "react";
import { UserContext } from "./Layout";

const Home = () => {
    const data = useContext(UserContext)
    console.log(data)
    return (
        <div>
            {
                data.map(name => <h1>Home  page : {name.name}</h1>)
            }
        </div>
    );
};

export default Home;