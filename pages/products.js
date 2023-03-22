import Navbar from "@/component/Navbar";
import Head from "next/head";
import Image from "next/image";
import friends from '../assets/image/friends.jpg';

const products = () => {
    return (
        <>
            <Navbar></Navbar>
            <h1>All Products container</h1>
            <Image src={friends} alt="" property height={300} width={500}></Image>
        </>
    );
};

export default products;