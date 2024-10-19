const verifySelected = (type, data, key) => {
  if (!data) return "outlined";
  
  if (type === data[key]){
    return "contained";
  }
  return "outlined";
}

export {
    verifySelected
}