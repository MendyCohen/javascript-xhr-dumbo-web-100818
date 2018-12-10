function showCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsList = `<ul>${commits
    .map(
      commit =>
        "<li><strong>" +
        commit.commit.author.name +
        "</strong> - " +
        commit.commit.message +
        "</li>"
    )
    .join("")}</ul>`;
  document.getElementById("commits").innerHTML = commitsList;
}
