import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website!', body: 'lorem ipsum...', author: 'Mario', id: 1},
        {title: 'Welcome gang!', body: 'lorem ipsum...', author: 'Luigi', id: 2},
        {title: 'Let\'s crush Bowser!', body: 'lorem ipsum...', author: 'Yoshi', id: 3}
    ]);


    return(
        <div className="home">
            <h1>Welcome!</h1>

            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <h3>Written by {blog.author}</h3>
                    <p>{blog.body}</p>
                </div>
            ))}

        </div>
    );
}

export default Home;