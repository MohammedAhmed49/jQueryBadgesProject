$(function() {

  $.ajax({
      url: "https://www.codeschool.com/users/3072354.json",
      dataType: 'jsonp',
      success: function(data){
          data.courses.completed.forEach(function(course){
              $("#badges").append('<div class="course"><h3>'
                                  + course.title + 
                                  '</h3><img src="' + course.badge + '"> <a href="' + course.url + '" target="_blank" class="btn btn-primary">See Course</a></div>');
          });
      }
  });

});
