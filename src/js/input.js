document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("lastName").addEventListener("change", function () {
        mouseMove()
    })

    document.getElementById("firstName").addEventListener("change", function () {
        mouseMoveFirstName()
    })

    document.getElementById("allergie1").addEventListener("click", function () {
        buttonClick(true)
    })
    document.getElementById("allergie2").addEventListener("click", function () {
        buttonClick(false)
    })

    const radioBtnGender = document.getElementsByName('gender');
    for (const taget of radioBtnGender) {
        taget.addEventListener("change", function () {
            radioBtnChange()

        })
    }

    window.addEventListener('load', function () {
        todouhuken()

    })
    document.getElementById("adress1").addEventListener("change", function () {
        changeAdress1()
    })

    document.getElementById("adress2").addEventListener("change", function () {
        changeAdress2()
    })

    document.getElementById("btnsubmit").addEventListener("click", function () {
        btnSubmit()
    })

    document.getElementById("form").addEventListener("input", function () {
        upDate()
    })

    document.getElementById("btnsubmit").addEventListener("change", function () {
        upDate()
    })

    document.getElementById("btnsubmit").addEventListener("click", function () {
        cookie()
    })

    document.getElementById("btnsubmit").addEventListener("click", function () {
        pageChange()
    })

    index2();



})

function mouseMove() {
    const lastName = document.getElementById("lastName");

    const errMsgName = document.getElementById("err-msg-name");


    if (lastName.value === "") {
        errMsgName.textContent = "姓を入力してください";

    } else {
        errMsgName.textContent = "";
    }
}

function mouseMoveFirstName() {
    const firstName = document.getElementById("firstName");
    const errMsgName = document.getElementById("err-msg-name");



    if (firstName.value === "") {
        errMsgName.textContent = "名を入力してください";

    } else {
        errMsgName.textContent = "";
    }
}

function radioBtnChange() {
    const gender = document.getElementsByName("gender").length;
    const errMsgGender = document.getElementById("err-msg-gender");

    if (gender === 0) {
    } else {
        errMsgGender.textContent = "選択済み";
    }
}

function todouhuken() {
    var inner = [
        { cd: "", label: "都道府県を選択" },
        { cd: "1", label: "北海道" },
        { cd: "2", label: "青森県" },
        { cd: "3", label: "岩手県" },
        { cd: "4", label: "宮城県" },
        { cd: "5", label: "秋田県" },
        { cd: "6", label: "山形県" },
        { cd: "7", label: "福島県" },
        { cd: "8", label: "茨城県" },
        { cd: "9", label: "栃木県" },
        { cd: "10", label: "群馬県" },
        { cd: "11", label: "埼玉県" },
        { cd: "12", label: "千葉県" },
        { cd: "13", label: "東京都" },
        { cd: "14", label: "神奈川県" },
        { cd: "15", label: "新潟県" },
        { cd: "16", label: "富山県" },
        { cd: "17", label: "石川県" },
        { cd: "18", label: "福井県" },
        { cd: "19", label: "山梨県" },
        { cd: "20", label: "長野県" },
        { cd: "21", label: "岐阜県" },
        { cd: "22", label: "静岡県" },
        { cd: "23", label: "愛知県" },
        { cd: "24", label: "三重県" },
        { cd: "25", label: "滋賀県" },
        { cd: "26", label: "京都府" },
        { cd: "27", label: "大阪府" },
        { cd: "28", label: "兵庫県" },
        { cd: "29", label: "奈良県" },
        { cd: "30", label: "和歌山県" },
        { cd: "31", label: "鳥取県" },
        { cd: "32", label: "島根県" },
        { cd: "33", label: "岡山県" },
        { cd: "34", label: "広島県" },
        { cd: "35", label: "山口県" },
        { cd: "36", label: "徳島県" },
        { cd: "37", label: "香川県" },
        { cd: "38", label: "愛媛県" },
        { cd: "39", label: "高知県" },
        { cd: "40", label: "福岡県" },
        { cd: "41", label: "佐賀県" },
        { cd: "42", label: "長崎県" },
        { cd: "43", label: "熊本県" },
        { cd: "44", label: "大分県" },
        { cd: "45", label: "宮崎県" },
        { cd: "46", label: "鹿児島県" },
        { cd: "47", label: "沖縄県" }

    ];

    for (var i = 0; i < inner.length; i++) {
        let op = document.createElement('option');
        op.value = inner[i].cd;
        op.text = inner[i].label;
        document.getElementById("pref2").appendChild(op);

    }
};






