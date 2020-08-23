let switchButton = document.querySelector('.button');
let side = "flex-end";

switchButton.addEventListener('click', () => switchChange());


function switchChange(){
    let switchBox = document.querySelector('.switch_button');
    let BasicHeader = document.querySelector('.basic-price');
    let ProfessionalHeader = document.querySelector('.professional-price');
    let MasterHeader = document.querySelector('.master-price');
    side == "flex-end" ? Annually(BasicHeader,ProfessionalHeader,MasterHeader,switchBox) : Monthly(BasicHeader,ProfessionalHeader,MasterHeader,switchBox);
}

function Annually(B,P,M,S){
    side = "flex-start";   
    S.style.justifyContent = side;
    let price = ["&dollar;199.99","&dollar;249.99","&dollar;399.99"];
    SetPrice(B,P,M,price);
}
function Monthly(B,P,M,S){
    side = "flex-end";   
    S.style.justifyContent = side;
    let price = ["&dollar;19.99","&dollar;24.99","&dollar;39.99"];
    SetPrice(B,P,M,price);
}
function SetPrice(B,P,M,PR){
    B.innerHTML = PR[0]
    P.innerHTML = PR[1]
    M.innerHTML = PR[2]
}