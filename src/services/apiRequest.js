import axios from "axios"

const URL = 'https://basic-blog.teamrabbil.com/api'
// const URL = 'https://basic-blog.teamrabbil.com/api/post-newest'
// const URL = 'https://basic-blog.teamrabbil.com/api/post-list/4'
// const URL = 'https://basic-blog.teamrabbil.com/api/post-details/4'

export async function PostCategories(){
    
    try{
        const response = await axios.get(URL+'/post-categories')
        if(response.status === 200){
            return response.data
        }
    }catch(error){
        return []
    }

}
export async function BlogDeta(id){
    
    try{
        const response = await axios.get(URL+'/post-details/'+id)
        if(response.status === 200){
            return response.data['postDetails']
        }
    }catch(error){
        return []
    }

}
export async function PostNewest(){
    
    try{
        const response = await axios.get(URL+'/post-newest')
        if(response.status === 200){
            return response.data
        }
    }catch(error){
        return []
    }

}
export async function PostList(id){
    
    try{
        const response = await axios.get(URL+'/post-list/'+id)
        if(response.status === 200){
            return response.data
        }
    }catch(error){
        return []
    }

}


