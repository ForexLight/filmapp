import Service from "../services/service";

export async function useFetchMain() {
    const responses = await Service.getMainPage()
    console.log(responses)
    let popularFilms = await responses[0];
    let topRated = await responses[1];
    let upcoming = await responses[2];
    return [popularFilms, topRated , upcoming]
}

export function useFetchFilm(id) {

}
