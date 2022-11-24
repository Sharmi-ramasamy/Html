class MyButton extends HTMLButtonElement {
    constructor()
    {
        super()
        this.style.backgroundColor="pink";
        this.style.fontSize="25px";
        this.style.borderRadius="15px";
        this.style.fontFamily="monospace";
        this.style.fontStyle="italic";
        this.style.padding="45px";
        this.onmouseover = (hover)=>{
            this.style.backgroundColor = "orange";
            this.style.padding="100px"
        
        }
        
    }
}
customElements.define("my-btn",MyButton,{extends:"button"})


class MyPara extends HTMLParagraphElement {
    constructor()
    {
        super()
        this.style.backgroundColor="brown"
        this.style.fontSize="30px";
        this.style.color="white";
        this.style.fontFamily="serif";
        this.onmouseenter=(hover)=> {
            this.style.backgroundColor="pink";
            this.style.fontstyle="bold"; 
            this.textContent="Aspirians";
            this.style.color="violet"
        }
        this.onmouseout=(hover)=> {
            this.style.backgroundColor="";
            this.style.color="black";
        }
    }
}
customElements.define("new-para",MyPara,{extends: "p"})