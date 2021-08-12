const radiusCheck = document.querySelector('.radius_check')
const selectCheck1 = document.querySelector('.btnCheck1')
const selectCheck2 = document.querySelector('.btnCheck2')


const btnCheck1 = document.getElementById("btnCheck1"); 
const btnCheck2 = document.getElementById("btnCheck2"); 



let on = Boolean;

const onCheckColor = () => {

    if (on === true) {
        selectCheck1.classList.add("on");
        on = false;
    } else {
        selectCheck1.classList.remove("on")
        on = true;
    }
}
let on1 = Boolean;

const onCheckColor2 = () => {

    if (on1 === true) {
        selectCheck2.classList.add("on");
        on1 = false;
    } else {
        selectCheck2.classList.remove("on")
        on1 = true;
    }
}
btnCheck1.addEventListener("click", onCheckColor);

btnCheck2.addEventListener("click", onCheckColor2);

;
const buttonCountries = document.querySelector(".container-btn-Countries"); 
const premisCountries  = document.querySelector('.premisCountries');
const btnCountries = document.getElementById("btnCountries"); 
const containerCountries = document.querySelector('.checkbox_container_countries');

let off7 = true;
const onDelCountries=()=>{
    if(off7 === false){
        premisCountries.classList.remove("active")
        off7 = true;
    }else{
        premisCountries.classList.add("active");

        off7 = false;
}
        
};
let off8 = true;
const onMenuCountries=()=>{
    if(off8 === false){
        containerCountries.classList.add("active");
        off8 = true;
    }else{
        containerCountries.classList.remove("active")
        off8 = false;
}
        
};

btnCountries.addEventListener("click",onMenuCountries);
buttonCountries.addEventListener("click",onDelCountries);
;
const buttonBrands = document.querySelector(".container-btn-brands"); 
const premisBrands  = document.querySelector('.premis-brands');
const listTitle  = document.querySelectorAll('.list');
const btnBrands = document.getElementById("btnBrands"); 
const containerBrands = document.querySelector('.checkbox_container_brands');

let off5 = true;
const onDelBrands=()=>{
  

        if(off5 === false){
            for (let i = 0; i < listTitle.length; i++) {
                let attrib = listTitle[i];
                premisBrands.classList.remove("active")
                attrib.classList.remove("list_activ")
                off5 = true;
            }
           
        }else{
            for (let i = 0; i < listTitle.length; i++) {
                let attrib = listTitle[i];
            premisBrands.classList.add("active");
            attrib.classList.add("list_activ");
            off5 = false;
        }

    }

   
        
};

let off6 = true;
const onMenuBrands=()=>{
    if(off6 === false){
        containerBrands.classList.add("active");
        off6 = true;
    }else{
        containerBrands.classList.remove("active")
        off6 = false;
}
        
};

btnBrands.addEventListener("click",onMenuBrands);
buttonBrands.addEventListener("click",onDelBrands);
;
const btnPremises = document.getElementById("btnPremises"); 
const containerPremises = document.querySelector('.checkbox_container_premises');
const containerPriceS = document.querySelector('.premis');
const buttonPremises = document.querySelector(".container-btn-shov"); 



let off3 = true;
const onMenuPremises=()=>{
    if(off3 === false){
        containerPremises.classList.add("active");
        off3 = true;
    }else{
        containerPremises.classList.remove("active")
        off3 = false;
}
};

let off4 = true;
const onDelPremises=()=>{
    if(off4 === false){
        containerPriceS.classList.remove("active")
        off4 = true;
    }else{
        containerPriceS.classList.add("active");

        off4 = false;
}
};


btnPremises.addEventListener("click",onMenuPremises);
buttonPremises.addEventListener("click",onDelPremises);
;
const btnMaterial = document.getElementById("btnMaterial"); 
const containerMateriale = document.querySelector('.checkbox_container_material');

let off2 = true;
const onMenuMateriale=()=>{
    if(off2 === false){
        containerMateriale.classList.add("active");
        off2 = true;
    }else{
        containerMateriale.classList.remove("active")
        off2 = false;
}
        
};

btnMaterial.addEventListener("click",onMenuMateriale);
;
const btnPrices = document.getElementById("btnPrice"); 
const containerPrice = document.querySelector('.checkbox_container_price');

let off1 = true;
const onMenuPrice=()=>{
    if(off1 === false){
        containerPrice.classList.add("active");
        off1 = true;
    }else{
        containerPrice.classList.remove("active")
        off1 = false;
}
        
};

btnPrices.addEventListener("click",onMenuPrice);;

const btnColors = document.getElementById("btnColor"); 
const containerColor = document.querySelector('.checkbox_container_color');






let off = true;
const onMenuColor=()=>{
    if(off === false){
        containerColor.classList.add("active");
        off = true;
    }else{
        containerColor.classList.remove("active")
        off = false;
}
        
}




btnColors.addEventListener("click",onMenuColor);;
const buttonElement = document.querySelector(".container-btn-Element"); 
const premisElement  = document.querySelector('.premisElement');
const btnElement = document.getElementById("btnElement"); 
const containerElement = document.querySelector('.checkbox_container_Element');

let off10 = true;
const onDelElement=()=>{
    if(off10 === false){
        premisElement.classList.remove("active")
        off10 = true;
    }else{
        premisElement.classList.add("active");
        off10 = false;
}
        
};
let off9 = true;
const onMenuElement=()=>{
    if(off9 === false){
        containerElement.classList.add("active");
        off9 = true;
    }else{
        containerElement.classList.remove("active")
        off9 = false;
}
        
};

btnElement.addEventListener("click",onMenuElement);
buttonElement.addEventListener("click",onDelElement);
;
const buttonStyles = document.querySelector(".container-btn-Styles"); 
const premisStyles  = document.querySelector('.premisStyles');
const btnStyles = document.getElementById("btnStyles"); 
const containerStyles = document.querySelector('.checkbox_container_Styles');

let off11 = false;
const onDelStyles=()=>{
    if(off11 === true){
        premisStyles.classList.remove("active")
        off11 = false;
    }else{
        premisStyles.classList.add("active");
        off11 = true;
}
        
};
let off12 = true;
const onMenuStyles=()=>{
    if(off12 === false){
        containerStyles.classList.add("active");
        off12 = true;
    }else{
        containerStyles.classList.remove("active")
        off12 = false;
}
        
};

btnStyles.addEventListener("click",onMenuStyles);
buttonStyles.addEventListener("click",onDelStyles);
;













