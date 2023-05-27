import LocationComponent from '../../components/Location/Location.jsx'
import { useNavigate } from "react-router-dom";
import ErrorBoundary from '../../utils/ErrorBoundary.jsx'

const Location = () => {
	const navigate = useNavigate();
	const goBack = () => {
    navigate(-1);
  };

	return (
		<>
			<h3>Подробнее о локации</h3>
			<button onClick={ goBack }>Назад</button>
			<ErrorBoundary>
				<LocationComponent />
			</ErrorBoundary>
		</>
	)
}

export default Location;
