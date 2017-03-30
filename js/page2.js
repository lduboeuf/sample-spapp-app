app.page("page2", function(){

  var $result = document.querySelector('#page2 p');


  return function(params){
    if (params){
      $result.innerHTML = 'from page1:' + params;
    }else{
      $result.innerHTML = 'hi there';
    }

  }
});
