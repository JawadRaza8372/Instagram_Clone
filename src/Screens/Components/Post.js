import React,{useState} from 'react'
import Avatar from "@material-ui/core/Avatar";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@material-ui/icons/BookmarkOutlined';
import { makeStyles } from '@material-ui/core/styles';
import ModelP from "./ModelP"
import Notification from "./Notification"
function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
function Post({avat,postimg,caption,username}) {
    const [likeed, setlikeed] = useState("");
    const [saveed, setsaveed] = useState("");
    const [open, setOpen] =useState(false);
    const classes=useStyles();
    const [modalStyle]=useState(getModalStyle);
    return (
        <div style={{maxWidth:"500px",backgroundColor:"white",border:"1px solid lightgrey",marginBottom:"45px"}}>
        <div style={{display:"flex",alignItems:"center",padding:"20px"}}>
        <Avatar style={{marginRight:"10px"}}  src={`${avat}`} alt={`${username}`}/>
            <h3>{username}</h3></div>
          <a  onDoubleClick={()=>{setlikeed("liked")}}>  <img style={{width:"100%",objectFit:"contain",borderBottom:"1px solid lightgrey",borderTop:"1px solid lightgrey"}} src={`${postimg}`} alt="pics"/>
          </a>

          <div className="row">
      <div className="col col-8">
      <div style={{display:"flex",flexDirection:"row",float:"left"}}>
      {(likeed==="liked")?   <a  onClick={()=>{setlikeed("")}}><FavoriteIcon style={{color:"red",fontSize:"30"}}/></a>: <a  onClick={()=>{setlikeed("liked")}}><FavoriteBorderIcon style={{fontSize:"30"}}/></a>}
<a  onClick={()=>{setOpen(true);console.log("clicked"+open)}}>
<ChatOutlinedIcon style={{fontSize:"30"}}/></a></div></div>
      <div className="col col-4">
      <div style={{display:"flex",flexDirection:"row",float:"right"}}>
     { (saveed==="saved")?<a  onClick={()=>{setsaveed("")}}><BookmarkOutlinedIcon style={{color:"grey",fontSize:"30"}}/></a>: <a  onClick={()=>{setsaveed("saved")}}><BookmarkBorderOutlinedIcon style={{fontSize:"30"}}/></a>
}
      
        </div></div></div>
        <div className="row">
      <div style={{display:"flex",flexDirection:"row",float:"left"}}>
      <p style={{fontSize:"12px"}}>739 likes</p>
      </div>
      </div>   
      <div className="row">
      <div style={{display:"flex",flexDirection:"row",float:"left"}}>
      <p><strong>{username}:</strong> {caption}</p>
      </div></div>
      <ModelP openModel={open} closeModel={()=>{setOpen(false)}} >
<Notification/>
<div style={{flexDirection:"row"}}>
    <input style={{width:'80%',marginRight:"10px"}}/>
    <a onClick={()=>{console.log("commented")}} className="btn btn-outline-success">Post</a>
    </div>
    </ModelP>
          
         
    


        </div>
    )
}

export default Post


