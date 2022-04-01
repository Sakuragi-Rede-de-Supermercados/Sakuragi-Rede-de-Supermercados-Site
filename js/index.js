let sakuragi = document.querySelector("#sakuragi"), footer = document.querySelector("#footer");
let musica = 0;

sakuragi.addEventListener("click", () => {
    if (musica === 0) {
        footer.innerHTML = `<img id="sakuragi" class="logo" src="midias/super-sakuragi-logo.svg" alt="logo do site">
                            <audio autoplay="true" src="midias/tokyo-drift.mp3"></audio>`
        musica++;

        setTimeout(() => {
            footer.innerHTML = `<img id="sakuragi" class="logo" src="midias/super-sakuragi-logo.svg" alt="logo do site">`;
            musica = 0;
        }, 255000);
        
    }
});