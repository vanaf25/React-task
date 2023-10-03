const url="https://jsonplaceholder.typicode.com/posts/"
export const getPosts=async (term:string)=>{

   return  await fetch(`${url}${term ? `?title=${term}`:""}`)
};
export const getPost=async (id:number)=>await fetch(`${url}/${id}`);