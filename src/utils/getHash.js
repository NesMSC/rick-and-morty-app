/**
 * returns data from url hash
 * @returns {String} :id
 */
const hash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'; 
    // ['', ':id', '']

export default hash;