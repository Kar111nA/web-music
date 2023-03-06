let container = document.querySelector(`.albums`);

let input = document.querySelector(`.form-contol`);

for(let i = 0; i<albums.length; i++) {
    let album = albums[i];
    container.innerHTML += `
    <div class="col">
        <a href="album.html?i=${i}" class="text-decoration-none">
            <div class="card">
                <img src="${album.img}" alt="" class="card-img-top">
                <div class="card-body">
                    <p class="card-text">${album.title}</p>
                </div>
            </div>
        </a>
    </div>
`
};

function searchBeTitle() {
    let search = input.value.toLowerCase();

    container.innerHTML = ``;

    for (let i = 0; i < album.length; i++) {
        let title = tracks[i].toLowerCase();

        if(title.includes(search)) {
            renderItem[i];
        }
    }
}