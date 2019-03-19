import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'A Whole New World',
            movie: 'Aladdin',
            year: 1992
        },
        {
            title: 'Part of Your World',
            movie: 'The Little Mermaid',
            year: 1989
        },
        {
            title: 'Hakuna Matata',
            movie: 'The Lion King',
            year: 1994
        },
        {
            title: 'Colors of the Wind',
            movie: 'Pocahontas',
            year: 1995
        }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});