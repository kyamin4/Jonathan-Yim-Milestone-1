$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = 'views/' + $(this).data('include') + '.html'
      $(this).load(file)
    })

    document.title = "gg go next"

  })


var fullQuestion = {

}

function questionEnter(){
  var email = document.getElementById("question_user_email");
  var username = document.getElementById("question_user_name");
  var question = document.getElementById("question_input");
  var comments = document.getElementById("question_comments");
  var textbook = document.getElementById("question_textbook");
  var subject = document.getElementById("question_subject");
  var image = document.getElementById("question_file");

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
    userEmail: email.value,
    userName: username.value,
    userQuestion: question.value,
    userComments: comments.value,
    userTextbook: textbook.value,
    userSubject: subject.value,
    userImage: image.value
  }
  console.log(fullQuestion);
}

function clearQuestionEntryFields(){
  document.getElementById("question_user_email").value = "";
  document.getElementById("question_user_name").value = "";
  document.getElementById("question_input").value = "";
  document.getElementById("question_comments").value = "";
  document.getElementById("question_textbook").value = "";
  document.getElementById("question_subject").value = "";
  document.getElementById("question_file").value = "";
}

  $("#question_submit").click(function(){
    console.log("Submit button clicked!")
    questionEnter();
    displayQuestion();
    clearQuestionEntryFields();
  });

function displayQuestion(){
    $("#question_results").append("Entered Email: " + fullQuestion.userEmail + '\n');
    $("#question_results").append("Entered Username: " + fullQuestion.userName + '\n'); 
    $("#question_results").append("Entered Question: " + fullQuestion.userQuestion + '\n'); 
    $("#question_results").append("Entered Comments: " + fullQuestion.userComments + '\n'); 
    $("#question_results").append("Entered Textbook: " + fullQuestion.userTextbook + '\n'); 
    $("#question_results").append("Entered Subject: " + fullQuestion.userTextbook + '\n'); 
    $("#question_results").append("Entered Image: " + fullQuestion.userImage + '\n'); 
}
