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
const arrowCountri  = document.querySelector('.arrowCountri');





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
        arrowCountri.classList.remove("top");
        containerCountries.classList.remove("active-heig");
        containerCountries.classList.remove("active")

        off8 = true;
    }else{
        arrowCountri.classList.add("top");
        containerCountries.classList.add("active-heig");
        containerCountries.classList.add("active")
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
const arrowBrend  = document.querySelector('.arrowBrend');

let off5 = false;
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

let off6 = false;
const onMenuBrands=()=>{
    if(off6 === false){
        containerBrands.classList.remove("active-heig")
        containerBrands.classList.remove("active")
        arrowBrend.classList.remove("top");
        off6 = true;
        
    }else{
        containerBrands.classList.add("active-heig");
        containerBrands.classList.add("active");
        arrowBrend.classList.add("top");

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
const arrowPremises  = document.querySelector('.arrowPremises');



let off3 = true;
const onMenuPremises=()=>{
    if(off3 === false){
        arrowPremises.classList.remove("top");
        containerPremises.classList.remove("active")
        containerPremises.classList.remove("active-heig");

        off3 = true;
    }else{
        arrowPremises.classList.add("top");
        containerPremises.classList.add("active");
        containerPremises.classList.add("active-heig");

        off3 = false;
}
};

let off4 = true;
const onDelPremises=()=>{
    if(off4 === false){
        
        containerPriceS.classList.remove("active")
        off4 = true;
    }else{
        containerPriceS.classList.add("active")
        off4 = false;
}
};


btnPremises.addEventListener("click",onMenuPremises);
buttonPremises.addEventListener("click",onDelPremises);
;
const btnMaterial = document.getElementById("btnMaterial"); 
const containerMateriale = document.querySelector('.checkbox_container_material');
const arrowMateriale  = document.querySelector('.arrowMateriale');

let off2 = true;
const onMenuMateriale=()=>{
    if(off2 === false){
        arrowMateriale.classList.remove("top");
        containerMateriale.classList.remove("active-heig");
        containerMateriale.classList.remove("active");
        off2 = true;
    }else{
        arrowMateriale.classList.add("top");
        containerMateriale.classList.add("active-heig");
        containerMateriale.classList.add("active");
        off2 = false;
}
        
};

btnMaterial.addEventListener("click",onMenuMateriale);
;
const btnPrices = document.getElementById("btnPrice"); 
const containerPrice = document.querySelector('.checkbox_container_price');
const arrowPrice  = document.querySelector('.arrowPrice');


let off1 = true;
const onMenuPrice=()=>{
    if(off1 === false){
        arrowPrice.classList.remove("top");
        containerPrice.classList.remove("active-heig");
        containerPrice.classList.remove("active");
        off1 = true;
    }else{
        arrowPrice.classList.add("top");
        containerPrice.classList.add("active-heig");
        containerPrice.classList.add("active");

        off1 = false;
}
        
};

btnPrices.addEventListener("click",onMenuPrice);;

const btnColors = document.getElementById("btnColor"); 
const containerColor = document.querySelector('.checkbox_container_color');
const arrowColor  = document.querySelector('.arrowColor');


let off = true;
const onMenuColor=()=>{
    if(off === false){
        arrowColor.classList.remove("top");
        containerColor.classList.remove("active-heig");
        containerColor.classList.remove("active");
        off = true;
    }else{
        arrowColor.classList.add("top");
        containerColor.classList.add("active-heig");
        containerColor.classList.add("active");
        off = false;
}
        
}

btnColors.addEventListener("click",onMenuColor);;
const buttonElement = document.querySelector(".container-btn-Element"); 
const premisElement  = document.querySelector('.premisElement');
const btnElement = document.getElementById("btnElement"); 
const containerElement = document.querySelector('.checkbox_container_Element');
const arrowElement  = document.querySelector('.arrowElement');




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
        arrowElement.classList.remove("top");
        containerElement.classList.remove("active-heig");
        containerElement.classList.remove("active");
        off9 = true;
    }else{
        arrowElement.classList.add("top");
        containerElement.classList.add("active-heig");
        containerElement.classList.add("active");
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
const arrowStyles  = document.querySelector('.arrowStyles');




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
        containerStyles.classList.remove("active-heig")
        containerStyles.classList.remove("active")
        arrowStyles.classList.remove("top");
        off12 = true;
    }else{
        containerStyles.classList.add("active");
        arrowStyles.classList.add("top");
        containerStyles.classList.add("active-heig");
       
        off12 = false;
}
        
};

btnStyles.addEventListener("click",onMenuStyles);
buttonStyles.addEventListener("click",onDelStyles);
;

const btnExit = document.getElementById("btnExit"); 
const btnFilter = document.getElementById("btnFilter"); 
const containerAside = document.querySelector('.title_aside');
const filterAside = document.querySelector('.filter_aside_ver_2');
const contentAside = document.querySelector('.container_aside');
const filterImg = document.querySelector('.filter_img');
const imgAside = document.querySelector('.img-aside');


const background =  document.body;



let offExit = false;

const onExit=()=>{
    setTimeout(function(){ 
        contentAside.classList.add("posit");
        filterAside.classList.add("active");
     }, 1300);
    contentAside.classList.add("bottom");
    filterAside.classList.add("bottom");
    // containerAside.classList.add("active");
    background.classList.add("back");
    imgAside.classList.add("active");
    filterImg.classList.remove("active");
   

   
}
const onFilter=()=>{
    setTimeout(function(){ 
    filterAside.classList.remove("active");
        contentAside.classList.remove("posit");

     }, 10);

    setTimeout(function(){ 
    contentAside.classList.remove("bottom");
    filterAside.classList.remove("bottom");
    // containerAside.classList.add("active");
    background.classList.remove("back");
    imgAside.classList.remove("active");
    filterImg.classList.add("active");
     }, 20);

   
}


btnFilter.addEventListener("click",onFilter);
btnExit.addEventListener("click",onExit);
// buttonStyles.addEventListener("click",onDelStyles);











