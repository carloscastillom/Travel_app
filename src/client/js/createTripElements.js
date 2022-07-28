
function createTripElem()
{

    const para = document.createElement("div");
    const node = document.createTextNode("This is a Test.");
    para.appendChild(node);
    
    const element = document.getElementById("Testing");
    document.body.insertBefore(para, element);
    console.log("test")

}

export { createTripElem }
