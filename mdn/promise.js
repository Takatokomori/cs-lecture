const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
    .then((res) =>{
        if(!res.ok){
            throw new Error(`HTTP error: ${res.status}`);
        }
        return res.json();
    })
    .then((data) =>{
        data.forEach(element => {
            console.log(element.name);
        });
    })
    .catch((error)=>{
        console.log(`Couldn't get products: ${error}`);
    })