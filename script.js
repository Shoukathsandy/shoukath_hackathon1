var con = document.createElement("div");
con.className = "container";

var row2 = document.createElement("div");
row2.className = "row";
var col2 = document.createElement("div");
col2.className = "col";

var div = document.createElement("div");
div.className = "box";

var label = document.createElement("label");
label.setAttribute("for", "text");
label.className = "l1";
label.innerHTML = "Enter the Name";

var br = document.createElement("br");

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "text");
input.setAttribute("placeholder", "Enter Name");
// input.setAttribute("required","true");

var br1 = document.createElement("br");

var button = document.createElement("button");
button.className = "b1";
button.addEventListener("click", foo);
button.innerHTML = "Search";

var button1 = document.createElement("button");
button1.className = "b1";
button1.addEventListener("click", foo1);
button1.innerHTML = "Clear";

var button2 = document.createElement("button");
button2.className = "b1";
button2.addEventListener("click", foo2);
button2.innerHTML = "Reset";

div.append(label, br, input, br1, button, button1, button2);
col2.append(div);
row2.append(col2);
con.append(row2);
document.body.append(con);

async function foo() {
    try {
        var out = document.getElementById("text").value;
        var res = await fetch(`https://api.nationalize.io/?name=${out}`);
        var res1 = await res.json();
        // console.log(res1);


        for (var i = 0; i < 2; i++) {
          
            // var cre = document.createElement("div");
            // cre.className = "inner";

            // var p = document.createElement("h1");
            // p.setAttribute("id", "content");
            // p.innerHTML = `country_id:${res1.country[i].country_id}  probability:${res1.country[i].probability}`;
            // p.style.color = "red";
            // p.style.fontSize = "bold";

            // cre.append(p);  
            // document.body.append(cre);
            var d = document.createElement("div");
            d.setAttribute("id", "clr");

            var table = document.createElement("table");
            table.setAttribute("id", "tt");
            table.className = "tab";

            var thead = document.createElement("thead");

            var tr = document.createElement("tr")

            var th = document.createElement("th");
            th.className = "cl";
            th.innerHTML = "country_id";

            var th1 = document.createElement("th");
            th1.className = "cl";
            th1.innerHTML = "probability";

            thead.append(tr, th, th1);

            var tbody = document.createElement("tbody");

            var tr1 = document.createElement("tr");

            var td = document.createElement("td");
            td.className = "rw";
            td.innerHTML = `${res1.country[i].country_id}`;

            var td1 = document.createElement("td");
            td1.className = "rw";
            td1.innerHTML = `${res1.country[i].probability}`;

            tr1.append(td, td1);
            tbody.append(tr1);

            table.append(thead, tbody);
            d.append(table);
           col2.append(d);
        }
    } catch (error) {
        alert("this name is not available");
    }
}
function foo1() {
    var res1 = document.getElementById("text").value = "";
    return res1;
}
function foo2() {
    location.reload();

}


