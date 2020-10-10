// reference: https://developers.google.com/apps-script/reference/forms/item-response#getresponse

function myFunction() {
  var result = [];
  
  var form = FormApp.openById('1uEsTqM5t7Gh90nQpkrvsTG72muzHQ9LhoI-x7eiQnmk');
  var formResponses = form.getResponses();
  for (var i = 0; i < formResponses.length; i++) {
    var response = [];
    var answer;
    var formResponse = formResponses[i];
    var itemResponses = formResponse.getItemResponses();
    for (var j = 0; j < itemResponses.length; j++) {
      
      var itemResponse = itemResponses[j];
      Logger.log('Response #%s to the question "%s" was "%s"',
        (i + 1).toString(),
        itemResponse.getItem().getTitle(),
        itemResponse.getResponse());
      
      answer = itemResponse.getResponse();
      response.push(answer);
    }
    
    result.push(response);
  }
  
  
  
  Logger.log(JSON.stringify(result));
}