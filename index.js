<html lang="en">

<head>
    <title>Belajar Javascript</title>
</head>
<body>
    <h1>Tutorial Javascript untuk Pemula</h1>
    <div id="hasil-output-1"></div>
    <hr>
    <div id="hasil-output-2"></div>
<script> 
    // membuat objek elemen
    var hasil = document.getElementById("hasil-output-1");
    // menampilkan output ke elemen hasil
    hasil.innerHTML = "<p>Contoh menggunakan InnerHTML
1</p>";
    //atau bisa juga langsung seperti ini
    document.getElementById("hasil-output-2").innerHTML =
`<h1>Hello Winners!</h1>
<div>Ini adalah tutorial javascript dasar, contoh menggunakan
innerHTML. untuk tutorial lebih banyak silahkan lihat
<a href="https://polibang.ac.id" target="_blank"
rel="noopener noreferrer">disini</a>.
    </div>`;
</script>
</body>
</html>