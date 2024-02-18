import PropTypes from 'prop-types';

function SongTile({albumImgUrl, songName}) {

    return(
        <div>
            <img src={albumImgUrl}></img>
            <span>{songName}</span>
        </div>
    )

}

SongTile.propTypes = {
    albumImgUrl: PropTypes.string,
    songName: PropTypes.string
}

export default SongTile;