function buttonClick(flag) {
    let ai = document.getElementById("detail")
    let ii = document.getElementById("txt-area")
    if (flag) {
        ai.classList.add("visibile")
        ai.classList.remove("invisibility")
        ii.classList.add("visibile")
        ii.classList.remove("invisibility")

    } else {
        ai.classList.remove("visibile")
        ai.classList.add("invisibility")
        ii.classList.remove("visibile")
        ii.classList.add("invisibility")
    }


}

function changeAdress1() {
    const adress1 = document.getElementById("adress1");

    const errMsgAdress1 = document.getElementById("err-msg-adress1");


    if (adress1.value === "") {
        errMsgAdress1.textContent = "住所を入力してください";

    } else {
        errMsgAdress1.textContent = "";
    }
}

function changeAdress2() {
    const adress2 = document.getElementById("adress2");

    const errMsgAdress2 = document.getElementById("err-msg-adress2");


    if (adress2.value === "") {
        errMsgAdress2.textContent = "住所を入力してください";

    } else {
        errMsgAdress2.textContent = "";
    }
}

function btnSubmit() {

    let errMsg = document.getElementById("errMsg")

    while (errMsg.firstChild) {
        errMsg.removeChild(errMsg.firstChild);
    }

    if (lastName.value == "") {
        var mydiv = document.createElement("p");
        mydiv.setAttribute("id", "errMsgChild");
        var textLastname = document.createTextNode("姓が未入力です");

        mydiv.appendChild(textLastname);
        errMsg.appendChild(mydiv);

    }



    if (firstName.value == "") {

        var mydiv = document.createElement("p");
        var textFirstName = document.createTextNode("名が未入力です");

        mydiv.appendChild(textFirstName);
        errMsg.appendChild(mydiv);


    }
    const gender1 = document.getElementsByName("gender");
    var flag = false;
    for (var i = 0; i < gender1.length; i++) {
        if (gender1[i].checked) {
            flag = true;

        }
    }
    if (!flag) {
        var mydiv = document.createElement("p");
        var textGender = document.createTextNode("性別が未選択です");

        mydiv.appendChild(textGender);
        errMsg.appendChild(mydiv);
    }

    if (adress1.value == "") {
        var mydiv = document.createElement("p");
        var textAdress1 = document.createTextNode("住所1が未入力です");

        mydiv.appendChild(textAdress1);
        errMsg.appendChild(mydiv);


    }

    if (adress2.value == "") {
        var mydiv = document.createElement("p");
        var textAdress2 = document.createTextNode("住所2が未入力です");

        mydiv.appendChild(textAdress2);
        errMsg.appendChild(mydiv);


    }

    const allergie = document.getElementsByName("btn");
    var flag = false;
    for (var i = 0; i < allergie.length; i++) {
        if (allergie[i].checked) {
            flag = true;

        }
    }
    if (!flag) {
        var mydiv = document.createElement("p");
        var textAllergie = document.createTextNode("アレルギーの有無が未選択です");

        mydiv.appendChild(textAllergie);
        errMsg.appendChild(mydiv);

    }
}

function upDate() {
    const isRequired = form.checkValidity();

    if (isRequired) {
        document.getElementById("btnsubmit").disabled = false;
        return;
    }
}

function cookie() {

    document.cookie = "name=" + encodeURIComponent("細谷");
}

function pageChange() {
    const value = document.getElementById("lastName").value;
    const valueFirstName = document.getElementById("firstName").value;
    const valueAdress1 = document.getElementById("adress1").value;
    const valueAdress2 = document.getElementById("adress2").value;
    const valueTxtArea = document.getElementById("txt-area").value;
    const valueTxtArea2 = document.getElementById("txtArea").value;

    sessionStorage.setItem("value1", value);
    sessionStorage.setItem("value2", valueFirstName);
    sessionStorage.setItem("value3", valueAdress1);
    sessionStorage.setItem("value4", valueAdress2);
    sessionStorage.setItem("value5", valueTxtArea);
    sessionStorage.setItem("value6", valueTxtArea2);


    const elements = document.getElementsByName("gender");
    let len = elements.length;
    let checkValue = "";

    for (let i = 0; i < len; i++) {
        if (elements.item(i).checked) {
            checkValue = elements.item(i).value;
            sessionStorage.setItem("value7", checkValue);
        }
    }

    const btnelements = document.getElementsByName("btn");
    let len2 = btnelements.length;
    let checkValue2 = "";

    for (let i = 0; i < len2; i++) {
        if (btnelements.item(i).checked) {
            checkValue2 = btnelements.item(i).value;
            sessionStorage.setItem("value10", checkValue2);
        }
    }

    const elements2 = document.getElementById("pref2");
    const adress = elements2.value;
    sessionStorage.setItem("value8", adress);



    location.href = "confirm.html";

}




