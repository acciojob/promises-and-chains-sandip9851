document.getElementById("btn").addEventListener("click",alertDisplay);

function alertDisplay() {
	let age = document.getElementById("age").value;
	let name = document.getElementById("name").value;
	if(age === "" || name === ""){
		alert("Input cannot be empty");
		return;
	}
	return new Promise((resolve,reject)=>{
		if(age >= 18){
			resolve()
		}else{
			reject()
		}
	}).then(()=>{
		setTimeout(()=>{
			alert(`Welcome, ${name}. You can vote.`);
		},4000)
	}).catch(()=>{
		alert(`Oh sorry ${name}. You aren't old enough.`);
	})
}