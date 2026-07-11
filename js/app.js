fetch("tools.json")

.then(response => response.json())

.then(tools => {


const container =
document.getElementById("tools-container");


tools.forEach(tool => {


const card =
document.createElement("div");


card.className="tool-card";


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


<p>
Category:
${tool.category}
</p>


<a href="${tool.url}" target="_blank">
Launch Tool
</a>

`;


container.appendChild(card);


});


});