import HeroesComponent from '../../components/Heroes/Heroes.jsx'
import { useNavigate } from "react-router-dom";
import ErrorBoundary from '../../utils/ErrorBoundary.jsx'

const Heroes = () => {
	const navigate = useNavigate();
	const goBack = () => {
    navigate(-1);
  };

	return (
		<>
			<h3>Подробнее о персонаже</h3>
			<button onClick={ goBack }>Назад</button>
			<ErrorBoundary>
				<HeroesComponent />
			</ErrorBoundary>
		</>
	)
}

export default Heroes;
