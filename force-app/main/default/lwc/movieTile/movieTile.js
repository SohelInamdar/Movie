import { LightningElement,api } from 'lwc';

export default class MovieTile extends LightningElement {
    @api movie;
    @api showTile = false;
    @api selectedMovieId;
    
    onclickHandler(event){

        this.dispatchEvent(new CustomEvent('send',{detail: this.movie.imdbID}));
    }

    get getSeletedTile(){
        return this.selectedMovieId === this.movie.imdbID ?  'selectedTile' : 'outerTile';
    }
}