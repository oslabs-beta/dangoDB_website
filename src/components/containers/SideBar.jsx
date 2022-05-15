import * as React from 'react';
import PropDrop from '../PropDrop';

const SideBar = ({ savedProps, currentProp, setCurrentProp }) => {
  //add stateful property to each prop drop
  const sidePropElement = savedProps.map((element) => {
    <PropDrop
      savedProps={savedProps}
      currentProp={currentProp}
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

// ⣿⣿⣿⣿⣿⣿⣿⣧⣿⣴⣷⣟⠱⠟⡒⠿⠿⠦⢤⣤⡬⠍⠁⠠⠟⣿⣧⣤⣀⣸⣇⡀⠀⢠⣀⠟⠉⠀⠀⠀⠀⠀⠀⢀⣽⣿⣿⣿⣿⣿
// ⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡴⢿⣧⣴⡆⣠⠀⠈⠙⣦⡴⠖⠋⠉⠁⠀⠀⠀⠈⠉⠳⢦⣄⠈⠀⠀⠀⠀⠀⣸⠴⠾⠛⠿⣿⣿⣿⣿
// ⡣⣬⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠁⣠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣦⢠⣅⣰⣶⠿⣿⣶⡄⢁⣈⢻⣿⣿⣿
// ⣿⡿⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⢫⡍⠙⣿⣷⣾⣿⣾⣿⣦⣽⣿⣿
// ⣿⣧⣸⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⡿⢿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡏⢸⢹⠀⠘⣿⣿⣿⣿⣙⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠙⠿⣿⡶⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠃⣬⣛⣀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣠⣞⡁⠀⠀⠀⠀⣠⣴⠾⠿⣿⣶⣄⠀⠀⠀⠙⢦⡀⠀⠀⠀⢀⣴⡟⠉⠉⠁⣸⣿⠋⠉⠛⠿⠏⢻⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠙⢆⠀⠀⢀⡟⠁⠀⠀⠀⠉⠉⠳⠤⠀⠀⠈⣿⡆⠀⠀⠸⠉⠃⠀⠀⠀⣤⠀⠀⠀⢀⣀⡀⢸⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣱⣿⣿⡀⠀⠈⣧⠀⠀⣇⠀⢤⠀⠀⠀⠀⠀⠀⢀⣤⠖⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣷⣿⢡⣾⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⡤⢬⣧⠀⠻⢄⣼⣶⡖⠒⣲⣶⢾⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢬⣷⣿⣿⣿
// ⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣀⣦⡿⠀⠀⠀⠙⠿⠥⠴⢛⣡⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿⣿
// ⣷⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠙⠋⠀⠀⠀⠀⠀⠀⠀⠈⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⢻⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢻⡄⠀⠀⠀⢀⣴⣶⣶⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣿⣷⣸⢿⣄⠀⠙⠧⣬⣿⠿⠟⠁⠀⠀⢠⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⢀⡇⣸⣿⣎⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⢸⣏⣿⡹⣿⢸⣿⣆⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⡀⠙⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡟⣻⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⢸⣿⣿⣿⠻⠿⣿⣿⡆⠑⠂⠀⠉⠉⠉⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡟⢀⣽⣿⢻
// ⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⢸⣿⣿⣿⡃⠐⣿⣟⣻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⢫⣴⣾⣿⣻⣿
// ⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠘⣿⢿⣿⡧⢰⣿⣿⣯⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⡿⢣⣾⣿⣿⣿⡟⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⢹⡟⢶⣿⠿⣿⣿⣿⣾⣿⡀⢄⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠔⠃⠀⠀⢀⣴⡾⠯⢞⣵⣿⣿⣿⣿⣿⠠⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⢷⣴⣿⣿⣿⣿⡿⣷⡟⢷⡀⠑⢶⣤⣤⣤⣤⣴⣾⣿⡀⣀⣀⣴⣶⡿⠟⢉⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⢸⣿⣿⣿⣿⣿⣽⣿⣿⣦⡙⢦⡀⠀⠳⠬⠽⢯⣝⣿⣫⣹⠯⠄⣀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⠛⠛⠋⠹⢿⣿⡿⢿⣿⣇⠀⠀⢸⣿⣿⣿⣟⣿⣟⣿⣿⣏⣿⣾⣟⢦⣀⠀⠀⠀⠈⠁⠈⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⠀⠀⠀⠀⢀⣀⣠⣤⣭⣽⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣄⣀⣀⣤⣴⣾⣿⣿⣿⡟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿

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





