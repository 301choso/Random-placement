jQuery.noConflict();

function onl(){

    jQuery(document).on('click','#btn',function(){
      for(let i=0;i<22;i++){
        var text = jQuery("#"+i).text();
        console.log(text);
        jQuery("#"+i).html("<input type='text' value='"+text+"' id='editDo' size='10'>");
      }
      jQuery("#editbtn").html("<button type='button' id='btnDo'>수정하기</button>");
      })

    jQuery(document).on('click','#btnDo',function(){
        for(let i=0;i<22;i++){
          jQuery("#"+i).text(jQuery("#editDo").val());
        }
          jQuery("#editbtn").html("<button type='button' id='btn'>수정</button>");
      });
  }
