import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <nav>
            <ul className='nav-container'>
              <Link href={`/`}><li>Home</li></Link>
              <Link href={`/blog`}><li>Blog</li></Link>
              <Link href={`/contact`}><li>Contact</li></Link>
              <Link href={`/products`}><li>Products</li></Link>
              <Link href={`/`}><li>Home</li></Link>
              <Link href={`/`}><li>Home</li></Link>
              <Link href={`/`}><li>Home</li></Link>
            </ul>
          </nav>
        </>
    );
};

export default Navbar;