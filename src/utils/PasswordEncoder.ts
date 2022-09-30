import bcrypt from 'bcrypt';


class PasswordEncoder{
    
    public static encoder = (password:string): Promise <string> => {
        return bcrypt.hash(password, 10);
    }

}

export default PasswordEncoder;