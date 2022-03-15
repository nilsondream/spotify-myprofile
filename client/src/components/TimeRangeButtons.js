import { StyledRangeButtons } from '../styles';

const TimeRangeButtons = ({ activeRange, setActiveRange }) => {
    return (
        <StyledRangeButtons>
            <li>
                <button
                    className={activeRange === 'short' ? 'active' : ''}
                    onClick={() => setActiveRange('short')}>
                    Este mes
                </button>
            </li>
            <li>
                <button
                    className={activeRange === 'medium' ? 'active' : ''}
                    onClick={() => setActiveRange('medium')}>
                    Últimos 6 meses
                </button>
            </li>
            <li>
                <button
                    className={activeRange === 'long' ? 'active' : ''}
                    onClick={() => setActiveRange('long')}>
                    Todo el tiempo
                </button>
            </li>
        </StyledRangeButtons>
    );
};

export default TimeRangeButtons;