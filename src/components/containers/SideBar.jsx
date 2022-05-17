import * as React from 'react';
import PropButton from '../PropButton';
import Button from '@mui/material/Button';


const SideBar = ({ savedProps, currentProp, setCurrentProp }) => {
  //add stateful property to each prop drop
  const sidePropElement = savedProps.map((property) => {
    <PropButton
      propName={property.propName}
      property={property}
      currentProp={currentProp}
      //for editing purposes? or would we need setSavedProps?
      setCurrentProp={setCurrentProp}
    />;
  });

  return (
    <div className="side_container">
      <h2>This is housing the sidebar</h2>
      <PropButton/>
      {sidePropElement}
    </div>
  );
};

export default SideBar;














// ⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆
// ⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿
// ⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀
// ⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
// ⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉


// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠖⠖⠤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠠⢿⣦⣀⣾⣓⣦⡀⣠⣞⡧⣤⡾⠇⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡿⠻⢿⡝⠉⠻⠯⠟⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡗⣶⡛⠓⠒⠒⠙⢦⡝⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠏⠇⠘⠃⠒⠀⠈⠁⠹⢄⡀⡀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣧⣘⢦⣀⡀⠀⠀⠀⠀⠁⠀⠀⠉⠑⠂⢄⠀⠀⠀
// ⠀⠀⠀⢀⡤⠒⠘⠉⠿⠋⠉⠉⠓⠚⠛⠉⢉⠡⠂⠀⠀⠀⠀⠀⠀⠀⠑⡀⠀
// ⠀⠀⢠⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⢰⠀
// ⠀⢀⣿⣆⠀⣀⡴⠀⠀⠀⠀⠀⠀⠀⢸⡀⠀⠀⠀⠀⠀⡠⣾⠷⠦⠀⠀⠀⢂
// ⠀⢨⢷⡟⠿⢿⣿⡳⣦⣀⣀⣀⡀⢠⣺⣿⣤⣤⣤⣤⣴⣿⡟⠀⠀⠀⠀⠀⠈
// ⢀⡇⠀⡝⠀⢸⣿⣿⣾⣿⣽⣿⣛⡉⠀⠉⠛⡶⣷⣾⣿⣿⣿⠀⠀⠀⠀⠀⢀
// ⢸⡄⠰⠁⠀⢸⠿⣿⣿⣟⢭⠁⠀⠀⢠⡀⠀⠀⠉⠉⢀⣸⣿⣦⢱⡀⠀⠀⢸
// ⡌⠐⣇⣀⣴⡟⠀⢹⡟⠛⢿⠛⠛⠓⢤⠋⠙⠓⠢⠤⠆⡹⠁⠘⣿⡏⠀⠀⢸
// ⠀⠀⠹⣿⡏⠀⠀⢸⡍⠠⣹⣦⣤⡀⢸⣀⢀⠀⠀⠀⢀⡇⠀⠀⡏⠀⠀⠀⢸
// ⠀⠀⠀⠰⡇⠀⠀⣇⢀⡀⠈⠓⠀⠈⡁⠀⠁⠀⠀⢀⣼⠀⠀⢀⡅⠀⠀⠀⢀





