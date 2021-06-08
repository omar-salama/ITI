class IFly{
    constructor(){
        if(this.constructor.name="IFly"){
            throw new Error("Interface");
        }
        performFly();
    }
}
class FlyNormalSpeed extends IFly{
    performFly(){
        console.log("normal Speed");
    }
}
class Nofly extends IFly{
    performFly(){
        console.log("No wings to fly");
    }
}
class Duck{
    constructor(){
        if(this.constructor.name=="Duck"){
            throw new Error("Duck is Abstract class");
        }
    }

    Quack=function(){
        console.log("Duck is quack");

    }
    Swimming(){
        console.log("Duck is Swimming");
    }
    Display(){}
    Fly(){
        console.log("Duck is Flying")
    }
}
class MallarDuck extends Duck{
    Display(){
        console.log("Look like MallarDuck");
    }
}
class RedHeadDuck extends Duck{
    Display(){
        console.log("Looks Like RedHeadDuck");
    }
}



const duck1=new MallarDuck();
duck1.Fly();

const duck2=new RedHeadDuck();
duck2.Display();