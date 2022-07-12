function User (props) {
    return (
        <div>
            <p>{props.items.name}</p>
            <p>{props.items.email}</p>
        </div>
    )
}

export default User 