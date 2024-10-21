const validateEmail = (email: string, t: (key: string) => string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return { error: true, helperText: t("message-email-required") };
  } else if (!emailRegex.test(email)) {
    return { error: true, helperText: t("message-email-invalid-format") };
  } else {
    return { error: false, helperText: null };
  }
};

const validatePasswords = (password: string, confirmPassword: string, t: (key: string) => string) => {
  if (!password) {
    return { error: true, helperText: t("message-password-required") };
  } else if (!confirmPassword) {
    return { error: true, helperText: t("message-confirm-password-required") };
  } else if (password !== confirmPassword) {
    return { error: true, helperText: t("message-password-not-match") };
  } else {
    return { error: false, helperText: null };
  }
};

const validateChange = (data: any, setData: any, field: string, t: (key: string) => string) => {
      const d: any = data;
      if (field === "email") {
          const emailValidation = validateEmail(data.email.value, t);
          d.email.error = emailValidation.error
          d.email.helperText = emailValidation.helperText
      } else if (field === "password") {
          const confirmPass = data.confirmPassword ? data.confirmPassword.value : data.password.value;

          const passwordValidation = validatePasswords(data.password.value, confirmPass, t);
          d.password.error = passwordValidation.error
          d.password.helperText = passwordValidation.helperText

          if(Object.keys(d).includes("confirmPassword")){
            d.confirmPassword.error = passwordValidation.error
            d.confirmPassword.helperText = passwordValidation.helperText
          }
      }
      
      setData((v) => ({
          ...v,
          ...d
      }))
  }


export {
    validateEmail,
    validatePasswords,
    validateChange
}