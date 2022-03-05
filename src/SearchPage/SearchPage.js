import React from 'react';
import './SearchPage.css';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className='search'>
      <div className='search-filter'>
        <FilterAltOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />

      <ChannelRow image='https://yt3.ggpht.com/ytc/AKedOLRLwndAv1FiMnCf57Cyun0OCC8jzladn_xtPYw=s176-c-k-c0x00ffffff-no-rj'
                  channel='Cigars Daily'
                  verified
                  subscribes='142K'
                  nrOfVideos={960}
                  description="If you're looking for the perfect first cigar, look no further. I'm taking you through 5 of the best beginner cigars out there, along with some helpful tips on how to pick your first stick" 
      />
      <hr />

      <VideoRow views='1M'
                 subscribes='2K'
                 description="My guest for this special edition of Cigars Daily LIVE is Rocky Patel! He is one of, if not, the most recognizable name in the cigar world today! We'll be chatting about some of his blends (like the new A.L.R)."
                 image='https://i.ytimg.com/vi/qB4KeercMsA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEn0hqBnZ4yT2OhB1WEygGZzl2gw'
                 title='Cigars Daily LIVE (f. Rocky Patel)'
                 channel='Cigars Daily'
                 timestamp='1 minute ago'
      />
      <VideoRow views='1M'
                 subscribes='2K'
                 description="My guest for this special edition of Cigars Daily LIVE is Rocky Patel! He is one of, if not, the most recognizable name in the cigar world today! We'll be chatting about some of his blends (like the new A.L.R)."
                 image='https://i.ytimg.com/vi/qB4KeercMsA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEn0hqBnZ4yT2OhB1WEygGZzl2gw'
                 title='Cigars Daily LIVE (f. Rocky Patel)'
                 channel='Cigars Daily'
                 timestamp='1 minute ago'
      />
      <VideoRow views='1M'
                 subscribes='2K'
                 description="My guest for this special edition of Cigars Daily LIVE is Rocky Patel! He is one of, if not, the most recognizable name in the cigar world today! We'll be chatting about some of his blends (like the new A.L.R)."
                 image='https://i.ytimg.com/vi/qB4KeercMsA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEn0hqBnZ4yT2OhB1WEygGZzl2gw'
                 title='Cigars Daily LIVE (f. Rocky Patel)'
                 channel='Cigars Daily'
                 timestamp='1 minute ago'
      />
    </div>
  )
}

export default SearchPage
