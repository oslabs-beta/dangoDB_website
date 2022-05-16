import * as React from 'react';
import PropButton from '../PropButton';


const SideBar = ({ savedProps, currentProp, setCurrentProp }) => {
  //add stateful property to each prop drop
<<<<<<< HEAD
  console.log('saved', savedProps);
  const sidePropElement = savedProps.map((element) => {
    <PropDrop
      savedProps={savedProps}
=======
  const sidePropElement = savedProps.map((property) => {
    <PropButton
      propName={property.propName}
      property={property}
>>>>>>> dev
      currentProp={currentProp}
      //for editing purposes? or would we need setSavedProps?
      setCurrentProp={setCurrentProp}
    />;
  });

  return (
    <div className="side_container">
      <h2>This is housing the sidebar</h2>
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





