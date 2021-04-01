import {
    Link
  } from "react-router-dom";


const Card = (props) => {

    //const { id, title, published_date, author, description, img_url } = props.data;
    const { id, title, img_url } = props.data;

    return <div className="card h-100 border-0" id={"blog-" + id}>

                <div className="card-body ">

                    <div className="img-container">
                      <Link to={"/post/" + id} key={title} className="btn btn-outline-primary read-more">
                            <img src={img_url} className="img" alt="blogImage" />
                      </Link>
                    </div>

                    <h5 className="title my-2 font-weight-bold">
                       {title}
                    </h5>

                    {/*
                  <Link to={"/post/" + id} key={title} className="btn btn-outline-primary read-more">Read more</Link>

                    */}

<Link
  to={{
    pathname: "/post/" + id,
    state: props.data // your data array of objects
  }}
>
Read more
</Link>


                </div>
             
           </div>
           
    }
    
  
export default Card;

