import { CarOrder } from './carOrder';
export class DisplayCar {
    public constructor( 
                        public id?: number,
                        public number?: number,
                        public brand?: number,
                        public mileage?: number,
                        public image?: string,
                        public isOk2Rent?: boolean,
                        public branchPlace?: string,
                        public manufacturer?: string,
                        public model?: string,
                        public transmission?: string,
                        public productionYear?: Date,
                        public pricePerDay?: number,
                        public pricePerDayIfDalay?: number,
                        public carOrder?: CarOrder                                                                        
                        ) {
    }
}
