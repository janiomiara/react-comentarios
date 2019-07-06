import React  from 'react'
import {Comment} from './Comment'



export const Comments = ({comment}) => {
    const keys = Object.keys(comment)
    return(
            <div>
                {keys.map( key => <Comment key={key}c={comment[key]}/>)} 
           </div>
    )
}
