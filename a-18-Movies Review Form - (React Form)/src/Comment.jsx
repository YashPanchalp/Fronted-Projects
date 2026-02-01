import { useState } from "react"
import CommentForm from "./CommentForm"

export default function Comment({comment}) {
    //STATE VAR TO HOLD COMMENT DATA
    let [comments, setComments] = useState([
        {
            username:'@exampleuser',
            remarks:'Good Movie to watch',
            rating:4
        }
    ])

    //takes the new comment from App.jsx and adds it to the comments state var
    let addnewComment = (comment_given) => {
        setComments((currentComments) => {
            return [
                ...currentComments,
                comment_given
            ]
       })
    }
    return (
        <>
        <h2>All comments</h2>   

        {comments.map((comment, index) => {
                return (
                    <div key={index} style={{border:'1px solid black', marginBottom:'10px', padding:'10px'}}>
                        <h4>{comment.username}</h4>
                        <p>{comment.remarks}</p>
                        <p>Rating: {comment.rating} / 5</p>
                    </div> 
                )
            }
            )
        }    
        <CommentForm addnewComment={addnewComment} />
        </>
    )
}