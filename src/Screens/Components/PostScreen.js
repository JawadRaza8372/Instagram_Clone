import React from 'react'
import PostFetching from './PostFetching'
import PosterUserWthBtn from './PosterUserWthBtn'

function PostScreen({currentuser,post}) {
    return (
       
        <div className="col-8 mx-auto mt-4">
            <div className="row justify-content-center">
           <div className="col col-10 col-xs-10 col-sm-10 col-lg-8 col-md-10 col-xl-8">
               <PostFetching crntuser={currentuser} postdata={post}/>
           </div> 
           <div className="col d-none d-sm-none d-md-none d-lg-none d-xl-block col-lg-4 col-xl-4">
           <PosterUserWthBtn/>
           <p style={{color:"grey"}}>Suggestion For You</p>
           {/* <PosterUser/>
           <PosterUser/>
           <PosterUser/> */}
           </div> 

            </div>
        </div>
                  
    )
}

export default PostScreen
