"use strict";

var playlists = [{
  img: "https://assets-a1.kompasiana.com/items/album/2021/05/21/images-jpeg-8-60a7d25b8ede4819bf3899a5.jpg",
  title: "Unravel",
  artist: "Tosite",
  albums: "From Ling  tosite"
}];

var renderTable = function renderTable() {
  playlists.forEach(function (_ref) {
    var title = _ref.title,
        albums = _ref.albums,
        img = _ref.img,
        artist = _ref.artist;
    var table = document.getElementById("data").getElementsByTagName("tbody")[0];
    table.insertRow().innerHTML = "<td style={width:'50px'}><img src='".concat(img, "'/></td><td>").concat(title, "</td><td>").concat(artist, "</td><td>").concat(albums, "</td>");
  });
};

renderTable();
document.getElementById("submit").addEventListener("click", function () {
  var judul = document.getElementById('title').value;
  var artist = document.getElementById("artist").value;
  var albums = document.getElementById("albums").value;
  var img = document.getElementById("images").value;
  playlists.push({
    'img': img,
    'title': judul,
    'artist': artist,
    'albums': albums
  });
  playlists.forEach(function (_ref2) {
    var title = _ref2.title,
        albums = _ref2.albums,
        img = _ref2.img,
        artist = _ref2.artist;
    var table = document.getElementById("data").getElementsByTagName("tbody")[0];
    table.insertRow().innerHTML = "<td style={width:'50px'}><img src='".concat(img, "'/></td><td>").concat(title, "</td><td>").concat(artist, "</td><td>").concat(albums, "</td>");
  });
  console.log(playlists);
  alert('ok');
});