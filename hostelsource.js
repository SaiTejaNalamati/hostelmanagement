function addp(x){
    hm.push(x)
    bed-=1
}
function hlist(hm){
    if((hm.length) <=0){
        console.log("No student has choosen hostel");
    }
    for(let i=0;i<hm.length;i++){
        console.log((i+1)+": "+hm[i]);
    }
}
function beds(){
    return bed 
}
function subp(x){
    hm.pop(x)
    bed+=1
}

const prompt = require('prompt-sync')();
console.log("------- HOSTEL MANAGEMENT -------")
var hm=[]
var bed =15
var t=1
while (t){
    console.log("1.Add Hostler\n2.Remove Hostler\n3.No of beds remains\n4.Display list of hostlers\n5.exit");
    var choice=prompt("Enter your choice:");
switch(choice){
    case "1":
        var person=prompt("Enter the name of the student who wants to join:")
        addp(person);
        break;
    case "2":
        var np = prompt("enter the name of the student who wants to leave hostel:")
        for(let i=0;i<hm.length;i++){
            var flag=0;
            if (hm[i]==np){
                flag = 1;
            }
        }
        if (flag==1){
            subp(np);
            break;
        }
        else{
            console.log("No student is available with the name"+np);
            break;
        }
    case "3":
        console.log("No of beds available: "+beds())
        break;
    case "4":
        hlist(hm)
        break;
    case "5":
        t=0;
        break;
    default:
        console.log("key mismatch");
        t=0;
        break;
    }
}