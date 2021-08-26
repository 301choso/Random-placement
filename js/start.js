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

  let r =jQuery('#count [name="row"]').val();
  let c =jQuery('#count [name="col"]').val();

  setTable();

  let count=0;
  for(let n=1;n<=r;n++){

  var tablen="";
  var linen = document.querySelector(".line"+n);

  tablen += "<table class='table table-bordered mt-3'>";
      for (let i = 1; i <= c; i++) {
        count++;
          tablen += "<tr>";
          tablen += "<td id ="+count+">" + seat[count-1].name + " : "+ seat[count-1].value +"</td>";
          tablen += "</tr>";
      }
     tablen += "</table></br>";
     linen.innerHTML =  tablen;
   }
 }

  function setTable(){
    var Row = document.querySelector("#printRow");
    const co =jQuery('#count [name="row"]').val();

    var column="";
      for(let i=1;i<=co;i++){
       column+= "<div class='col'>";
       column+= "<div class=line"+i+"></div>";
       column+= "</div>";
      }
    Row.innerHTML = column;
  }
