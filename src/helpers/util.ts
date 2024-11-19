const bcrypt = require('bcrypt');
const saltRounds = 10;

export const hashPasswordHelper = async (password: string): Promise<string> => {
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
