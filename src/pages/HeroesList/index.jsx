import HeroesListComponent from '../../components/Heroes/HeroesList.jsx'
import ErrorBoundary from '../../utils/ErrorBoundary.jsx'
// import ComponentLazy from '../../components/ComponentLazy.js';

const HeroesList = () => {
	return (
		<>
			<h3>Персонажи мультсериала Рик и Морти</h3>
			{/* <div className='rm-heroes_list__wrap'><ComponentLazy dir="Heroes" name="HeroesList" /></div> */}
			
			<div className='rm-heroes_list__wrap'>
				<ErrorBoundary>
					<HeroesListComponent />
				</ErrorBoundary>
			</div>
		</>
	)
}

export default HeroesList;
