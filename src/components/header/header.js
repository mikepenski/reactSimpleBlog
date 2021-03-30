import {
    Link
  } from "react-router-dom";

const Header = () => {
    return <header>
                <div className="container">
                    <div className="logo">
                        <Link to="/">My Life </Link>
                    </div>
                   <nav id="main-menu">
                    <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                  </nav>
                </div>
           </header>
    }
  
export default Header;
