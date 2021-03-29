import Card from '../cards/card.js';
import Col from '../bootstrap/col.js';

const Blog = (props) => {
    
    return <section className="blog">
                <div className="container">
                    <div className="row">

                        {props.data.map((item, index) => {
                            return  <Col key={index + "col"} class="col-12 col-md-4 mb-4 px-md-4">
                                <Card key={index} data={item} />
                            </Col>
                        })}

                    </div>
                </div>
           </section>
    }
  
export default Blog;
