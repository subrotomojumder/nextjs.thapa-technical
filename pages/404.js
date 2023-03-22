import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";


const Error = () => {
    const router = useRouter();

    const handlePageRedirect = () => {
        router.push("/")
    }

    useEffect(()=> {
        setTimeout(()=> {router.push("/")}, 3000)
    }, [])

    return (
        <>
            <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                <div>
                    <h1>404</h1>
                    <h2>We are sorry, page not found!</h2>
                    <p>
                        The page you are looking for might have been removed had its name changed or is temporarily unavailable.
                    </p>
                    <Link href="/">
                        <button style={{ background: "gray", border: '1px green solid', padding: "5px 10px", color: "white" }} >Back to Home</button>
                    </Link>
                    <br /><br />
                    <button onClick={handlePageRedirect} style={{ background: "rgba(89, 24, 58, 1)", border: '1px green solid', padding: "5px 10px", color: "white" }}>Go Home page</button>
                </div>
            </div>
        </>
    );
};

export default Error;