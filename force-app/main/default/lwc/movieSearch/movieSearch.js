import { LightningElement } from 'lwc';
const Delay = 2000;
export default class MovieSearch extends LightningElement {
    valueOfStatus = '';
    movieValueChanged = '';
    loading = false;
    selectedPageNumber = '1';
    dataRecieved = [];
    showTileDisplaySection = false
    timeoutForCall;

    eventHandler(event){
        let {name ,value} = event.target;
        if(name === 'search'){
            this.movieValueChanged = value;
            console.log(this.movieValueChanged);
        }else if (name === 'input1'){
            this.selectedPageNumber = value;
        }else if (name === 'status'){
            this.valueOfStatus = value;
        }

        // clearTimeout(timeoutForCall);
    
        this.timeoutForCall = setTimeout(() => {
            this.callingSearchMethod();
            
        }, Delay);

        
        }

        // http://www.omdbapi.com/?s=Batman&page=2
        async callingSearchMethod(){
           
            // const url = `https://www.omdbapi.com/?s=${this.movieValueChanged}&type=${this.valueOfStatus}&page=${this.selectedPageNumber}&apikey=c9b0751e`;
            // const res = await fetch(url);
            // const data = await res.json();
            // console.log('movie names fetched',data); 
            
            // this.dataRecieved = data.Search;
            this.showTileDisplaySection = true;
            this.dataRecieved = [{"Title":"Captain America: The First Avenger","Year":"2011","imdbID":"tt0458339","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzUyM2YyY2MtNzNlMS00MWU5LTgxNjAtNzZlNmI2NjU2NDZlXkEyXkFqcGc@._V1_SX300.jpg"},
                {"Title":"The Toxic Avenger","Year":"1984","imdbID":"tt0090190","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDZjMGZjMDktOTZlNC00MTQ5LTkzY2UtZjM1MjE0NDcwNzk1XkEyXkFqcGc@._V1_SX300.jpg"},
                {"Title":"The Toxic Avenger Part II","Year":"1989","imdbID":"tt0098503","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYzZkNDhlMzUtMzc3Zi00MTJhLWFhMjEtN2IyOTM3NTZlODllXkEyXkFqcGc@._V1_SX300.jpg"},
                {"Title":"Citizen Toxie: The Toxic Avenger IV","Year":"2000","imdbID":"tt0212879","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOWU5NzE2ZjAtNjU5Yy00MTlmLWEyNzctYTA3NjNlNDFiMzVlXkEyXkFqcGc@._V1_SX300.jpg"},
                {"Title":"The Toxic Avenger Part III: The Last Temptation of Toxie","Year":"1989","imdbID":"tt0098502","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNmUxMDQ1ZjYtNDY3ZS00MzRjLWJhODYtMDY3ZGM1YWFkNmM3XkEyXkFqcGc@._V1_SX300.jpg"},
                {"Title":"Avenger","Year":"2006","imdbID":"tt0473445","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTMzMjMwMjcyNl5BMl5BanBnXkFtZTcwNTA1NDgzMQ@@._V1_SX300.jpg"},
                {"Title":"Knives of the Avenger","Year":"1966","imdbID":"tt0059045","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTQzNDgzMGEtZTU3OC00MGExLTk5YmYtODI5OTQwMmZkNzUyXkEyXkFqcGc@._V1_SX300.jpg"},
                {"Title":"Samurai Avenger: The Blind Wolf","Year":"2009","imdbID":"tt1243972","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZDc5YWQwMTEtNGQ1YS00NGNmLTkwZDMtOGNjNjJiZDNlM2E1XkEyXkFqcGc@._V1_SX300.jpg"},
                {"Title":"The Toxic Avenger","Year":"2023","imdbID":"tt1633359","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTVmYWE1NzMtZmFlMi00YjcyLTgwMTQtNjFkNWY5YjY2MTRkXkEyXkFqcGc@._V1_SX300.jpg"},
                {"Title":"The Avenger","Year":"1962","imdbID":"tt0056174","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMWJhYTYzZTAtMDMxYi00NDhjLTlkYzItYTQwNmI3M2NkYWIxXkEyXkFqcGc@._V1_SX300.jpg"}];

            // console.log('data search :', data.Search)
            console.log('data :', data)
            console.log('data recived :', this.dataRecieved);   
    }

    get picklistOptions() {
        return [
            { label: 'NONE', value: '' },
            { label: 'MOVIE', value: 'movie' },
            { label: 'SERIES', value: 'series' },
            { label: 'EPISODE', value: 'episode' }
        ];
    }

    
}