var btn = document.getElementById("add-fruit"); //<button>
btn.addEventListener("click", addFruit);

//Add new fruits to the catalogue
function addFruit(){
	var inputVal = document.getElementById("fruit").value; //<input>
	var list = document.getElementById("list"); //<ol>
	var div = document.getElementById("alert"); //<div>
	if(inputVal == ""){
		//create span element if input is empty
		var span = document.createElement("span");
		span.setAttribute("id", "alert-span");
		var spanContent = document.createTextNode(" Debe ingresar fruta");
		//create icon
		var icon = document.createElement("i");
		icon.classList.add("fa", "fa-exclamation-circle");
		icon.setAttribute("aria-hidden", "true");
		//append
		span.appendChild(icon);
		span.appendChild(spanContent);
		div.appendChild(span);
	}else{
		//create li element inside ol list
		var li = document.createElement("li");
		var liContent = document.createTextNode(inputVal);
		li.appendChild(liContent);
		list.appendChild(li);
		//clear input
		document.getElementById("fruit").value = "";
		//remove span
		while(div.hasChildNodes()){ 
			div.removeChild(div.childNodes[0]);
			//another way to remove child nodes:
			//var spanAlert = document.getElementById("alert-span");
			//spanAlert.parentNode.removeChild(spanAlert);
		}
	}
}