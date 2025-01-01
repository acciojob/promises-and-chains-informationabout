//your JS code here. If required.
document.getElementById("user-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();

    if (!name || !age) {
        alert("Both fields are required!");
        return;
    }

    const ageNum = parseInt(age, 10);

    // Create a promise
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ageNum >= 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    })
        .then((message) => {
            alert(message);
        })
        .catch((error) => {
            alert(error); 
        });
});
