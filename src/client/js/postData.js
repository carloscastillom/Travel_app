const fetch = require("node-fetch");

// Make async POST request to server
const postData = async function(url='', data={}) {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        return await res.json();
    }
    catch(error) {
        console.log(`error in client/js/postData.js: ${error}`);
    }
};

export { postData };