
function reverseMode(){ //거꾸로 모드 구현 예정

  var table1="";
  var table2="";
  var table3="";

  var line1 = document.querySelector(".line1");
  var line2 = document.querySelector(".line2");
  var line3 = document.querySelector(".line3");

  table1 += "<table class='table table-bordered mt-3'>";
      for (i = 0; i < 4; i++) {
        table1 += "<tr>";
          for (j = 0; j < 2; j++) {
            table1 += "<td>"+ seat[2 * i + j].name +"</td>";

          }

          table1 += "</tr>";
      }
     table1 += "</table></br>";
     line1.innerHTML =  table1;

  //두번째 분단(테이블)
  table2 += "<table class='table table-bordered mt-3'>";
       for (i = 4; i < 9; i++) {
          table2 += "<tr>";
           for (j = 0; j < 2; j++) {
             table2 += "<td>"+ seat[2 * i + j].name +"</td>";
           }

           table2 += "</tr>";
       }
      table2 += "</table></br>";
      line2.innerHTML =  table2;

  //세번째 분단(테이블)
      table3 += "<table class='table table-bordered mt-3'>";
         for (i = 9; i < 13; i++) {
            table3 += "<tr>";
             for (j = 0; j < 2; j++) {
               table3 += "<td>"+ seat[2 * i + j].name +"</td>";
             }

             table3 += "</tr>";
         }
        table3 += "</table></br>";
        line3.innerHTML =  table3;

        jQuery(".printMode").html("<button type='button' onclick='window.print()'>인쇄하기</button>");

}
