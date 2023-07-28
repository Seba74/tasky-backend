import bcrypt from "bcrypt";

export const hashPassword = (password: string): string => {
    const salt = bcrypt.genSaltSync();
    const hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
};