$(function() {

  $.ajax({
      url: "https://www.codeschool.com/users/3072354.json",
      dataType: 'jsonp',
      success: function(data){
          data.courses.completed.forEach(function(course){
              $("#badges").append('<div class="course"></div>');
          });
      }
  });

});
