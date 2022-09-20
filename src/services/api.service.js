
function ApiService(endpoint){
    this.getAllData = () => fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
        .then (data => data.json())
    this.getSingleData=(id)=> fetch(`https://jsonplaceholder.typicode.com/${endpoint}/${id}`)
        .then (data => data.json())
}

export {ApiService};