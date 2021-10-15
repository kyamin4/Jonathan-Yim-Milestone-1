$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = 'views/' + $(this).data('include') + '.html'
      $(this).load(file)
    })

    document.title = "your site name"

  })

var fullQuestion = {

}

const linebreak = document.createElement("br");

function questionEnter(){
  var email = document.getElementById("question-user-email").value;
  var username = document.getElementById("question-user-name").value;
  var question = document.getElementById("question-input").value;
  var comments = document.getElementById("question-comments").value;
  var textbook = document.getElementById("question-textbook").value;
  var subject = document.getElementById("question-subject").value;
  var image = document.getElementById("question-image").value;

  if(username == "" || username == null){
    username = "Anonymous";
  }

  if(comments == "" || comments == null){
    comments = "No comments."
  }

  if(image == "" || image == null){
    image  = "No image."
  }


  fullQuestion = {

    userEmail: email,
    userName: username,
    userQuestion: question,
    userComments: comments,
    userTextbook: textbook,
    userSubject: subject,
    userImage: image
}
}

function clearQuestionEntryFields(){
  document.getElementById("question-user-email").value = "";
  document.getElementById("question-user-name").value = "";
  document.getElementById("question-input").value = "";
  document.getElementById("question-comments").value = "";
  document.getElementById("question-textbook").value = "";
  document.getElementById("question-subject").value = "";
  document.getElementById("question-image").value = "";
}

$(document).ready(function(){
  $('#question-submit-button').click(function(){
    questionEnter();
    clearQuestionEntryFields();
    console.log(fullQuestion);
    displayQuestion();
  });
});

function displayQuestion(){
  jQuery(document).ready(function() {
    $("#question-results").append("Entered Email: " + fullQuestion.userEmail + '\n');
    $("#question-results").append("Entered Username: " + fullQuestion.userName + '\n'); 
    $("#question-results").append("Entered Question: " + fullQuestion.userQuestion + '\n'); 
    $("#question-results").append("Entered Comments: " + fullQuestion.userComments + '\n'); 
    $("#question-results").append("Entered Textbook: " + fullQuestion.userTextbook + '\n'); 
    $("#question-results").append("Entered Subject: " + fullQuestion.userTextbook + '\n'); 
    $("#question-results").append("Entered Image: " + fullQuestion.userImage + '\n'); 
  });
}
