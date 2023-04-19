import * as React from 'react';



function Practice(){

var teaNames = ["honey", "apple", "chestnut", "fennel", "sea", 5]
var myLikes = (likes) => (
    `I like ${likes} tea. `
)
var mapFunction = teaNames.map(myLikes)
    return(
        <div>
            <h1>{mapFunction[0]}</h1>
            <h1>{mapFunction[1]}</h1>
            <h1>{mapFunction[2]}</h1>
            <h1>{mapFunction[3]}</h1>
            <h1>{mapFunction[4]}</h1>
            <h1>{mapFunction[5]}</h1> 
        </div>
    )
}

export default Practice;