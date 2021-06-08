


//Adaapter
function ITarget() {
    this.request = function (startPoint, EndPoint, Weight) {
        //make come calculations
        console.log('Cost', (EndPoint - startPoint) + Weight)
    }
}

function newTicktCost() {
    this.login = function (userData) {
        console.log(userData);
        //somecode
    }
    this.setStartPoint = function (start) {
        this.start = start;
    }
    this.setEnd = function (End) {
        this.end = End;
    }
    this.calculation = function (weight) {
        console.log("Cost", (this.end - this.start) + weight)
    }
}

//Console is the Client we need to get 
//any object must call like target function 
//instancename.request(start,end,weight)
//make adapter 
function AdapterTickt(userData){
    let ticktship=new newTicktCost();
    this.request=function(_start,_end,_weight){
        ticktship.setEnd(_end);
        ticktship.setStartPoint(_start);
        return ticktship.calculation(_weight);

    }
}
let Adapter=new AdapterTickt("Nadia");
Adapter.request(80,100,30);
let Target=new ITarget();
Target.request(80,100,30);

