import { data } from "react-router";

export const mockPost =[
    {
        id:1,
        className: "posttitle", title:"First Letter to myself",
        date:"2021-09-01",
        example:"Dear me, I am writing this letter to myself to remind me of the importance of self-care. I know that I am always there for others, but I need to be there for myself too. I need to take care of my body, mind, and spirit. I need to make time for myself and do things that make me happy. I need to remember that I am important and that I deserve to be treated with love and respect. I need to remember that I am enough just as I am. I need to remember that I am a beautiful, strong, and powerful"
    },
    {
        id:2,
        className: "posttitle",title:"Second Letter to myself",
        date:"2021-09-02",
        example:"Dear me, I am writing this letter to myself to remind me of the importance of self-care. I know that I am always there for others, but I need to be there for myself too. I need to take care of my body, mind, and spirit. I need to make time for myself and do things that make me happy. I need to remember that I am important and that I deserve to be treated with love and respect. I need to remember that I am enough just as I am. I need to remember that I am a beautiful, strong, and powerful"
    },
    {
        id:3,
        className: "posttitle", title:"Third Letter to myself",
        date:"2021-09-03",
        example:"Dear me, I am writing this letter to myself to remind me of the importance of self-care. I know that I am always there for others, but I need to be there for myself too. I need to take care of my body, mind, and spirit. I need to make time for myself and do things that make me happy. I need to remember that I am important and that I deserve to be treated with love and respect. I need to remember that I am enough just as I am. I need to remember that I am a beautiful, strong, and powerful"
    }
]







export const fetchPost =()=>{
    return new Promise((resolve) =>{
        setTimeout(() => {resolve(mockPost)}, 1000)
    });
}