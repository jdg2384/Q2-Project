$(document).ready(function() {

  const baseURL = 'http://localhost:3000'

  $(".signin").submit(function(event) {
    event.preventDefault();
    console.log('clicked');
    const username = $("input#user").val();
    const password = $("input#pass").val();
    $.ajax({
      url: `${baseURL}/user/`,
      type: 'POST',
      data: {
        email: username,
        //password: password
      },
      success: function(data) {
        console.log(data);
        if (data == "OK") {
          window.location.href = `${baseURL}/map.html`
        }
      }
    })

  });
})
