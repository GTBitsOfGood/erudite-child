import React from 'react';

class Newsfeed extends React.Component {
  render(props) {
      return(
          <div>
            <a class="twitter-timeline" href="https://twitter.com/TwitterDev/timelines/539487832448843776?ref_src=twsrc%5Etfw">National Park Tweets - Curated tweets by TwitterDev</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
     )
  }
}