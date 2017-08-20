$(function() {

  $.ajax({
      url: "https://www.codeschool.com/users/3072354.json",
      dataType: 'jsonp',
      success: function(data){
          //Do something
      }
  });

});
