//2
function showRepositories() {
    //this is set to the XMLHttpRequest object that fired the event
    //this.responseText to see the full body of the response from our XHR request
    var repos = JSON.parse(this.responseText);
    console.log(repos);
    const repoList = `<ul>${repos
        .map(
            r =>
              '<li>' +
              r.name +
              ' - <a href="#" data-repo="' +
              r.name +
              '" onclick="getCommits(this)">Get Commits</a></li>'
          )
          .join('')}</ul>`;
    document.getElementById('repositories').innerHTML = repoList;
    // console.log(this.responseText);  
    // let repoList = '<ul>';
    // for (var i = 0; i < this.responseText.length; i++) {
    //     repoList += '<li>' + this.responseText[i]['name'] + '</li>';
    // }
    // repoList += '</ul>';
    // document.getElementById('repositories').innerHTML = repoList;
}

//4
function showCommits() {
    const commits = JSON.parse(this.responseText);
    const commitsList = `<ul>${commits
      .map(
        commit =>
          '<li><strong>' +
          commit.author.login +
          '</strong> - ' +
          commit.commit.message +
          '</li>'
      )
      .join('')}</ul>`;
    document.getElementById('commits').innerHTML = commitsList;
  }
  


//1
function getRepositories() {
    const req = new XMLHttpRequest();
    req.addEventListener('load', showRepositories); //callback function :that will get called when the event fires
    req.open('GET', 'https://api.github.com/users/octocat/repos');
    req.send();
}

//3
function getCommits(el) {
    const name = el.dataset.repo;
    const req = new XMLHttpRequest();
    req.addEventListener('load', showCommits);
    req.open('GET', 'https://api.github.com/repos/octocat/' + name + '/commits');
    req.send();
  }