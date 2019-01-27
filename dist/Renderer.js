class Renderer {
    constructor(){}
    renderData(allCityData){
            const source = $(`#weather-template`).html()
            const template = Handlebars.compile(source)
            let newHTML = template({allCityData})
            $(`#search-results`).empty().append(newHTML)
        } 
    }

