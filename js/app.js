// alert("Dit is mijn eerste typescriptproject!!");
function show_winner() {
    let carou_01;
    let img_01;
    carou_01 = document.querySelector("#carouselExampleSlidesOnly");
    img_01 = document.querySelector("#img_01");
    carou_01.style.display = "none";
    img_01.setAttribute("src", "./img/ferguson_vs_pettis.png");
    img_01.style.display = "block";
}
