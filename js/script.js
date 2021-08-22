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
const btnCountries = document.getElementById("btnCountries"); 
const containerCountries = document.querySelector('.checkbox_container_countries');
const arrowCountri  = document.querySelector('.arrowCountri');


const cauntrieMob  = document.querySelector('.cauntrie_mob');
const containerbAside5  = document.querySelector('.container_aside');
const filterAsideVer7  = document.querySelector('.filter_aside_ver_2');
const cauntrielLeft  = document.getElementById('cauntrie_left');



let off8 = false;
const onMenuCountries=()=>{
    if(off8 === false){
        arrowCountri.classList.remove("top");
        containerCountries.classList.remove("active-heig");
        containerCountries.classList.remove("active");

        cauntrieMob.classList.add("mob_blok_filter");
        containerbAside5.classList.add("mob_color");
        filterAsideVer7.classList.add("mob_color");
        cauntrielLeft.classList.remove("mob_active");
        off8 = true;
    }else{
        arrowCountri.classList.add("top");
        containerCountries.classList.add("active-heig");
        containerCountries.classList.add("active");

        cauntrieMob.classList.remove("mob_blok_filter");
        containerbAside5.classList.remove("mob_color");
        filterAsideVer7.classList.remove("mob_color");
        cauntrielLeft.classList.add("mob_active");
        off8 = false;
}
        
};

btnCountries.addEventListener("click",onMenuCountries);
;
const btnBrands = document.getElementById("btnBrands"); 
const containerBrands = document.querySelector('.checkbox_container_brands');
const arrowBrend  = document.querySelector('.arrowBrend');

const brendMob  = document.querySelector('.brend_mob');
const containerbAside4  = document.querySelector('.container_aside');
const filterAsideVer6  = document.querySelector('.filter_aside_ver_2');
const BrendlLeft  = document.getElementById('brend_left');

let off6 = false;
const onMenuBrands=()=>{
    if(off6 === false){
        containerBrands.classList.remove("active-heig")
        containerBrands.classList.remove("active")
        arrowBrend.classList.remove("top");

        brendMob.classList.add("mob_blok_filter");
        containerbAside4.classList.add("mob_color");
        filterAsideVer6.classList.add("mob_color");
        BrendlLeft.classList.remove("mob_active");
        off6 = true;
        
    }else{
        containerBrands.classList.add("active-heig");
        containerBrands.classList.add("active");
        arrowBrend.classList.add("top");

        brendMob.classList.remove("mob_blok_filter");
        containerbAside4.classList.remove("mob_color");
        filterAsideVer6.classList.remove("mob_color");
        BrendlLeft.classList.add("mob_active");
        off6 = false;
}
        
};

btnBrands.addEventListener("click",onMenuBrands);
;
const btnPremises = document.getElementById("btnPremises"); 
const containerPremises = document.querySelector('.checkbox_container_premises');
const arrowPremises  = document.querySelector('.arrowPremises');

const premisMob  = document.querySelector('.premis_mob');
const containerbAside2  = document.querySelector('.container_aside');
const filterAsideVer4  = document.querySelector('.filter_aside_ver_2');
const premisLeft  = document.getElementById('premis_left');


let off3 = false;
const onMenuPremises=()=>{
    if(off3 === false){
        arrowPremises.classList.remove("top");
        containerPremises.classList.remove("active")
        containerPremises.classList.remove("active-heig");

        premisMob.classList.add("mob_blok_filter");
        containerbAside2.classList.add("mob_color");
        filterAsideVer4.classList.add("mob_color");
        premisLeft.classList.remove("mob_active");
        off3 = true;
    }else{
        arrowPremises.classList.add("top");
        containerPremises.classList.add("active");
        containerPremises.classList.add("active-heig");

        premisMob.classList.remove("mob_blok_filter");
        containerbAside2.classList.remove("mob_color");
        filterAsideVer4.classList.remove("mob_color");
        premisLeft.classList.add("mob_active");
        off3 = false;
}
};

btnPremises.addEventListener("click",onMenuPremises);
;
const btnMaterial = document.getElementById("btnMaterial"); 
const containerMateriale = document.querySelector('.checkbox_container_material');
const arrowMateriale  = document.querySelector('.arrowMateriale');

const materialMob  = document.querySelector('.materiale_mob');
const containerbAside3  = document.querySelector('.container_aside');
const filterAsideVer5  = document.querySelector('.filter_aside_ver_2');
const materialLeft  = document.getElementById('material_left');

let off2 = false;
const onMenuMateriale=()=>{
    if(off2 === false){
        arrowMateriale.classList.remove("top");
        containerMateriale.classList.remove("active-heig");
        containerMateriale.classList.remove("active");

        materialMob.classList.add("mob_blok_filter");
        containerbAside3.classList.add("mob_color");
        filterAsideVer5.classList.add("mob_color");
        materialLeft.classList.remove("mob_active");
        off2 = true;
    }else{
        arrowMateriale.classList.add("top");
        containerMateriale.classList.add("active-heig");
        containerMateriale.classList.add("active");

        materialMob.classList.remove("mob_blok_filter");
        containerbAside3.classList.remove("mob_color");
        filterAsideVer5.classList.remove("mob_color");
        materialLeft.classList.add("mob_active");
        off2 = false;
}
        
};

