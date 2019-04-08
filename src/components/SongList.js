import React from 'react';
import { connect } from 'react-redux';

import { selectSong } from '../actions';

import './SongList.scss';

class SongList extends React.Component {
  renderList() {
    return (this.props.songs || [])
      .map((song, index) => {
        return (
          <li className="song-list__li" key={index}>
            <div className="song">
              <div className="song__title">{song.title}</div>
              <div className="song__action">
                <button onClick={() => this.props.selectSong(song)}>Select</button>
              </div>
            </div>
          </li>
        );
      });
  }

  render() {
    return (
      <div className="song-list">
        <div>Song List</div>
        <ul className="song-list__ul">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList);