import LoginComponent from '../../components/Login/Login.jsx';
import ErrorBoundary from '../../utils/ErrorBoundary.jsx'

const Login = () => {
	return (
		<>
			<h3>Авторизуйтесь</h3>
			<div className='rm-heroes'>
				<ErrorBoundary>
					<LoginComponent />
				</ErrorBoundary>
			</div>
		</>
	)
}

export default Login;
