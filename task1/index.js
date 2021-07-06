const playlists = [{ img :"https://assets-a1.kompasiana.com/items/album/2021/05/21/images-jpeg-8-60a7d25b8ede4819bf3899a5.jpg" , title: "Unravel", artist: "Tosite",albums:"From Ling  tosite" }];



const renderTable = () => {
    playlists.forEach(({ title, albums,img,artist }) => {
        let table = document
        .getElementById("data")
        .getElementsByTagName("tbody")[0];
        
        table.insertRow().innerHTML = `<td style={width:'50px'}><img src='${img}'/></td><td>${title}</td><td>${artist}</td><td>${albums}</td>`;
    });
};

renderTable();

document.getElementById("submit").addEventListener("click", () => {
    var judul = document.getElementById('title').value
    var artist = document.getElementById("artist").value;
    var albums = document.getElementById("albums").value;
    var img = document.getElementById("images").value;
    playlists.push({'img':img,'title':judul,'artist':artist,'albums':albums});
    playlists.forEach(({ title, albums,img,artist }) => {
        let table = document
        .getElementById("data")
        .getElementsByTagName("tbody")[0];
        
        table.insertRow().innerHTML = `<td style={width:'50px'}><img src='${img}'/></td><td>${title}</td><td>${artist}</td><td>${albums}</td>`;
    });
    console.log(playlists)
  alert('ok');
});
