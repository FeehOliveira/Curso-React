import Item from './Item'

function List () {
    return(
        <>
            <h1>Minhas Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985} />
                <Item marca="Fiat" ano_lancamento={1964} />
                <Item marca="Renault" ano_lancamento={1999} />
            </ul>
        </>
    )
}

Item.defaultProps = {
    marca: "Faltou a marca",
    ano_lancamento: 0,
}

export default List