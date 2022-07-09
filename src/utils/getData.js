const API = 'https://rickandmortyapi.com/api/character/';

/**
 * Get data from API
 * @param {Number} id character id (optional)
 * @returns {JSON} api data
 */
const getData = async (id) => {
    const apiURL = id ? API + id : API;

    try{
        const response = await fetch(apiURL);
        const data = response.json();
        return data;
    }catch(error){
        console.error(error);
    }
}

export default getData;