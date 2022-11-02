"use strict";

const firebaseConfig = {
  // Put your own firebase configuration here
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const postsEl = document.getElementById("posts");
const postFormEl = document.getElementById("postForm");

// Whenever the collection "posts" is updated in our db
// call this function
db.collection("posts")
  .orderBy("created")
  .onSnapshot(function (snapshot) {
    // Grab the array of documents and pass to our
    // renderPosts function
    renderPosts(snapshot.docs);
  });

// Listen to submits on our form
postFormEl.onsubmit = async function (event) {
  event.preventDefault();

  const nameInput = postFormEl.elements.name;
  const messageInput = postFormEl.elements.message;

  // Add a new document/row into our
  // posts collection in the database
  await db.collection("posts").add({
    name: nameInput.value,
    message: messageInput.value,
    created: Date.now(),
  });

  nameInput.value = "";
  messageInput.value = "";
};

function renderPosts(docs) {
  postsEl.innerHTML = "";

  // Loop through every document in our collection
  for (let doc of docs) {
    // Get the actual data for each document
    const data = post.data();

    // Output it to the HTML
    const postEl = document.createElement("div");
    postEl.innerHTML = `
        ${new Date(data.created).toLocaleString()}<br>
        ${data.name}:<br>
        ${data.message}
    `;
    postsEl.append(postEl);
  }
}
