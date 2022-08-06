AFRAME.registerComponent("addButtons",{
    init:function(){
        var button1 = document.createElement("button");
        button1.innerHTML = "order now";
        button1.setAttribute("id", "order-button");
        button1.setAttribute("class", "btn btn-danger ml-3 mr-3");

        var button2 = document.createElement("button2");
        button2.innerHTML = "order summary";
        button2.setAttribute("id", "order-summmary-button");
        button2.setAttribute("class", "btn btn-danger ml-3");

        var buttonDiv = document.getElementById("button-div")
        buttonDiv.appendChild(button2)
        buttonDiv.appendChild(button1)
    }

});