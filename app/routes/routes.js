const routes = [
    require('./posts'),
    require('./users'),
    require('./signIn')
];

module.exports = function(app){
    routes.forEach(function(route){
       route(app);
    });
};