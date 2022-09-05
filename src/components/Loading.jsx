import React from 'react';
import { Dna } from 'react-loader-spinner';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const Loading = () => (
  <div className="flex justify-center items-center">
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </div>
);

