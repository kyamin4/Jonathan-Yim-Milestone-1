$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = 'views/' + $(this).data('include') + '.html'
      $(this).load(file)
    })

    document.title = "your site name"

  })

function questionEnter(){
  var email = document.getElementById("question-user-email").value;
  var username = document.getElementById("question-user-name").value;
  var question = document.getElementById("question-input").value;
  var comments = document.getElementById("question-comments").value;
  var textbook = document.getElementById("question-textbook").value;
  var subject = document.getElementById("question-subject").value;
  var image = document.getElementById("question-image").value;

  if(username == null){
    username = "Anonymous";
  }
}

  var fullQuestion = {

    userEmail: email,
    userName: username,
    userQuestion: question,
    userComments: comments,
    userTextbook: textbook,
    userSubject: subject,
    userImage: image

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
