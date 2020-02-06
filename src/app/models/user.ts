export class User {
    public constructor( 
                        public firstName?: string,
                        public lastName?: string,
                        public IdOfUser?: number,
                        public nameOfUser?: string,
                        public dateOfBirth?: string,
                        public email?: string,
                        public gender?: string,
                        public password?: string,
                        public image?: string,
                        public role?: string                
                        ) {
    }
}
