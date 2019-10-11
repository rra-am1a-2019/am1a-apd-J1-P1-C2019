// alert("Dit is mijn eerste typescriptproject!!");
function show_winner(): void {
  let carou_01: HTMLDivElement;
  let img_01: HTMLImageElement;

  carou_01 = document.querySelector("#carouselExampleSlidesOnly");
  img_01 = document.querySelector("#img_01");

  carou_01.style.display = "none";
  img_01.setAttribute("src", "./img/ferguson_vs_pettis.png");
  img_01.style.display = "block";
}