function index2() {

    const value = sessionStorage.getItem("value1");
    const lastName = document.getElementById("lastName");
    lastName.value = value;

    const valueFirstName = sessionStorage.getItem("value2");
    const firstName = document.getElementById("firstName");
    firstName.value = valueFirstName;

    const valueAdress1 = sessionStorage.getItem("value3");
    const adress1 = document.getElementById("adress1");
    adress1.value = valueAdress1;

    const valueAdress2 = sessionStorage.getItem("value4");
    const adress2 = document.getElementById("adress2");
    adress2.value = valueAdress2;

    const valueTxtArea = sessionStorage.getItem("value5");
    const TxtArea = document.getElementById("txt-area");
    TxtArea.value = valueTxtArea;

    const valueTxtArea2 = sessionStorage.getItem("value6");
    const TxtArea2 = document.getElementById("txtArea");
    TxtArea2.value = valueTxtArea2;


    const valuegender2 = sessionStorage.getItem("value7");

    if (valuegender2 == "woman") {
        document.getElementById("radio-1").checked = true;
    } else {
        document.getElementById("radio-2").checked = true;
    };

    const valuebtn = sessionStorage.getItem("value10");

    if (valuebtn == "yes") {
        document.getElementById("allergie1").checked = true;
        let ai = document.getElementById("detail")
        let ii = document.getElementById("txt-area")
        ai.classList.add("visibile")
        ai.classList.remove("invisibility")
        ii.classList.add("visibile")
        ii.classList.remove("invisibility")

    } else {
        document.getElementById("allergie2").checked = true;
    };



    var inner = [
        { cd: "", label: "都道府県を選択" },
        { cd: "1", label: "北海道" },
        { cd: "2", label: "青森県" },
        { cd: "3", label: "岩手県" },
        { cd: "4", label: "宮城県" },
        { cd: "5", label: "秋田県" },
        { cd: "6", label: "山形県" },
        { cd: "7", label: "福島県" },
        { cd: "8", label: "茨城県" },
        { cd: "9", label: "栃木県" },
        { cd: "10", label: "群馬県" },
        { cd: "11", label: "埼玉県" },
        { cd: "12", label: "千葉県" },
        { cd: "13", label: "東京都" },
        { cd: "14", label: "神奈川県" },
        { cd: "15", label: "新潟県" },
        { cd: "16", label: "富山県" },
        { cd: "17", label: "石川県" },
        { cd: "18", label: "福井県" },
        { cd: "19", label: "山梨県" },
        { cd: "20", label: "長野県" },
        { cd: "21", label: "岐阜県" },
        { cd: "22", label: "静岡県" },
        { cd: "23", label: "愛知県" },
        { cd: "24", label: "三重県" },
        { cd: "25", label: "滋賀県" },
        { cd: "26", label: "京都府" },
        { cd: "27", label: "大阪府" },
        { cd: "28", label: "兵庫県" },
        { cd: "29", label: "奈良県" },
        { cd: "30", label: "和歌山県" },
        { cd: "31", label: "鳥取県" },
        { cd: "32", label: "島根県" },
        { cd: "33", label: "岡山県" },
        { cd: "34", label: "広島県" },
        { cd: "35", label: "山口県" },
        { cd: "36", label: "徳島県" },
        { cd: "37", label: "香川県" },
        { cd: "38", label: "愛媛県" },
        { cd: "39", label: "高知県" },
        { cd: "40", label: "福岡県" },
        { cd: "41", label: "佐賀県" },
        { cd: "42", label: "長崎県" },
        { cd: "43", label: "熊本県" },
        { cd: "44", label: "大分県" },
        { cd: "45", label: "宮崎県" },
        { cd: "46", label: "鹿児島県" },
        { cd: "47", label: "沖縄県" }

    ];

    let i = sessionStorage.getItem("value8");
    let op = document.createElement('option');
    op.value = inner[i].cd;
    op.text = inner[i].label;
    document.getElementById("pref2").appendChild(op);

    const isRequired = form.checkValidity();

    if (isRequired) {
        document.getElementById("btnsubmit").disabled = false;
        return;
    }
}






