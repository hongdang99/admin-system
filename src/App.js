import React from 'react';

// Component
import Main from "./components/Main";
import Login from "./components/Screen/Login";
import ScreenContext from "./context/screenContext";

function App()  {
	// Mặc định là trang thống kê
	const [screen, setScreen] = React.useState('statistical');
	return (
		<ScreenContext.Provider value={{setScreen, screen}}>
			{/*<Main />*/}
			<Login />
		</ScreenContext.Provider >
	);
}

export default App;
