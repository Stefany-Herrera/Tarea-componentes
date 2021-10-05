 export const AlertButton = ({ heigh, colorF , width, TextColor, Alert, icono}) =>{
     
    return (
    <div >
         <div style={{height:heigh, width:width, color:TextColor, background:colorF, icon: icono }}> 
         {Alert}
      
        </div>
        <br/>
    </div>
    
    )
}