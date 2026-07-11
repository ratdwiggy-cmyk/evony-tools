let allTools = [];


fetch("tools.json")

.then(response => response.json())

.then(tools => {

allTools = tools;

displayTools(tools);


});



function displayTools(tools)
{


const container =
document.getElementById(
"tools-container"
);


container.innerHTML="";


tools.forEach(tool => {


let card =
document.createElement("div");


card.className =
"tool-card";



card.innerHTML = `


<div class="icon">
${tool.icon}
</div>


<h3>
${tool.title}
</h3>


<p>
${tool.description}
</p>


<div class="category">
${tool.category}
</div>


<div class="status ${tool.status}">
${tool.status}
</div>


<p>
Version:
${tool.version}
</p>


<a href="${tool.url}">
Launch
</a>


`;



container.appendChild(card);



});


}



document
.getElementById("search")
.addEventListener(
"input",
function(){


let value =
this.value.toLowerCase();


let filtered =
allTools.filter(tool =>

tool.title
.toLowerCase()
.includes(value)

);


displayTools(filtered);


});