function alertDisplay(event) {
    event.preventDefault();
    let age = parseInt(document.getElementById("age").value);
    let name = document.getElementById("name").value;
    if(isNaN(age) || name === ""){
        alert("Input cannot be empty or invalid");
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