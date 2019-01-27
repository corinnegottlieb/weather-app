
const tempManager = new TempManager()
const renderer = new Renderer()

const loadPage = async () => {
await tempManager.getDataFromDB() 
renderer.renderData(tempManager.cityData)
}

const handleSearch = async function(){
    let input = $(`#input`).val()
   await tempManager.getCityData(input)
    renderer.renderData(tempManager.cityData)
}
$(`#search`).click(function(){
    handleSearch()
})

$(`#search-results`).on("click", "#save", function(){
    let cityName = $(this).closest(".city").find(".cityName").text()
    tempManager.saveCity(cityName)
})

$(`#search-results`).on("click", "#delete", function(){
    let cityName = $(this).closest(".city").find(".cityName").text()
    tempManager.removeCity(cityName)
    loadPage()
})

// $(`#search-results`).on("click", "#refresh", function(){
//     let cityName = $(this).closest(".city").find(".cityName").text()
//     tempManager.updateCity(cityName)
//     loadPage()
// })

loadPage()