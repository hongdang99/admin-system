import React from 'react';

// Component
import Main from "./components/Main";
import ScreenContext from "./context/screenContext";

{/*<Invoice />*/}

function App()  {
	// Mặc định là trang thống kê
	const [screen, setScreen] = React.useState('statistical');
	return (
		<ScreenContext.Provider value={{setScreen, screen}}>
			<Main />
		</ScreenContext.Provider >
	);
}

export default App;
