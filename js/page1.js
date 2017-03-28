app.page("page1", function(){

  var $name = document.querySelector('#page1 input[name="name"]');
  var $btnOk = document.querySelector('#page1 button');

  $btnOk.onclick = function(){
    app("page2", $name.value );
  }

  return function(params){

  }
});
