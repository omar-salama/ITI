// function EventListener() {
//     this.EventHandlers = [];
//     this.Listener = function (handler) {
//         this.EventHandlers.push(handler);
//     }
//     this.Unlistener = function (handler) {
//         this.EventHandlers = this.EventHandlers.filter(hnd => {
//             if (handler != hnd) {
//                 return hnd;
//             }
//         })
//     }
//     this.FireEvents = function () {
//         this.EventHandlers.forEach(event => {
//             event.call();
//         })
//     }

// }
// let event1 = () => {
//     console.log("Event1 Firing1");
// }
// let event2 = () => {
//     console.log("Event2 Firing");
// }

// let EventsList = new EventListener();
// EventsList.Listener(event1);
// EventsList.Listener(event2);
// EventsList.FireEvents();




class FollowingSetting {
    constructor() {
        this.Followers = [];
        this.Subscribe = function (Acc) {
            this.Followers.push(Acc);
        }
        this.unSubscribe = function (Acc) {
            this.Followers = this.Followers.filter(Item => {
                if (Item != Acc)
                    return Item;
            })
        }

        this.pushNotify = function (Msg) {
            this.Followers.forEach((Acc, index) => {
                console.log("Account ", index, "nofiy with :",);
                Acc.notify(Msg);
            })

        }
    }

}
class TwitterAccount extends FollowingSetting {
    constructor(Name) {
        super();
        this.Name = Name;
    }
    notify(Message) {
        console.log(Message);
    }
}
let MyAccount = new TwitterAccount("Nadia");
let Account2 = new TwitterAccount("Ahmed");
let Accout3 = new TwitterAccount("Ayman");
//let Followers = new FollowingSetting();
MyAccount.Subscribe(Account2);
MyAccount.Subscribe(Accout3);
MyAccount.pushNotify("Nadia have new post");
MyAccount.unSubscribe(Accout3);
MyAccount.pushNotify("ff");
//===============
// class IObserver {
//     constructor() {
//     }
//     updateBallPostion(postionData) {

//     }
// }
// class Ball {
//     constructor() {
//         this.ListOFObserver = [];
//     }
//     Attach(observer) {
//         this.ListOFObserver.pop(observer);
//     }
//     DeAttach(observer) {
//         this.ListOFObserver = this.ListOFObserver.filter(item => {
//             if (observer != item) {
//                 return item
//             }

//         })
//     }
//     NotifyPostion() {

//     }
// }
// class Football extends Ball {
//     constructor() {
//     }
//     NotifyPostion() {
//         this.ListOFObserver.forEach(item => {
//             item.updateBallPostion(this.Postion);
//         })
//     }
//     set Postion(_postion) {
//         this.postion = _postion
//     }
//     get Postion() {
//         this.NotifyPostion()
//         return this.postion;
//     }
//     ToString(){
//         return `Ball Postion ${this.Postion}`;
//     }
// }

// class Postion{
//     constructor(_x,_y,_z){
//         this.x;
//         this.y;
//         this.z;
//     }
//     ToString(){
//         return `XP: ${this.x} Y:${this.y} Z:${this.y}`
//     }
// }
// class Playey extends IObserver{
//     constructor(){
//         this.BallPostion;//instance of Postion
//         this.Ball;//instance of Football

//     }
//     updateBallPostion(postion){
//         this.BallPostion=postion;
//     }
//     toString(){
//         return `player Ball Postion`
//     }

// }

function Click() {
    this.observers = [];  // observers
}
 
Click.prototype = {
 
    subscribe: function(fn) {
        this.observers.push(fn);
    },
 
    unsubscribe: function(fn) {
        this.observers = this.observers.filter(
            function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },
 
    fire: function(o, thisObj) {
        var scope = thisObj;
        this.observers.forEach(function(item) {
            item.call(scope, o);
        });
    }
}
 
function run() {
 
    var clickHandler = function(item) { 
        console.log("Fired:" +item);
    };
 
    var click = new Click();
 
    click.subscribe(clickHandler);
    click.fire('event #1');
    click.unsubscribe(clickHandler);
    click.fire('event #2');
    click.subscribe(clickHandler);
    click.fire('event #3');
 
}
 
/* OUTPUT:
 
Fired:event #1
Fired:event #3
 
*/