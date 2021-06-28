const isEmail = (value) => {
  const pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
  );
  if (!pattern.test(value)) {
    return `Email adress isn't valid`;
  } else {
    return null;
  }
};

const isAlphabetic = (value, name) => {
  const pattern = new RegExp(/[^a-zA-Z -]/);
  if (pattern.test(value)) {
    return `${name} has invalid characteers`;
  } else {
    return null;
  }
};

const isLongEnough = (value, name) => {
  if (value.trim().length < 3) {
    return `${name} needs to bee at least three characters`;
  } else {
    return null;
  }
};

const isntEmpty = (value) => {
  if (value.trim() === '') {
    return `Field can't be empty`;
  } else {
    return null;
  }
};

const formValidation = (name, value) => {
  switch (name) {
    case 'email':
      if (isntEmpty(value)) {
        return isntEmpty(value);
      }
      if (isEmail(value)) {
        return isEmail(value);
      }
      return null;
    case 'name':
      if (isntEmpty(value)) {
        return isntEmpty(value);
      }
      if (isAlphabetic(value, name)) {
        return isAlphabetic(value, name);
      }
      if (isLongEnough(value, name)) {
        return isLongEnough(value, name);
      }
      return null;
    case 'company':
      return isntEmpty(value);
    case 'title':
      return isntEmpty(value);
    case 'message':
      return isntEmpty(value);
    default:
      break;
  }
};

export default formValidation;
