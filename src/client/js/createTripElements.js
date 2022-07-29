
function createTripElem()
{

    const para = document.createElement("div");
    const node = document.createTextNode("This is a Test.");

    para.setAttribute("id","nDays");
    para.appendChild(node);
    
    
    const element = document.getElementById("results");
    element.append(para)
    //document.body.insertBefore(para, element);
    console.log("test")

}

export { createTripElem }
