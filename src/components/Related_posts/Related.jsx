import Cards_type2 from "../Card_type2/Cards_type2"
import "./Related.css"


export default function Related() {
  return (
    <>
    <div className="related-post-container">
        <div className="related-contaier">
        <div className="related-title">
            <h3 className="related-title-h3">Related Posts</h3>
        </div>
        <div className="related-cards">
           <Cards_type2/>
        </div>
        </div>
        

    </div>
    </>
  )
}
