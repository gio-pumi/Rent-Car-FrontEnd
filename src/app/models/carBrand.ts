export class CarBrand {
    public constructor(
                        public id?: number,
                        public manufacturer?: string,
                        public model?: string,
                        public transmission?: string,
                        public productionYear?: number,
                        public pricePerDay?: number,
                        public pricePerDayIfDalay?: number
                        ) {
    }
}
