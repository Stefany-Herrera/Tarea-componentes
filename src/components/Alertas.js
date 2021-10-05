 export const AlertButton = ({ heigh, colorF , width, TextColor, Alert, }) =>{
     
    return (
    <div >
         <div style={{height:heigh, width:width, color:TextColor, background:colorF, Alert  }}> 
         {Alert}
      
        </div>
        <br/>
    </div>
    
    )
}