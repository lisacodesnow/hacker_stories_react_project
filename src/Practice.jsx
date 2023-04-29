import * as React from 'react';

const Lists = (props) => (
    <div>{props.title} 
     
    {props.url}
     {props.author}
     {props.num_comments}
    
</div>
)








function Practice(){
    return(
        <Lists title = "Hello"url = "http://hacker.com" author="Katherine"
        num_comments="5"/>
       
    )
}

export default Practice;