var txtBox;
var eq = [0];
var ew= [];
var operate = [];
var resultOp = [];
var counter =0;
var dotCheck;
var result = 0;
var partial = 0;
var xCount = 0;
var yCount = 0;
var zCount = 0;
var filtered;
var indexx;

function EnterNumber(value){
    if(counter==1||counter==2){
        document.getElementById('Answer').value='';
    }
    txtBox = document.getElementById('Answer').value += value;
    if(value == ".") {
        document.getElementById('dot').disabled = true;
    }
    counter = 0;
}

function EnterEqual(){
    if(counter!=2){
        if(txtBox!=0){
            eq.push(parseFloat(txtBox));
        }
        if(counter==1){
            operate.pop();
            console.log('imhere ');
        }
        if(eq.length==operate.length+3){
            console.log('imhere ');
            eq[2]=0-eq[2];
            indexx =eq.indexOf('x');
            if (indexx > -1) {
            eq.splice(indexx, 1);
            }
        }
        console.log('eq= '+eq);
        for(var i=0;i<=operate.length;i++){
            if(operate[i]==3||operate[i]==4){
                xCount++;
            }
            if(operate[i]==1||operate[i]==2){
                yCount++;
                resultOp[i-xCount]=operate[i];
            }
            if((operate[i]!=3&&operate[i]!=4)){
                if(operate[i-1]){
                    if((operate[i-1]!=3&&operate[i-1]!=4)&&i!=operate.length-1){
                        ew[i]=eq[i+1];
                    } else if(i==operate.length-1){
                        if((operate[i-1]==3||operate[i-1]==4)){
                            ew[i+1]=eq[i+2];
                        } else {
                            ew[i]=eq[i+1];
                            ew[i+1]=eq[i+2];
                        }
                    }
                } else if(operate.length==1){
                    if((operate[i]==1||operate[i]==2)){
                        ew[i]=eq[i+1];
                        ew[i+1]=eq[i+2];
                    }
                } else {
                    if((operate[i]==1||operate[i]==2)){
                        ew[i]=eq[i+1];
                    }
                }
                
            } else if((operate[i]==3||operate[i]==4)&&(operate[i-1]==3||operate[i-1]==4)){
                console.log('here1 '+i);
                zCount++;

                if(operate[i]==3){
                    ew[i]= ew[i-1] * eq[i+2];
                } else if(operate[i]==4){
                    ew[i]= ew[i-1] / eq[i+2];
                }
                
                if(operate[i+1]==1||operate[i+1]==2||(operate[i+1]!=3&&operate[i+1]!=4)){
                    console.log('hereUp '+i);
                    ew[i-zCount]= ew[i];
                    for(var j=0;j<zCount;j++){
                        ew[i-j]=null;
                    }
                    zCount=0;
                } else {
                    console.log('hereDown '+i);
                    ew[i-zCount]= ew[i];
                    console.log('ew[3]= '+ew[3]);
                }
            } else if ((operate[i]==3||operate[i]==4)){
                if(operate[i]==3){
                    ew[i] = eq[i+1] * eq[i+2];
                } else if (operate[i]==4){
                    ew[i] = eq[i+1] / eq[i+2];
                }
            }
        }
        filtered = ew.filter(function (el) {
            return el != null;
        });

        if((operate.length==1&&(operate[0]==3||operate[0]==4))||yCount==0){
            result = filtered[0];
        } else {
            for(var j=0;j<resultOp.length;j++){
                if(resultOp[j]==1) {
                    if(j==0){
                        result=filtered[0]+filtered[1];
                    } else {
                        result+= filtered[j+1];
                    }
                } else if (resultOp[j]==2) {
                    if(j==0){
                        result = filtered[0]-filtered[1];
                    } else {
                        result -= filtered[j+1];
                    }
                }
            }
        }
        console.log(ew);
        console.log(filtered);
        console.log(resultOp);
        console.log(operate);
        console.log('xCount= '+xCount);
        console.log('yCount= '+yCount);
        document.getElementById('Answer').value=result;
        txtBox  = result;
        result = 0;
        operate = [];
        counter = 2;
        xCount=0;
        yCount=0;
        zCount = 0;
        eq = [0];
        ew= [];
        resultOp =[];
        filtered =[];
        document.getElementById('dot').disabled = false;
    }
}

function EnterOperator(operator){
    indexx =eq.indexOf('x');
    if(txtBox!=0&&isFinite(txtBox)){
        eq.push(parseFloat(txtBox));
    }
    if((counter==0||counter==2)&&eq[1]){
        switch(operator){
            case '+':
                operate.push(1);
                break;
            case '-':
                operate.push(2);
                break;
            case '*':
                operate.push(3);
                break;
            case '/':
                operate.push(4);
                break;
        }
    } else if (counter==1&&eq[1]){
        switch(operator){
            case '+':
                operate[operate.length-1] = 1;
                if (indexx > -1) {
                    eq.splice(indexx, 1);
                    }
                break;
            case '-':
                operate[operate.length-1] = 2;
                break;
            case '*':
                operate[operate.length-1] = 3;
                if (indexx > -1) {
                    eq.splice(indexx, 1);
                    }
                break;
            case '/':
                operate[operate.length-1] = 4;
                if (indexx > -1) {
                    eq.splice(indexx, 1);
                    }
                break;
        }
    } else if(operator=='-'&&!eq[1]&&eq.length==1){
        eq.push('x');
    }
    if(operate[operate.length-2]&&counter!=1){
        if(eq[1]!='x'){
            switch(operate[operate.length-2]){
                case 1:
                    partial += eq[operate.length];
                    break;
                case 2:
                    partial = partial - eq[operate.length];
                    break;
                case 3:
                    partial *= eq[operate.length];
                    break;
                case 4:
                    partial = partial / eq[operate.length];
                    break;
            }
        } else {
            switch(operate[operate.length-2]){
                case 1:
                    partial += eq[operate.length+1];
                    break;
                case 2:
                    partial = partial - eq[operate.length+1];
                    break;
                case 3:
                    partial *= eq[operate.length+1];
                    break;
                case 4:
                    partial = partial / eq[operate.length+1];
                    break;
            }
        }
        
    } else if(counter!=1){
        if(eq[1]!='x'){
            switch(operate[operate.length-1]){
                case 1:
                    partial = eq[1];
                    break;
                case 2:
                    partial = eq[1];
                    break;
                case 3:
                    partial = eq[1];
                    break;
                case 4:
                    partial = eq[1];
                    break;
            }
        } else {
            switch(operate[operate.length-1]){
                case 1:
                    partial = -eq[2];
                    break;
                case 2:
                    partial = -eq[2];
                    break;
                case 3:
                    partial = -eq[2];
                    break;
                case 4:
                    partial = -eq[2];
                    break;
            }
        }
        
    }
    if(!operate[operate.length-2]){
        document.getElementById('Answer').value='';
    } else {
        document.getElementById('Answer').value=partial;
    }
    txtBox  = 0;
    counter = 1;
    document.getElementById('dot').disabled = false;
}

function EnterClear(){
    document.getElementById('Answer').value='';
    txtBox  = 0;
    result = 0;
    partial =0;
    operate = [];
    counter = 0;
    xCount=0;
    yCount=0;
    zCount = 0;
    eq = [0];
    ew= [];
    resultOp =[];
    filtered =[];
    document.getElementById('dot').disabled = false;
}