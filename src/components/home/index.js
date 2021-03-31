import Headerimage from '../../assets/img/header-home.jpg';

const Home = (props) => {
    
    return <section className="home">

                <div className="hero-container">
                    <img src={Headerimage} className="hero" alt="heroImage" />
                </div>


                <div className="container py-5">
               
                    <h1>Welcome to my simple Blog</h1>

                    <a href="/blog" className="btn btn-outline-primary read-more">Read more</a>

                </div>
           </section>
    }
  
export default Home;
