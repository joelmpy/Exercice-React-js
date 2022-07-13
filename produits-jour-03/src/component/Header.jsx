function Header(props) {
  return (
    <div>
      <header>
        <h1>{props.titre}</h1>
        <img src={props.image} style={{height : "200px", width : "200px"}}></img>
        <p>{props.message}</p>
      </header>
    </div>
  );
}

export default Header;
