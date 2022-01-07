
// https://api.themoviedb.org/3/movie?api_key=4f6180974989b4115cfd59034eb82ace&query=Matrix
// https://api.themoviedb.org/3/search/movie?api_key=4f6180974989b4115cfd59034eb82ace&query=Spider+Man

class InitData {
    constructor() {
        this._API = 'https://api.themoviedb.org/3/search/movie?api_key='
        this._ApiKey = '4f6180974989b4115cfd59034eb82ace'
    }

    async getData (url){
        console.log(`${this._API}${this._ApiKey}${url}`)
        const res = await fetch(`${this._API}${this._ApiKey}${url}`)


        if(!res.ok){
            throw new Error(`don't fetch ${url}, status: ${res.status}`)
        }

        return await res.json()
    }

    searchByQuery (str){
        str = str.split(' ').join('+')
        return this.getData(`&query=${str}`)
    }
}
let a
const data = new InitData();
let filmSearch = data.searchByQuery('Matrix')
    .then( res => res)

const getDataFromPromiss = async () => {
    a = await filmSearch
    console.log(a.results.sort((a, b) => b.vote_average - a.vote_average))
}
getDataFromPromiss()