// Trích xuất ID từ URL YouTube
function extractYouTubeID(url) {
    const regex = /(?:\?v=|\/embed\/|\/v\/|youtu\.be\/|\/watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regex);
    return match && match[1] ? match[1] : null;
}

// Tạo liên kết nhúng từ ID YouTube
function generateEmbedLink() {
    const urlInput = document.getElementById("youtube-url").value;
    const videoID = extractYouTubeID(urlInput);

    console.log("Video ID:", videoID); // Kiểm tra ID có hợp lệ không

    if (videoID) {
        const embedLink = `https://www.youtube.com/embed/${videoID}`;
        document.getElementById("embed-link").value = embedLink;
        alert("The link has been created!");
    } else {
        alert("Please enter a valid URL.");
    }
}

// Sao chép liên kết nhúng vào clipboard
function copyToClipboard() {
    const embedLinkField = document.getElementById("embed-link");
    embedLinkField.select();
    embedLinkField.setSelectionRange(0, 99999); // Đảm bảo hoạt động trên mobile
    navigator.clipboard.writeText(embedLinkField.value).then(() => {
        alert("The link has been copied to the clipboard!");
    }, (err) => {
        alert("An error occurred while copying:" + err);
    });
}

// Gán sự kiện click cho các nút
document.getElementById("generate-link").addEventListener("click", generateEmbedLink);
document.getElementById("copy-link").addEventListener("click", copyToClipboard);
