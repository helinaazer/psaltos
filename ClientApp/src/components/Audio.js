import React, { Component } from "react";
import { AudioPlayer } from "./AudioPlayer";
// import  epouro from "./epouro.mp3";

export class Audio extends Component {
  static displayName = Audio.name;

  render() {
    return (
      <div>
        <p>
          Audio Player using URL: hearing a normal person talk in different
          speeds{" "}
        </p>
        <AudioPlayer
          src={
            "https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
          }
        />

        <p> Audio Player using URL: Amen Amen Amen</p>
        <AudioPlayer
          src={
            "	https://test-bucket-hymns.s3.amazonaws.com/1679430872791.amen.mp3"
          }
        />

        <p> Audio Player using URL: Epouro</p>
        <AudioPlayer
          src={
            "https://test-bucket-hymns.s3.amazonaws.com/1679431006526.epouro.mp3"
          }
        />

        {/* <p>Audio Player using URL: Epouro</p>
        <AudioPlayer src={epouro} /> */}

      </div>
    );
  }
}
