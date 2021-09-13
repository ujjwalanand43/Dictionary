const dictionary = async(e) => {
    // const defaultLoad = await e.preventDefault();
    const mainAudio = document.getElementById('audio')
    const moreAudio = document.getElementById('mainAudio')
    const ex = document.getElementById('ex')
    const heading = document.getElementById('heading').innerHTML = 'Definitions'
    const headingex = document.getElementById('headingex').innerHTML = 'Examples'
    const ex2 = document.getElementById('ex2')
    const seconddef = document.getElementById('seconddef')
    const data = await document.getElementById('inp').value;
    const definition = document.getElementById('definition');
    const url = await 'https://api.dictionaryapi.dev/api/v2/entries/en/' + data
        // const audio = await '//ssl.gstatic.com/dictionary/static/sounds/20200429/' + data + '--_gb_1.mp3'
    const fetchApi = await fetch(url)
    const jsonData = await fetchApi.json()
    definition.innerHTML = await '1. ' + jsonData[0].meanings[0].definitions[0].definition
    ex.innerHTML = await '1. ' + jsonData[0].meanings[0].definitions[0].example
    seconddef.innerHTML = await '2. ' + jsonData[0].meanings[1].definitions[0].definition
    ex2.innerHTML = await '2. ' + jsonData[0].meanings[1].definitions[0].example
    mainAudio.src = await jsonData[0].phonetics[0].audio
    moreAudio.load(); //call this to just preload the audio without playing
    moreAudio.play();

}