$(document).ready(function() {

// get a quote from the server when the page loads and add it to the dom
  getQuote();

// when the user enters data and clicks submit, post the quote to the server
  $('#submit').click((e) => {
    e.preventDefault();
    let quote = $('input').val();
    addQuote(quote);
  });

  function getQuote(){
    //YOUR CODE HERE, Add a GET request

    $.get('http://localhost:3000/quote', function(data){
      let quote = $('#quote');
      quote.append(`<h1>${data}</h1>`);
    })
  }

  function addQuote(quote){
    $.post('http://localhost:3000/quote', quote, function(response){
    $('form')[0].reset();
    $('#response').text(`thank you for your submission: ${response}`);

    })
  }
});
