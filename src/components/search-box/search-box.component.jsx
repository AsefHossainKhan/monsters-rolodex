import React from 'react';

import "./search-box.styles.css";

export const SearchBox = ( {changeHandler, placeholder} ) => (
  <input className="search"
  type="search"
  placeholder= {placeholder}
  onChange={ changeHandler }
></input>
);