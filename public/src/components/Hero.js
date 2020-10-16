import App from "../App.js"


const Hero = ()=>{
    return `
    
        <section class="Hero" style="
                width : 100vw;
                height : 80vh;
                padding : 0 10%;
                display : flex;
                align-items : center;
                justify-content : space-between;
                background-image : url(https://picsum.photos/seed/${Hero.state.imgNo}/900);
                background-size: cover;
                background-position : center;
        ">
        
        <span class="material-icons" style="
            font-size :  4rem;
            cursor : pointer;
            color : cyan;
            text-shadow : 5px 5px 7px rgba(0,0,0,0.300);
        " onclick="prev()">
        navigate_before</span>

        <div>
            <h1 onclick="showModal()" style="cursor:pointer;">${Hero.state.text}</h1>
            ${Hero.state.showModal === true ? (
                
                "<input placeholder='masukan judul' onchange='ubahText(event)' />"
                
            ) : "" }
            
        </div>

        <span class="material-icons"  style="
            font-size : 4rem;
            cursor : pointer;
            color : cyan;
            text-shadow : 5px 5px 7px rgba(0,0,0,0.300);
        " onclick="next()">
        navigate_next</span>
        
        
        
        </section>
    
    
    
    `
}

Hero.state = {
    text : "W A H Y U D I",
    setText : (event)=>{
        Hero.state.text = event
        App()
    },


    imgNo : 140,
    imgPrev : ()=>{
        Hero.state.imgNo -=1
        App()
    },

    imgNext : ()=>{
        Hero.state.imgNo +=1
        App()
    },
    // merubah fungsi dengan !
    showModal : false,
    setShowModal : ()=>{
        Hero.state.showModal = !Hero.state.showModal
        App()
    }

}

window.prev = ()=>{
    Hero.state.imgPrev()
    // console.log(Hero.state.imgNo)
}

window.next = ()=>{
    Hero.state.imgNext()
    // console.log(Hero.state.imgNo)
}

window.showModal = ()=>{
    Hero.state.setShowModal()
    console.log(Hero.state.showModal)
}

window.ubahText = (event)=>{
    Hero.state.setText(event.target.value)
}

export default Hero