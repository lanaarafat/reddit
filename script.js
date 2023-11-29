function postToServer() {
    var postContent = document.getElementById('postContent').value;
    var postImage = document.getElementById('postImage').files[0];

    // Perform client-side validation if needed

    // Create a FormData object to send data
    var formData = new FormData();
    formData.append('post_content', postContent);
    formData.append('post_image', postImage);

    // Send data to the server using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'post.php', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Handle the response, e.g., display newly posted content
            fetchPosts();
        }
    };
    xhr.send(formData);
}

function fetchPosts() {
    // Perform an AJAX request to fetch and display posts
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'display_posts.php', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('postsContainer').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}