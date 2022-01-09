
// https://api.themoviedb.org/3/movie?api_key=4f6180974989b4115cfd59034eb82ace&query=Matrix
// https://api.themoviedb.org/3/search/movie?api_key=4f6180974989b4115cfd59034eb82ace&query=Spider+Man

export default class InitData {
    constructor() {
        this._API = 'https://api.themoviedb.org/3/search'
        this._ApiKey = '?api_key=4f6180974989b4115cfd59034eb82ace'
        this._IdSearch = 'https://api.themoviedb.org/3/movie/'
    }

    async getData (url){
        console.log(`${this._API}${this._ApiKey}${url}`)
        const res = await fetch(`${this._API}/movie${this._ApiKey}${url}`)

        if(!res.ok){
            throw new Error(`don't fetch ${url}, status: ${res.status}`)
        }

        return  res.json()
    }
    async getDetails (id){
        const res = await fetch(`${this._IdSearch}${id}${this._ApiKey}&language=en-US&page=1&include_adult=false`)
        console.log(`${this._IdSearch}${id}${this._ApiKey}`)
        if(!res.ok){
            throw new Error(`don't fetch movie with ${id}, status: ${res.status}`)
        }
        return res.json()
    }

     searchByQuery (str){
        str = str.split(' ').join('+')
        return  this.getData(`&query=${str}`)
    }

    searchById(id){
        return this.getDetails(id)
    }
}




