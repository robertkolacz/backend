const routes = [
    require('./signIn'),
    require('./posts')
];

module.exports = function(app){
    routes.forEach(function(route){
       route(app);
    });
};