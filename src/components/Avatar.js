import images from './imagesavatar/images.jpg'
import naru from './imagesavatar/naru.jpg'
export const Avatar = ({imagen ,altura,width,}) =>{;
    
return(
        < img src = {naru}   
        style ={{
            borderRadius:imagen,
            height:altura,
            width:width,
            marginRight:'200%',
            marginLeft:'30%',
            
            
            
        }} />
        

        

    )
    
    
}