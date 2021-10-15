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

  var isQuestionValid = false;
  
function questionEnter(){
var email = document.getElementById("question_user_email");
var username = document.getElementById("question_user_name");
var question = document.getElementById("question_input");
var comments = document.getElementById("question_comments");
var textbook = document.getElementById("question_textbook");
var subject = document.getElementById("question_subject");
var image = document.getElementById("question_file");

if(email.value === "" || email.value === null || question.value === "" || question.value === null){
  alert("Please make sure to write an email and question!");
  return
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



if(username.value === "" || username.value === null){
  fullQuestion.userName = "Anonymous";
}
if(comments.value === "" || comments.value === null){
  fullQuestion.userComments = "No comments.";
}
if(image.value === "" || image.value === null){
  fullQuestion.userImage  = "No image.";
}
if(subject.value === "Choose..."){
  fullQuestion.userSubject = "N/A or Other";
}
if(textbook.value === "" || textbook.value === null){
  fullQuestion.userTextbook = "No textbook specified.";
}

console.log(fullQuestion);
console.log("Question entered!");
isQuestionValid = true;
}

function clearQuestionEntryFields(){
document.getElementById("question_user_email").value = "";
document.getElementById("question_user_name").value = "";
document.getElementById("question_input").value = "";
document.getElementById("question_comments").value = "";
document.getElementById("question_textbook").value = "";
document.getElementById("question_subject").value = "";
document.getElementById("question_file").value = "";
console.log("Clear entry fields done!");
}

function run_question_full(){
  console.log("Submit button clicked!");
  isQuestionValid = false;
  questionEnter();
  if(isQuestionValid === false){
    return
  }
  displayQuestion();
  clearQuestionEntryFields();
}

function displayQuestion(){
  var output = "Entered Email: " + fullQuestion.userEmail + '\n' + "Entered Username: " + fullQuestion.userName + '\n' + "Entered Question: " + fullQuestion.userQuestion + '\n' + "Entered Comments: " + fullQuestion.userComments + '\n' + "Entered Textbook: " + fullQuestion.userTextbook + '\n' + "Entered Subject: " + fullQuestion.userSubject + '\n' + "Entered Image: " + fullQuestion.userImage;
document.getElementById("question_results").innerText = output;
console.log("Display questions done!");
}
