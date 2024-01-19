import PropTypes from 'prop-types';


const Mayor = ({ary, anecdotes}) =>{

    const max = Math.max(...ary)
    const pos = ary.indexOf(max)

    return <>
        <p>{anecdotes[pos]}</p>
        <p>Tiene {max} votos</p>
    </>
}

Mayor.propTypes = { //Evitar el error de props validation
    ary: PropTypes.array.isRequired,
    anecdotes: PropTypes.array.isRequired,
};

export default Mayor 