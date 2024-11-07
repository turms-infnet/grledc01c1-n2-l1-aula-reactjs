const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    return { error: true, helperText: "O campo e-mail é obrigatório" };
  } else if (!emailRegex.test(email)) {
    return { error: true, helperText: "E-mail inválido" };
  } else {
    return { error: false, helperText: null };
  }
};

const validPassword = (password) => {
    if (password === "") {
        return { error: true, helperText: "O campo senha é obrigatório" };
    } else if (password.length > 5) {
        return { error: false, helperText: null };
    } else {
        return { error: true, helperText: "A senha precisa ter 6 ou mais caractéres." };
    }
}

export { 
    validateEmail,
    validPassword
}