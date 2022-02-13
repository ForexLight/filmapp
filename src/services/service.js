import api from "../axios";

export default class Service {
    static async getMainPage() {
        let popularFilms = await api.get('popular')
        let topRated = await api.get('top_rated')
        let upcoming = await api.get('upcoming')
        popularFilms = popularFilms.data.results
        topRated = topRated.data.results
        upcoming = upcoming.data.results
        return [popularFilms, topRated , upcoming]
    }
    static getFilmPage(id) {

    }
}