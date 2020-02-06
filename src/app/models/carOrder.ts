export class CarOrder {
    public constructor( 
                        public id?: number,
                        public idOfUser?: number,
                        public idOfCarFleet?: number,
                        public rentStartDate?: Date,
                        public rentEndDate?: Date,
                        public carRealReturnDate?: Date,
                        ) {
    }
}
