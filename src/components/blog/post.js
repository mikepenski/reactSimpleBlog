import {
    Link,
    useParams,
  } from "react-router-dom";


import { useHistory } from "react-router-dom";

import Container from 'react-bootstrap/Container'

import blogData from '../blog/data';


const Post = ({props})=> {

    let history = useHistory();

    const { id } = useParams()

    let data = blogData[id];

    if(id <= blogData.length){

        const { postID, title, published_date, author, description, img_url } = data;

        return <div className="post">

        <div className="row">

            <div className="offset-md-1 col">

            <button onClick={history.goBack} className="btn btn-link mb-4">{"< back"}</button>

                <div className="image-container mb-6">
                  <img src={img_url} className="mb-4" />
                </div>
               
            </div>

        </div>

         <Container>

           <div className="d-flex">

            <h1>{title}</h1>

                <div className="postdate">
                    {published_date}
                </div>

           </div>

            <p>{description}</p>

             By {author}

         </Container>

   </div>

    } else {

        return <div className="post">
                    <Container>
                        No Post Found
                  </Container>
                 </div>
    }

    }
  
export default Post;
