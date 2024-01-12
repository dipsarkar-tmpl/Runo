import "./Editor_pick.css"
import Cards_type2 from "../Card_type2/Cards_type2"

export default function Editor_pick() {
  return (
    <>
    <div className="editor-container">
        <div className="editor-title">
            <h2>Editor’s Pick</h2>
        </div>
        <div className="editor-cards">
            <Cards_type2/>
            
        </div>
    </div>
    </>
  )
}
