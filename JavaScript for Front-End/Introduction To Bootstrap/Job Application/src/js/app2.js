$('.google').click( function () {
    
    swal({
        title: "Leave this site?",
        text: "if you click 'OK' you will be redirected to http://google.com",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "OK",
        
      },
      function(){
        swal();
      });
});

$('.facebook').click( function () {
    swal({
        title: "Leave this site?",
        text: "if you click 'OK' you will be redirected to http://facebook.com",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "OK",
        
      },
      function(){
        swal();
      });
    
});






