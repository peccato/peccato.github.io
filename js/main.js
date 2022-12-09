
$(document).ready(function(){
 
  $.ajax({
   url:"js/wakfu",
   dataType:"text",
   success:function(data)
   {
    var employee_data = data.split(/\r?\n|\r/);
    var table_data = '<table class="table  table-striped  table-dark table-bordered  p-2 table-hover table-sm  text-light text-center">';
    for(var count = 0; count<employee_data.length; count++)
    {
     var cell_data = employee_data[count].split(";");
     table_data += '<tr>';
     for(var cell_count=0; cell_count<cell_data.length; cell_count++)
     {
      if(count === 0)
      {
       table_data += '<th class="thclasse ">'+cell_data[cell_count]+'</th>';
      }
      else
      {
       table_data += '<td>'+cell_data[cell_count]+'</td>';
      }
     }
     table_data += '</tr>';
    }
    table_data += '</table>';
    $('#subli_table').html(table_data);
   }
  });
 
 
});