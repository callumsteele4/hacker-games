import React from 'react';

const style = {
  textIndent: 0,
  textTransform: 'none',
  direction: 'ltr',
  blockProgression: 'tb',
  baselineShift: 'baseline',
  enableBackground: 'accumulate'
}

const container = {
  width: 30,
  height: 30,
  cursor: 'pointer',
  paddingTop: 3
}

const Cross = ({ onClick }) => (
  <svg style={container} viewBox="0 0 50 62.5" onClick={onClick}>
    <g transform="translate(0,-1002.3622)">
      <path style={style} d="m 15.024619,1014.3659 c -0.77312,0 -1.54992,0.2912 -2.13983,0.8812 -1.17968,1.1797 -1.17975,3.1001 0,4.2796 l 7.83554,7.8356 -7.83554,7.8354 c -1.17975,1.1797 -1.17968,3.1001 0,4.2797 1.17983,1.1798 3.09994,1.1798 4.27965,0 l 7.835539,-7.8356 7.83555,7.8356 c 1.1797,1.1798 3.09991,1.1798 4.27965,0 1.17976,-1.1798 1.17976,-3.0998 0,-4.2797 l -7.83554,-7.8354 7.83554,-7.8356 c 1.17976,-1.1798 1.17976,-3.0997 0,-4.2796 -1.17974,-1.1798 -3.09995,-1.1798 -4.27965,0 l -7.83555,7.8356 -7.835539,-7.8356 c -0.58985,-0.59 -1.36671,-0.881 -2.13982,-0.8812 z" fill="white" stroke="none" fillOpacity="1" visibility="visible" display="inline" overflow="visible"/>
    </g>
  </svg>
)

export default Cross;