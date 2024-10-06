function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    if (name1==="" || name2==="") {
        alert("One or more fields are empty");
    }
    else {
        const lovePercentage = Math.floor(Math.random() * 101);
        const result = document.getElementById("result");
        result.innerHTML = `${name1} and ${name2} 's Love Percentage is ${lovePercentage}%`;
    }
}