document.getElementById('btnCalculate').addEventListener('click', function () {
   // Get user inputs

  
    const targetRenewal = parseInt(document.getElementById('targetRenewal').value);
    const salesRenewal = parseInt(document.getElementById('salesRenewal').value);

    let com;
    let holdback;
    let total;
    let com1;

    let result = Math.min(salesRenewal, targetRenewal * 0.5);
    com = 0;
   // console.log("From 0% to 50%: " + result);

    if (salesRenewal > targetRenewal * 0.5) {
        result = Math.min(salesRenewal - targetRenewal * 0.5, targetRenewal * 0.8 - targetRenewal * 0.5);
        com = salesRenewal * 0.1;
    }
  //  console.log("From 50% to 80%: " + result);

    if (salesRenewal > targetRenewal * 0.8) {
        result = Math.min(salesRenewal - targetRenewal * 0.8, targetRenewal - targetRenewal * 0.8);
        com = salesRenewal * 0.15;  
    }
    if (salesRenewal > targetRenewal){
      result = Math.min(salesRenewal-targetRenewal, targetRenewal);
      com1 = result * 0.25;    
      com -= result * 0.15;
    }
    else{
      com1 = 0;
    }
    holdback = com*0.20;
    total = (com-holdback) + com1;

    document.getElementById('result').textContent = "Commission: " + com.toLocaleString();
    document.getElementById('over').textContent = "Overachievement: " + com1.toLocaleString(); 
    document.getElementById('-20%').textContent = "Monthly Holdback: " + holdback.toLocaleString();
    document.getElementById('total commission').textContent = "Total Commission: " + total.toLocaleString();
    
    
});