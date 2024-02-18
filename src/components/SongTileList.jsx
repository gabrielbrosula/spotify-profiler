import PropTypes from 'prop-types';

function SongTileList( songData ) {

    // Parse the songData jsonObject
    // Render a list of SongTiles
    // TODO: Make the list item rendering logic match up with the data!

    const listItems = songData.map(
        song => {
            <li key={song.id}>
                <SongTileList albumImgUrl={song.url} songName={song.name}/>
            </li>
        }
    )
    return <ul>{listItems}</ul>

}

SongTileList.propTypes = {
    songData: PropTypes.object
}

export default SongTileList;