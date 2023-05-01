
 const Base=({title="welcome", children})=> {
    return(
        <div>
          <h1>This is a Header</h1>
          {children}
          <h2>This is a Footer</h2>
        </div>
    );
}

export default Base ;