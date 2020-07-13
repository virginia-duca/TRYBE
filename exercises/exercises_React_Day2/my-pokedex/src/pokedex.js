import React from 'react'

class Pokedex extends React.Component {
    render() {
        const { name, type, image } = this.props.pokemon
        const { value, measurementUnit} = this.props.pokemon.averageWeight
        return(
            <div className="poke-card">
                <p>{name}</p>
                <p>{type}</p>
                <p>Average Weight: {value} {measurementUnit}</p>
                <img src={image} alt=""/>
            </div>
        )
    }
}

export default Pokedex