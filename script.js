var timeId;
var getdata = document.getElementById("data");

async function main1(n) {
    let res = await fetch(`https://swapi.dev/api/people/?search=${n}`);
    let data = await res.json();
    return data.results;
}

async function main() {
    let name = document.getElementById("star").value;
    let data = await main1(name);
    console.log(data);
    appenddata(data);
}

function appenddata(d) {
    var getdata = document.getElementById("data");
    //Making getdata div visible
    getdata.style.display = "block";

    //Making input div border-radius-bottom 0px;
    let inpstyle = document.getElementById("inp");
    inpstyle.style.borderBottomRightRadius = "0px";
    inpstyle.style.borderBottomLeftRadius = "0px";

    //visible horizontal line
    document.getElementById("hr").style.display = "block";

    //appending data
    d.forEach(({ name, birth_year, height, gender, eye_color, mass, hair_color }) => {
        var nme = document.createElement("div");
        nme.onmouseover = () => {
            nme.style.color = "yellow";
        }
        nme.onmouseout = () => {
            nme.style.color = "white";
        }
        var brth = document.createElement("p");
        nme.innerHTML = name;
        brth.innerHTML = birth_year;
        brth.style.color = "white";
        nme.append(brth);
        getdata.append(nme);
        console.log(name, birth_year, gender);
        //new div after clicking 
        let showdt = document.getElementById("showdata");
        let dt = document.getElementById("data");
        let conta = document.getElementById("container");
        dt.onclick = function () {
            conta.style.display = "none";
            document.getElementById("showdata").style.display = "block";


            document.getElementById("head").textContent = `${name}`;
            //appending data in personalinfo 
            let personal = document.getElementById("personal");
            // let nme = document.createElement("h1");
            //   nme.innerHTML = name;

            let personalhead = document.createElement("h2");
            personalhead.innerHTML = `Personal Info`;
            let birth = document.createElement("h4");
            birth.innerHTML = `Birth: ${birth_year}`;
            let gend = document.createElement("h4");
            gend.innerHTML = `Gender: ${gender}`;
            let hght = document.createElement("h4");
            hght.innerHTML = `Height: ${height}`;;
            //appending data 
            personal.append(personalhead, birth, gend, hght);

            //appending data in personalinfo 
            let anatomy = document.getElementById("anatomy");
            let anatomyhead = document.createElement("h2");
            anatomyhead.innerHTML = `Anatomy`;
            let eye = document.createElement("h4");
            eye.innerHTML = `Eye color: ${eye_color}`;
            let hair = document.createElement("h4");
            hair.innerHTML = `Hair color: ${hair_color}`;
            let mss = document.createElement("h4");
            mss.innerHTML = `Mass: ${mass}`;
            //appending data 
            anatomy.append(anatomyhead, eye, mss, hair);


            //hover Effect
            personal.onmouseover = function () {
                personal.style.color = "white";
                personal.style.borderColor = "white";
            }
            personal.onmouseout = function () {
                personal.style.color = "yellow";
                personal.style.borderColor = "yellow";
            }

            anatomy.onmouseover = function () {
                anatomy.style.color = "white";
                anatomy.style.borderColor = "white";
            }
            anatomy.onmouseout = function () {
                anatomy.style.color = "yellow";
                anatomy.style.borderColor = "yellow";
            }

            let btn = document.getElementById("btn");
            btn.onmouseover = function () {
                btn.style.color = "white";
                btn.style.borderColor = "white";
            }
            btn.onmouseout = function () {
                btn.style.color = "yellow";
                btn.style.borderColor = "yellow";
            }


        }
    });
    

}

//Go back button
let btn = document.getElementById("btn");
btn.onclick = function () {
    document.getElementById("personal").textContent = "";
    document.getElementById("anatomy").textContent = "";
    document.getElementById("head").textContent = "";
    document.getElementById("showdata").style.display = "none"; document.getElementById("container").style.display = "block";
    document.getElementById("star").value = "";
    document.getElementById("data").style.display = "none";
    let inpstyle = document.getElementById("inp");
    inpstyle.style.borderBottomRightRadius = "20px";
    inpstyle.style.borderBottomLeftRadius = "20px";
    document.getElementById("hr").style.display = "none";

}


function throttling(func, delay) {
    getdata.innerHTML = "";
    var name = document.getElementById("star");

    if (name.length < 3)
        return false;

    if (timeId)
        clearTimeout(timeId);

    timeId = setTimeout(function () {
        func();
    }, delay);
}