
export const Validate = (email,password) => {
    // const isName = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name);
    // if (!name) {
    //     return "Required Name!"
    //   } else if (!/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name)) {
    //     return 'Invalid Name ';
    //   }
      if (!email) {
        return "Required email!"
      } else if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        return 'Invalid Email ';
      } if (!password) {
        return "Required paaword!"
      } else if (!/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password)) {
        return 'Invalid Password ';
      }
    // const isEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    // const isPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
    // // if(!isName) return "Name is Invalid";
    // if (!isEmail) return "Email Id is invalid";
    // if (!isPassword) return "Password is invalid";
  
  

    return null;
}

