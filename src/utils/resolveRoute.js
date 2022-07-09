/**
 * resolve the route hash
 * @param {String} route route hash
 * @returns {String} route solved
 */
const resolveRoute = (route) => {
    if(route.length <= 3){
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }

    return `/${route}`;
}

export default resolveRoute;