const commitResults = document.getElementById("commitResults");
const pullRequestResults = document.getElementById("pullRequestResults");

const getCommits = async () => {
  const url = "https://api.github.com/repos/pnp/PnP-Powershell/commits";
  const headers = {
    Accept: "application/vnd.github.cloak-preview",
  };
  const response = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  const result = await response.json();

  result.forEach((i) => {
    const a = document.createElement("a");
    a.href = i.html_url;
    a.textContent = i.commit.message.substr(0, 60) + "...";
    commitResults.appendChild(a);
    commitResults.appendChild(document.createElement("br"));
  });
};

const getPullRequest = async () => {
  const url = "https://api.github.com/repos/pnp/PnP-Powershell/pulls";
  const response = await fetch(url);
  const result = await response.json();

  result.forEach((i) => {
    const a = document.createElement("a");
    a.href = i.html_url;
    a.textContent =
      i.state.toUpperCase() + " - " + i.title.substr(0, 60) + "...";
    pullRequestResults.appendChild(a);
    pullRequestResults.appendChild(document.createElement("br"));
  });
};

addEventListener("load", getCommits);
addEventListener("load", getPullRequest);
