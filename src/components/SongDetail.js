import React from 'react'
import { connect } from 'react-redux';

class SongDetail extends React.Component {
    render () {
        const { song } = this.props
        if (!song) {
            return <div><h3>Select a song</h3></div>
        }  
        return (
            <div className='item'>
                    <div className='left floated content'>
                        <h3>Details for:</h3>
                        <div className='content'>
                            {song.title}
                        </div>
                        <br />
                        <div className='content'>
                            {song.duration}
                        </div>
                    </div>
            </div>
        )
    }
}

                

const mapSateToProps  = state => {
    console.log(state)
    return { song: state.selectedSong }
}

export default connect(mapSateToProps)(SongDetail);