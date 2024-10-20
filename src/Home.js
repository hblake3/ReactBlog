import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(36);

    const handleClick = (e) => {
        setName(name === 'Mario' ? 'Luigi' : 'Mario');
        setAge(name ==='Mario' ? 24 : 26);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;