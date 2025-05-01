$(document).ready(function() {
  $('#load-posts').click(function() {
    $('#loading').show();
    $('#post-list').empty();

    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'GET',
      success: function(data) {
        $('#loading').hide();
        data.slice(0, 10).forEach(function(post) { // solo 10 para no saturar
          $('#post-list').append(`<li><strong>${post.title}</strong><br>${post.body}</li>`);
        });
      },
      error: function(error) {
        $('#loading').hide();
        alert('Error al cargar los datos');
        console.error(error);
      }
    });
  });
});