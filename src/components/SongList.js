import React from 'react'
import { connect } from 'react-redux';

class SongList extends React.Component {
    render () {
        //this.props === { songs: state.songs }
        return (
            <div>Song List</div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.songs)
    return { songs: state.songs }
}

export default connect(mapStateToProps)(SongList);