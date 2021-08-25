const main = document.querySelector('#main');
const ready =  document.querySelector('#ready');

function showTable(seat){

  main.style.WebkitAnimation = "fadeOut 0.5s";
  main.style.animation = "fadeOut 0.5s";
  setTimeout(() => {
    ready.style.WebkitAnimation = "fadeIn 0.5s";
    ready.style.animation = "fadeIn 0.5s";
    setTimeout(() => {
      main.style.display="none";
      ready.style.display="block";
    },200)
  },200)

seat.sort(() => Math.random()-0.5);

  var table1="";
  var table2="";
  var table3="";
  var table4="";
  var table5="";

  var line1 = document.querySelector(".line1");
  var line2 = document.querySelector(".line2");
  var line3 = document.querySelector(".line3");
  var line4 = document.querySelector(".line4");
  var line5 = document.querySelector(".line5");
  //첫번째 분단(테이블)
  table1 += "<table class='table table-bordered mt-3'>";
      for (i = 0; i < 4; i++) {
          table1 += "<tr>";
          table1 += "<td id ="+i+">" + (Number(seat[i].name)+1) + " : "+ seat[i].value +"</td>";
          table1 += "</tr>";
      }
     table1 += "</table></br>";
     line1.innerHTML =  table1;

  //두번째 분단(테이블)
  table2 += "<table class='table table-bordered mt-3'>";
       for (i = 4; i < 9; i++) {
          table2 += "<tr>";
          table2 +="<td id ="+i+">" + (Number(seat[i].name)+1) + " : "+ seat[i].value +"</td>";
          table2 += "</tr>";
       }
      table2 += "</table></br>";
      line2.innerHTML =  table2;

  //세번째 분단(테이블)
  table3 += "<table class='table table-bordered mt-3'>";
       for (i = 9; i < 14; i++) {
          table3 += "<tr>";
          table3 +="<td id ="+i+">" + (Number(seat[i].name)+1) + " : "+ seat[i].value +"</td>";
          table3 += "</tr>";
       }
      table3 += "</table></br>";
      line3.innerHTML =  table3;
      //4
      table4 += "<table class='table table-bordered mt-3'>";
           for (i = 14; i < 18; i++) {
              table4 += "<tr>";
              table4 +="<td id ="+i+">" + (Number(seat[i].name)+1) + " : "+ seat[i].value +"</td>";
              table4 += "</tr>";
           }
          table4 += "</table></br>";
          line4.innerHTML =  table4;
        //5
        table5 += "<table class='table table-bordered mt-3'>";
             for (i = 18; i < 22; i++) {
                table5 += "<tr>";
                table5 += "<td id ="+i+">" + (Number(seat[i].name)+1) + " : "+ seat[i].value +"</td>";
                table5 += "</tr>";
             }
            table5 += "</table></br>";
            line5.innerHTML =  table5;

}
