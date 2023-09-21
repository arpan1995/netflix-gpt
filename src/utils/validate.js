
export const checkValidData = (name, email, password) => {
    const isEmailVaild = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
    
    // if(!isNameValid) return "Name is not vaild";
    if(!isEmailVaild) return "Email ID is not vaild";
    if(!isPasswordValid) return "Password is not Valid";

    return null;


}




