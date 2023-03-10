import { emailCheck, passwordCheck } from './useSignUp';
import { ILoginCheck } from '../types/interface';

export const authCheck = ({ email, password, passwordConfirmed }: ILoginCheck) => {
    if (emailCheck(email) && passwordCheck(password, passwordConfirmed)) {
        return true;
    } else {
        return false;
    }
}