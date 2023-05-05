import CustomNavbar from "./CustomNavbar";

 const Base=({title="welcome", children})=> {
    return(
        <div>
          <CustomNavbar/>
          {children}
        </div>
    );
}

export default Base ;