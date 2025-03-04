import { LightningElement } from 'lwc';
const Delay = 2000;
export default class MovieSearch extends LightningElement {
    valueOfStatus = '';
    movieValueChanged = '';
    loading = false;
    selectedPageNumber = '1';
    dataRecieved = [];
    
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
           
            const url = `https://www.omdbapi.com/?s=${this.movieValueChanged}&type=${this.valueOfStatus}&page=${this.selectedPageNumber}&apikey=c9b0751e`;
            const res = await fetch(url);
            const data = res.json();
            console.log('movie names fetched',data);   
            this.dataRecieved = data;
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