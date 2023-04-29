import * as React from 'react';

const list = [

  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },

  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },

  {
    title:"" ,
    url:"" ,
    author: "",
    num_comments: "",
    points: "",
    objectID: "",
  }
]

function List(){

  return(
 list.map( (item) =>(

    <li key={item.objectID}>
      <a href= {item.url}>{item.title}</a>
      <span>{item.author}</span>
      <span>{item.num_comments} </span>
     <span> {item.points}</span>
     
    </li>
  )
  )
  )

}

function Search (){

  return(
<div>
   <label htmlFor='search'>Search:</label>
    <input id="search" type="text"></input>
</div>
  )
}
function App(){
  
  return(
    <div>
      <h1> My Hacker Stories</h1>
      <Search  />
      <hr/>
       <List />
      
    </div>
  )
}

export default App;