import React, { Component } from "react";

export default class Add extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div className="ad">
        {/* <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-xxxxxxxxxx"
          data-ad-slot="xxxxxxxxxx"
          data-ad-format="auto"
        /> */}

        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-9969212413329273"
          data-ad-slot="6306117942"
          data-ad-format="auto"
        ></ins>
      </div>
    );
  }
}
