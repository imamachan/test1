document.addEventListener("DOMContentLoaded",function(){
index2();

document.getElementById("btnsubmit2").addEventListener("click",function(){
    btnSubmit2()

})

document.getElementById("btnsubmit").addEventListener("click",function(){
    btnSubmit3()
})

})



function btnSubmit2(){
    console.log("yaho");
    location.href="index.html";
}

function btnSubmit3(){
    location.href="index3.html"
}


function index2(){

    console.log("index2!");
    const value = sessionStorage.getItem("value1");    
    console.log("受け取った値：",value);
    const lastName = document.getElementById("lastName2");
    console.log(lastName);
    lastName.value = value;
    console.log("ok",lastName);

    const valueFirstName = sessionStorage.getItem("value2");    
    const firstName = document.getElementById("firstName2");
    firstName.value = valueFirstName;

    const valueAdress1 = sessionStorage.getItem("value3");    
    const adress1 = document.getElementById("adress1-2");
    adress1.value = valueAdress1;

    const valueAdress2 = sessionStorage.getItem("value4");    
    const adress2 = document.getElementById("adress2-2");
    adress2.value = valueAdress2;

    const valueTxtArea = sessionStorage.getItem("value5");    
    const TxtArea = document.getElementById("txt-area2");
    TxtArea.value = valueTxtArea;

    const valueTxtArea2 = sessionStorage.getItem("value6");    
    const TxtArea2 = document.getElementById("txt-area2-2");
    TxtArea2.value = valueTxtArea2;


    const valuegender2 = sessionStorage.getItem("value7");
     
    if(valuegender2 == "woman"){
        document.getElementById("radio-1").checked = true;
    }else{
        document.getElementById("radio-2").checked = true;
    };

    const valuebtn = sessionStorage.getItem("value10");
     
    if(valuebtn == "yes"){
        document.getElementById("allergie1").checked = true;
            let ai = document.getElementById("detail")
            let ii = document.getElementById("txt-area2")
            ai.classList.add("visibile")
            ai.classList.remove("invisibility")
            ii.classList.add("visibile")
            ii.classList.remove("invisibility")

    }else{
        document.getElementById("allergie2").checked = true;
    };



    var inner = [
        {cd:"", label:"都道府県を選択"},
    {cd:"1", label:"北海道"},
    {cd:"2", label:"青森県"},
    {cd:"3", label:"岩手県"},
    {cd:"4", label:"宮城県"},
    {cd:"5", label:"秋田県"},
    {cd:"6", label:"山形県"},
    {cd:"7", label:"福島県"},
    {cd:"8", label:"茨城県"},
    {cd:"9", label:"栃木県"},
    {cd:"10", label:"群馬県"},
    {cd:"11", label:"埼玉県"},
    {cd:"12", label:"千葉県"},
    {cd:"13", label:"東京都"},
    {cd:"14", label:"神奈川県"},
    {cd:"15", label:"新潟県"},
    {cd:"16", label:"富山県"},
    {cd:"17", label:"石川県"},
    {cd:"18", label:"福井県"},
    {cd:"19", label:"山梨県"},
    {cd:"20", label:"長野県"},
    {cd:"21", label:"岐阜県"},
    {cd:"22", label:"静岡県"},
    {cd:"23", label:"愛知県"},
    {cd:"24", label:"三重県"},
    {cd:"25", label:"滋賀県"},
    {cd:"26", label:"京都府"},
    {cd:"27", label:"大阪府"},
    {cd:"28", label:"兵庫県"},
    {cd:"29", label:"奈良県"},
    {cd:"30", label:"和歌山県"},
    {cd:"31", label:"鳥取県"},
    {cd:"32", label:"島根県"},
    {cd:"33", label:"岡山県"},
    {cd:"34", label:"広島県"},
    {cd:"35", label:"山口県"},
    {cd:"36", label:"徳島県"},
    {cd:"37", label:"香川県"},
    {cd:"38", label:"愛媛県"},
    {cd:"39", label:"高知県"},
    {cd:"40", label:"福岡県"},
    {cd:"41", label:"佐賀県"},
    {cd:"42", label:"長崎県"},
    {cd:"43", label:"熊本県"},
    {cd:"44", label:"大分県"},
    {cd:"45", label:"宮崎県"},
    {cd:"46", label:"鹿児島県"},
    {cd:"47", label:"沖縄県"}

    ];

    let i = sessionStorage.getItem("value8");
    let op = document.createElement('option');
        op.value = inner[i].cd;
        op.text = inner[i].label;
        document.getElementById("pref2").appendChild(op);

    

    

}
 

    // function btnSubmit2(){
    //     console.log("yaho");
    //     location.href="index.html";
    // }

