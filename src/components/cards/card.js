const Card = (props) => {


    const { id, title, published_date, author, description, img_url } = props.data;

    return <div className="card h-100 border-0">
       
                <div className="card-body ">

                   <div className="img-container">
                        <img src={img_url} className="img" alt="blogImage" />
                   </div>

                    <h5 className="title my-2 font-weight-bold">
                       {title}
                    </h5>

                    {id}
                    {published_date}
                    {author}
                    {description}
                    {title}

                    <a href="/" className="btn btn-outline-primary read-more">Read more</a>

                </div>
             
           </div>
           
    }
    
  
export default Card;

