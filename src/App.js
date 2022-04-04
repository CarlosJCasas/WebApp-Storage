import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Proyectos from './components/pages/Proyectos';
import Productos from './components/pages/Productos';
import Usuarios from './components/pages/Usuarios';
import Operaciones from './components/pages/Operaciones';
import React from 'react';

function App() {
	return (
		<div id='appCss' className='App'>
			<Router>
				<div id='container-general' className='container-general'>
					<div className='container-sidebar'>
						<Sidebar />
					</div>
					<div className='pagina-principal'>
						<Routes>
							<Route path='/' exact element={<Home />} />
							<Route path='/proyectos' element={<Proyectos />} />
							<Route path='/productos' element={<Productos />} />
							<Route path='/usuarios' element={<Usuarios />} />
							<Route path='/operaciones' element={<Operaciones />} />
						</Routes>
					</div>
				</div>
			</Router>
		</div>
	);
}

export default App;
