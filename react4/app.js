const ShoppingList = () => {
    const [items] = React.useState({
        items1: 'ogórki',
        items2: 'sok',
        items3: 'piwo'
    })

    return (
        <div>
            <h1>Lista zakupów</h1>
            <ul>
                <ItemList name={items.items1} example={2 + 69} />
                <ItemList name={items.items2} />
                <ItemList name={items.items3} />
            </ul>
        </div>
    )
}

const ItemList = ({ name, example }) => (
    <li>{name}, {example}</li>
)


ReactDOM.render(<ShoppingList />, document.getElementById('root'))