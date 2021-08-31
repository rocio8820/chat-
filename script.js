
const commentItems = [];

function commentsList(jQuery){
  
  const reversed = commentItems.reverse();
  $.each(reversed, function (ind, elem) {
    $("#comments").append("<div class='commentClass'><img src='image.jpg' class='imgClass'><span>"
    + elem.name + "</span><span class='questions'>"+elem.comment+
     "</span><div class='EditDiv noDisplay'><input type='text' class='editComment' id='editComment"+ind+"' value='"
     +elem.comment+"'><button type='button' id='submitEditButton' onclick=EditButton('"
     + ind + "')>Submit</button></div><button type='button' class='editButton'>Edit</button><button type='button' class='deleteButton' onclick=Delete('"
      + ind + "')>Delete</button></div>");
});
}

commentsList();

function clear(jQuery){
  $('#comments').empty();
  $('input[type="text"]').val('');
  setTimeout(function() {
    $("#output").css('display', 'none');
},6000);
}

//delete function
function Delete(index){
  commentItems.splice(index, 1);
  clear();
  commentsList();
}



//show message and edit 
$( "#comments" ).on( "click", ".editButton", function() {
  console.log($(this).siblings('div'));
  if ($(this).siblings('div').is(':hidden')){
    $(this).siblings('div').removeClass('noDisplay');
    $(this).css('margin-top', '-120px');
    $(this).siblings('button').css('margin-top', '-120px');
  }
  else{
    $(this).siblings('div').addClass('noDisplay');
    $(this).css('margin-top', '-60px');
    $(this).siblings('button').css('margin-top', '-60px');
  }
});

//edit button 
function EditButton(index){
  commentItems[index].comment = $("#editComment"+index).val();
  clear();
  commentsList();
}


$('#submitButton').on('click', function(){

  if($('#DisplayName').val() === '' ){
    $('#output').text('Display Name is required');
  }else if($('#Comment').val() === '' ){
    $('#output').text('Comment is required');
  }else{

    $('#output').text("Thank you "+ $('#DisplayName').val() + ' for your comment.');

  commentItems.push({name: $('#DisplayName').val() , comment: $('#Comment').val()});
  clear();
  commentsList();
  }
})