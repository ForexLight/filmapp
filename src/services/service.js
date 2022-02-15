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
    static async getFilmPage(id) {

        let data = await api.get(id).then(res => res.data)

        let credits = await api.get(`${id}/credits`).then(res =>  {
            return {cast: [...res.data.cast], crew: [...res.data.crew]}
        })

        let video = await api.get(`${id}/videos`).then(res => res.data.results.filter(i => i.type === 'Trailer'))

        return [data, credits, video]
    }
}