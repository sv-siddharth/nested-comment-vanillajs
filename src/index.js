let commentContainer = document.getElementById("comment-container");

commentContainer.addEventListener("click", function (e) {
  let replyCicked = e.target.classList.contains("reply");
  let submitCicked = e.target.classList.contains("submit");
  let closestCard = e.target.closest(".all-comment");

  if (replyCicked) {
    // add input box
    closestCard.appendChild(createInputBox());
  }

  if (submitCicked) {
    // add reply card
    const commentDetails = e.target.closest(".comment-details");
    if (commentDetails.children[0].value) {
      closestCard.appendChild(addReply(commentDetails.children[0].value));
      commentDetails.remove();
    }
  }
});

function createInputBox() {
  let div = document.createElement("div");
  div.setAttribute("class", "comment-details");
  div.innerHTML += `<input type="text" placeholder="add text here" class="input" />
    <button class="btn submit">Submit</button>`;

  return div;
}

function addReply(text) {
  let div = document.createElement("div");
  div.setAttribute("class", "all-comment");

  div.innerHTML += `<div class="card">
    <span class="text">${text}</span>
    <span id="reply" class="reply">
      Add Reply
    </span>
  </div>`;

  return div;
}
