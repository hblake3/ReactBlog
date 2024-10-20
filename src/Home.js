const Home = () => {

    const handleClick = (e) => {
        console.log('Clicked on ', e);
    }

    const handleClickAgain = (name, e) =>{
        console.log(`Hello, ${name}`, e.target);
    }
    
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickAgain('Yoshi', e)}>Click Me Again</button>
        </div>
     );
}
 
export default Home;