btnMaterial.addEventListener("click",onMenuMateriale);
;
const btnPrices = document.getElementById("btnPrice"); 
const containerPrice = document.querySelector('.checkbox_container_price');
const arrowPrice  = document.querySelector('.arrowPrice');

const priceMob  = document.querySelector('.price_mob');
const containerbAside1  = document.querySelector('.container_aside');
const filterAsideVer3  = document.querySelector('.filter_aside_ver_2');
const priceLeft  = document.getElementById('price_left');


let off1 = false;
const onMenuPrice=()=>{
    if(off1 === false){
        arrowPrice.classList.remove("top");
        containerPrice.classList.remove("active-heig");
        containerPrice.classList.remove("active");

        priceMob.classList.add("mob_blok_filter");
        containerbAside1.classList.add("mob_color");
        filterAsideVer3.classList.add("mob_color");
        priceLeft.classList.remove("mob_active");

        off1 = true;
    }else{
        arrowPrice.classList.add("top");
        containerPrice.classList.add("active-heig");
        containerPrice.classList.add("active");

        containerbAside1.classList.remove("mob_color");
        priceMob.classList.remove("mob_blok_filter");
        filterAsideVer3.classList.remove("mob_color");
        priceLeft.classList.add("mob_active");
        
        off1 = false;
}
        
};

btnPrices.addEventListener("click",onMenuPrice);;

const btnColors = document.getElementById("btnColor"); 
const containerColor = document.querySelector('.checkbox_container_color');
const arrowColor  = document.querySelector('.arrowColor');
const colorMob  = document.querySelector('.color_mob');
const containerbAside  = document.querySelector('.container_aside');
const filterAsideVer2  = document.querySelector('.filter_aside_ver_2');
const Btnleft  = document.querySelector('.left_btn');


 


let off = false;
const onMenuColor=()=>{
    if(off === false){
        arrowColor.classList.remove("top");
        containerColor.classList.remove("active-heig");
        containerColor.classList.remove("active");
        containerColor.classList.add("dispaly_flex_mob");
        colorMob.classList.add("mob_blok");
        containerbAside.classList.add("mob_color");
        filterAsideVer2.classList.add("mob_color");
        Btnleft.classList.remove("mob_active");
        off = true;
    }else{
        filterAsideVer2.classList.remove("mob_color");
        containerbAside.classList.remove("mob_color");
        containerColor.classList.add("active");
        containerColor.classList.remove("dispaly_flex_mob");
        colorMob.classList.remove("mob_blok");
        arrowColor.classList.add("top");
        containerColor.classList.add("active-heig");
        Btnleft.classList.add("mob_active");
        off = false;
}
        
}

btnColors.addEventListener("click",onMenuColor);;
const btnElement = document.getElementById("btnElement"); 
const containerElement = document.querySelector('.checkbox_container_Element');
const arrowElement  = document.querySelector('.arrowElement');


const elementMob  = document.querySelector('.element_mob');
const containerbAside6  = document.querySelector('.container_aside');
const filterAsideVer8  = document.querySelector('.filter_aside_ver_2');
const elementlLeft  = document.getElementById('element_left');

let off9 = false;
const onMenuElement=()=>{
    if(off9 === false){
        arrowElement.classList.remove("top");
        containerElement.classList.remove("active-heig");
        containerElement.classList.remove("active");

        elementMob.classList.add("mob_blok_filter");
        containerbAside6.classList.add("mob_color");
        filterAsideVer8.classList.add("mob_color");
        elementlLeft.classList.remove("mob_active");
        off9 = true;
    }else{
        arrowElement.classList.add("top");
        containerElement.classList.add("active-heig");
        containerElement.classList.add("active");

        elementMob.classList.remove("mob_blok_filter");
        containerbAside6.classList.remove("mob_color");
        filterAsideVer8.classList.remove("mob_color");
        elementlLeft.classList.add("mob_active");
        off9 = false;
}
        
};

btnElement.addEventListener("click",onMenuElement);
;
const btnStyles = document.getElementById("btnStyles"); 
const containerStyles = document.querySelector('.checkbox_container_Styles');
const arrowStyles  = document.querySelector('.arrowStyles');

const styleMob  = document.querySelector('.style_mob');
const containerbAside7  = document.querySelector('.container_aside');
const filterAsideVer9  = document.querySelector('.filter_aside_ver_2');
const stylelLeft  = document.getElementById('stylelLeft');

let off12 = false;
const onMenuStyles=()=>{
    if(off12 === false){
        containerStyles.classList.remove("active-heig")
        containerStyles.classList.remove("active")
        arrowStyles.classList.remove("top");

        styleMob.classList.add("mob_blok_filter");
        containerbAside7.classList.add("mob_color");
        filterAsideVer9.classList.add("mob_color");
        stylelLeft.classList.remove("mob_active");
        off12 = true;
    }else{
        containerStyles.classList.add("active");
        arrowStyles.classList.add("top");
        containerStyles.classList.add("active-heig");

        styleMob.classList.remove("mob_blok_filter");
        containerbAside7.classList.remove("mob_color");
        filterAsideVer9.classList.remove("mob_color");
        stylelLeft.classList.add("mob_active");
       
        off12 = false;
}
        
};

btnStyles.addEventListener("click",onMenuStyles);
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











