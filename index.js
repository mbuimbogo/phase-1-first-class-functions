function receivesAFunction(cb){
    return cb()
}
receivesAFunction(function (){return 'hello world'});

function returnsANamedFunction(){
    function evening (greet='evening') {
        return `${greet} world`;
    }
    return evening
}
returnsANamedFunction()

function returnsAnAnonymousFunction (){
    return function () {
        'halloo'
    }
}
returnsAnAnonymousFunction() 