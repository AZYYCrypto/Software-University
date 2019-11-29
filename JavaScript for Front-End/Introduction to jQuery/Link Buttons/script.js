function attachEvents() {
  $('.buttons').on('click' , selectedTown);


  function selectedTown() {


        if ($(this).hasClass('selected')) {
          $(this).removeClass('selected')

        } else {
          $('.buttons').removeClass('selected');

          $(this).addClass('selected');
        }



  }
}