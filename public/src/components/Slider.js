import App from "../App.js"
import Card from "./Card.js"


const Slider = ()=>{
    return`
        
    <section class="slider">

        <div class="cardContainer">
            
            ${Card("https://picsum.photos/seed/100/200","Card 1","Ini Adalah Card Pertama")}

            ${Card("https://picsum.photos/seed/200/200","Card 2","Ini Adalah Card Kedua")}

            ${Card("https://picsum.photos/seed/300/200","Card 3","Ini Adalah Card Ketiga")}

            ${Card("https://picsum.photos/seed/400/200","Card 4","Ini Adalah Card Keempat")}

            ${Card("https://picsum.photos/seed/500/200","Card 5","Ini Adalah Card Kelima")}

            ${Card("https://picsum.photos/seed/600/200","Card 6","Ini Adalah Card Keenam")}

            ${Card("https://picsum.photos/seed/700/200","Card 7","Ini Adalah Card Ketujuh")}

            ${Card("https://picsum.photos/seed/800/200","Card 8","Ini Adalah Card Kedelapan")}

            ${Card("https://picsum.photos/seed/900/200","Card 9","Ini Adalah Card Kesembilan")}
        
        </div>
    
    
    </section>
    
    
    
    
    
    `

}




export default Slider