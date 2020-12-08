import React from 'react';
// font awesome = 'fa' no className

export default props => (
  <li>
    <a href={props.path}>
      <i className={`fa fa-${props.icon}`}></i> {props.label}
    </a>
  </li>
);
