let container = document.querySelector(`.album`);

let search = new URLSearchParams(window.location.search);

let i = search.get(`i`);

let album = albums[i]
container.innerHTML = `
<div class="card mb-3">
    <div class="row">
        <div class="col-4">
            <img src="${album.img}" alt="" class="img-fluid rounded-start">        
        </div>
            <div class="col-8">
                <div class="card-body">
                    <h5 class="card-title">${album.title}</h5>
                    <p class="card-text">${album.description}</p>
                    <p class="card-text">
                        <small class="text-muted">
                            Сборник выпущен в ${album.year} году
                        </small></p>
                </div>
            </div>
    </div>
</div>
`

let playlist = document.querySelector(`.playlist`);

let tracks = album.tracks;

for(let j = 0; j < tracks.length; j++) {
    let track = tracks[j];
    playlist.innerHTML += `
    <li class="track list-group-item d-flex align-items-center">
        <img src="assets/album.play.png" alt="" class="me-3 img-pause" height="30px">
        <img src="assets/album.playing.png" alt="" class="me-3 img-play d-none" height="30px">
            <div>
                <div>${track.title}</div>
                <div class="text-secondary">${track.author}</div>
            </div>
        <div class="ms-auto">${track.time}</div>
        <audio class="audio" src="${track.src}"></div></audio>
    </li>
    `
    }

    function setupAudio() {
        // Найди коллекцию с треками
        let trackNodes = document.querySelectorAll(`.track`); 
        for (let i = 0; i < trackNodes.length; i++) { 
            // Один элемент
            let node = trackNodes[i];
            let imgPause = node.querySelector(`.img-pause`);
            let imgPlay = node.querySelector(`.img-play`);

            // Тег аудио внутри этого элемента
            let audio = node.querySelector(`.audio`); 

            let isPlaying = false;
            node.addEventListener(`click`, function () {
            if (isPlaying) {
            isPlaying = false;
            audio.pause();
            imgPause.classList.remove(`d-none`);
            imgPlay.classList.add(`d-none`);
            } else {
            isPlaying = true;
            audio.play();
            imgPause.classList.add(`d-none`);
            imgPlay.classList.remove(`d-none`);
            }
        });   
        }
    };
    setupAudio()

    



    
    
    



