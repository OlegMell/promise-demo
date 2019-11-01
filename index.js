window.onload = async () =>{
    const GUI = {
        root: document.getElementById('root'),
        main: document.getElementsByClassName('main')
    };

    const SUCCESS = 200;

    const onReject = (status, errorText) => {
        console.log(status + " " + errorText);
    };

    const onResolve = data => {
        const rawData = JSON.parse(data);
        for (const item in rawData) {
            const div = document.createElement("div", item.name);
            GUI.main.append();
        }
    };

    // let promise = new Promise((resolve, reject) => {
    //     const xhr = new XMLHttpRequest();
    //     xhr.open("GET", "http://localhost/shop%20server/?prod=all", false);
    //     xhr.send();

    //     if (xhr.status !== SUCCESS) {
    //         reject(xhr.status, xhr.statusText);
    //     } else {
    //         resolve(xhr.responseText);
    //     }
    // });

    const promise = await fetch("http://localhost/shop%20server/?prod=all");

    console.log(JSON.parse(await promise.text()));

    // promise.then(onResolve, onReject);
}