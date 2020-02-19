import React from 'react';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';

class App extends React.Component {
    render () {
        return (
            <div>
                <SongList />
            </div>
        )
    }
}

export default App