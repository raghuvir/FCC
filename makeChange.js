    function checkCashRegister(price, cash, cid) {
      var denom = [0.01,0.05,0.10,0.25,1,5,10,20,100];  var changeDue = cash - price;  var changeOut = cid;  var tid=0; //tid=total-in-drawer

        for(i=0;i<cid.length-1;i++){   tid = tid + cid[i][1]; }  // see if theres enough cash in drawer to make change 
        
        for(i=changeOut.length-1;i>=0;i--){ //populate denominations and set initial outgoing amts
            changeOut[i][3] = denom[i];  changeOut[i][2]=0;    }

    if(changeDue<0) return "more cash is needed.";if(changeDue===0)return"Closed.";if(changeDue>tid)return"Insufficient Funds";
//Column Reference:  0:Currency Name;1:Amount still in drawer; 2:Number of units added to cashOut; 3: denomination
      for(i=cid.length-1;i>=0;i--){  // loop through denominations
            j=0;
            while(cid[i][3] <= changeDue  && cid[i][1] >= 0 ){
                    j++; 
                    changeOut[i][2]++;
                    changeDue = changeDue - cid[i][3];
                    cid[i][1] -= cid[i][3]; cid[i][1] = Math.round(cid[i][1]).toFixed(2);
                    console.log(cid[i]);
            }
      }    
     var output=[]; //Here is your change, ma'am: ";
     for(i=changeOut.length-1;i>=0;i--){
            if(changeOut[i][1] > 0 && changeOut[i][2] > 0  ) output.push([changeOut[i][0],changeOut[i][2]*changeOut[i][3]])//+=changeOut[i][2] +" "+ changeOut[i][0]+" ";
            }
        //output = output.trim(); output = output.split(" ");
    return output;
    }
    var Cid =
    [["PENNY", 1.01], ["NICKEL", 2.05],["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00],["FIVE", 55.00],["TEN", 20.00],["TWENTY", 60.00],["HUNDRED", 100.00]] ;

    checkCashRegister(19.50,100,Cid);
