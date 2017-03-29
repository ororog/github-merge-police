function disableMerge() {
  var numCommits = $('#commits_tab_counter').first().text().trim() || 0;
  var prTitle = $('.js-issue-title').first().text().trim() || '';
  var commitMessage = $('.commit-message .message').last().text().trim() || '';

  var disableMerge = numCommits != 1 || prTitle != commitMessage;
  $('.merge-message button').prop('disabled', disableMerge);
}


$(function() {
  disableMerge();

  var mutationObserver = new MutationObserver(function(a, b) {
    disableMerge();
  });
  mutationObserver.observe(document.getElementsByTagName('head')[0], {
    childList: true
  });
});
