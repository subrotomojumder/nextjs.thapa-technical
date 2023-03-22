import Navbar from "@/component/Navbar";
import Link from "next/link";


export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
};
const blog = ({ data }) => {
    // console.log(data);

    return (
        <div>
            <Navbar></Navbar>
            <h1>Blog main page</h1>
            {
                data.map(post => {
                    return (
                        <div key={post.id} className='static-site'>
                            <p style={{ border: "1px green solid", borderRadius: "50%", padding: "5px", display: "inline" }}>{post.id}</p>
                            <h2>Title: {post.title}</h2>
                            <Link href={`/blog/${post.id}`}>
                                <button  style={{ background: "rgba(188, 111, 151, 0.8)", borderRadius: "10%" , padding: "5px 10px", color: "white" }}>See Details</button>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default blog;