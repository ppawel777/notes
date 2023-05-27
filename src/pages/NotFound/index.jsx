import { useNavigate } from 'react-router-dom';

const NotFound = () => {
	const navigate = useNavigate();
	const goBack = () => {
    navigate(-1);
  };
	return (
		<section>
			<p>Страница не найдена</p>
			<p>код ошибки: 404</p>
			<p>В адресе есть ошибка или страница удалена</p>
			<p>
			<button onClick={ goBack }>Вернуться назад</button>
			</p>
		</section>
	)
}

export default NotFound;
