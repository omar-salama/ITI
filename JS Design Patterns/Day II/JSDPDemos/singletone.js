//create class for EmployessManager
class Manger{
    constructor(_name){
        if(Manger.instance instanceof Manger)
        {
            return Manger.instance;
        }
        // if(Manger.instance !=null){
        //     throw new Error("can create Multi instance from this class");
        // }
        
        this.Name=_name,
        this.SettingObject={
            'background':'#FF00FF',
            'Version':Math.floor(Math.random()*300),
            Name:this.Name
        }
      //  Object.freeze(this);
        Manger.instance=this;
    }
    get(key){
        return this.SettingObject[key];
    }
}

//with ES5
var Singleton = (function () {
    var instance;
 
    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
 
function run() {
 
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
 
    alert("Same instance? " + (instance1 === instance2));  
}