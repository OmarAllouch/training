fetch("http://192.168.1.73:3000/")
    .then((response) => response.json())
    .then((json) => {
        for (let i = 0; i < json.length; i++) {
            var y = document.createElement("div");

            var content = `<div style="width:400px">
                              <h4 class="card-title">NNN AAA</h4>
                           </div> `;

            var test = content.replace("NNN", json[i].name);
            test = test.replace("AAA", json[i].age);

            y.innerHTML = test;
            document.getElementById("myUL").appendChild(y);
        }
    });