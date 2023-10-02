import React from "react";

interface Blog{
    name: string;
    path: string;
    bgcolor: string;
}
const BlogCard = (data: Blog) => {
    const {name, bgcolor, path} = data
  return (
    <div style={{
        width:'300px',
        height:'200px',
        background:bgcolor,
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
    }}>
        <p style = {{
            color:"white",
            fontSize:"!5px"
        }}>
            {name}
        </p>
    </div>
  )
}
export default BlogCard;

