/* Edit this to your email */
var email_to = '';

//global config
var from_name = 'Kindle Highlights';
var num_to_send = Math.floor(Math.random() * 5 + 1);
var email_subject = 'Your kindle highlights for today';

var snippet_tab_name = 'www.clippings.io';

//kick off function
function main(){
  shuffleSheet();
  snippets = getSnippets();
  if (snippets){
    sendEmail(snippets);
  }
}

function sendEmail(snippets){
  html_array = ['<h3>Your kindle highlights for today</h3>','<ul>'];
  for (i in snippets){
    html_array.push("<li><b>"+ snippets[i]['title'] + "</b></li><ul>" + "<li>"+ snippets[i]['author'] + "</li>" + "<li>\'"+ snippets[i]['snippet'] + "\'</li>");
    //only add page if avalible
    if (snippets[i]['page']){
      html_array.push("<li>Pg. "+ snippets[i]['page']); 
    }
    html_array.push("</li></ul>"); 
  }
  html_array.push('</ul>');

  message = html_array.join('');
  MailApp.sendEmail({
    name: from_name,
    to: email_to,
    subject: email_subject,
    htmlBody: message
  });
}

function getSnippets() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(snippet_tab_name);
  var range = sheet.getDataRange();
  range= range.getValues(); 
  
  snippets = {}
  
  if (range) {
    for (var i = 0; i < num_to_send; i++){
      snippets[i] = ({
        title: range[i][0],
        author: range[i][1],
        page: range[i][5],
        snippet: range[i][6],
      })
    }
  }
  return snippets;
}

function shuffleSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(snippet_tab_name);
  var range = sheet.getDataRange();
  range.setValues(shuffleArray(range.getValues()));    
}    

function shuffleArray(array) {
  var i, j, temp;
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
