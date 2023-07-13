const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const search = form.elements.query.value
    const config = {params:{q:search}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config)
    makeImg(res.data);
    form.elements.query.value = '';
})

const makeImg = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img')
            img.src = result.show.image.medium
            document.body.appendChild(img);
        }
    }    
}