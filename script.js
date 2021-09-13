const dictionary = async() => {
    try {
        const mainAudio = await document.getElementById('audio')
        const moreAudio = await document.getElementById('mainAudio')
        const ex = await document.getElementById('ex')
        const heading = document.getElementById('heading').innerHTML = 'Definitions'
        const headingex = document.getElementById('headingex').innerHTML = 'Examples'
        const data = await document.getElementById('inp').value;
        const definition = await document.getElementById('definition');
        const url = await 'https://api.dictionaryapi.dev/api/v2/entries/en/' + data
        const fetchApi = await fetch(url)
        const jsonData = await fetchApi.json()
        definition.innerHTML = await '1. ' + jsonData[0].meanings[0].definitions[0].definition
        ex.innerHTML = await '1. ' + jsonData[0].meanings[0].definitions[0].example
        mainAudio.src = await jsonData[0].phonetics[0].audio
        moreAudio.load(); //call this to just preload the audio without playing
        moreAudio.play();
        document.querySelector('.errorh1').style.display = "none"
        mainAdda.style.display = "block"

    } catch (error) {
        if (error) {
            const errorMain = document.getElementById('error')
                // errorMain.innerHTML = 'please enter the name correctly'
            const h1 = document.createElement('h1')
            h1.className = "errorh1"
            errorMain.appendChild(h1).innerHTML = 'Opps! please enter the name correctly'
            const mainAdda = document.getElementById('mainAdda')
            mainAdda.style.display = "none"
        }
    }


}



// ex2.innerHTML = await '2. ' + jsonData[0].meanings[1].definitions[0].example
//   if (ex.innerHTML === 'undefined') {
//     console.log('hey')
// }
// seconddef.innerHTML = await '2. ' + jsonData[0].meanings[0].definitions[1].definition