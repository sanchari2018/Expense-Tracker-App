import './Card.css'


function Card(props)
{

    return(

        <div className={`card ${props.comp}`}>{props.children}</div>
    )
}

export default Card;