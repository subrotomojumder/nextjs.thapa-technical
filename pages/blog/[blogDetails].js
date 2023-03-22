import Navbar from '@/component/Navbar';
import styles from './../../styles/[blogDetails].module.css';

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const paths = data.map((curElem) => {
        return {
            params: {
                blogDetails: curElem.id.toString()
            }
        }
    });
    return {
        paths,
        fallback: false,
    };
};


export const getStaticProps = async (context) => {
    const id = context.params.blogDetails;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
};

const blogDetails = ({data}) => {
    // console.log(data);
    return (
        <>
            <Navbar></Navbar>
            <div className={styles.staticDetails}>
                <h1>Post details</h1>
                <hr />
                <p style={{ border: "1px green solid", borderRadius: "50%", padding: "5px", display: "inline" }}>{data.id}</p>
                <h2 className={styles.headingColor}>Title: {data.title}</h2>
                <h4>Description: {data.body}</h4>
            </div>
        </>)
}

export default blogDetails