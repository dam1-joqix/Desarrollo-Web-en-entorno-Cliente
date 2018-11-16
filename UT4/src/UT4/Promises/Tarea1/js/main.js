'use strict';
fetch('https://jsonplaceholder.typicode.com/posts').
  then(result=>result.json()).
  then((json)=>{

  }).
  catch(error=>{console.log("---Hubo un error---");console.error(error.message);});
