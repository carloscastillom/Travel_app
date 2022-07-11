const checkForName = function(inputText){
    console.log("::: Running checkUrl :::", inputText);

    const regEx = /^(ftp|http|https):\/\/[^ "]+$/.test(inputText);
    return regEx;
}

export { checkForName }
