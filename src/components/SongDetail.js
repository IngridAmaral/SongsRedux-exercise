import React from 'react'
import { connect } from 'react-redux';

class SongDetail extends React.Component {
    render () {
        const { song } = this.props
        if (!song) {
            return <div>Select a song</div>
        }  
        return (
            <div className='item'>
                    <div className='left floated content'>
                        <div className='content'>
                            {song.title}
                        </div>
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