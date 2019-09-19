import fs from 'fs';
import appRoot from 'app-root-path';
const database = `${appRoot}/src/database/db.json`;

export default {
    loadHotels: (hotelDB) => {
        const dataBuffer = fs.readFileSync(hotelDB);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    },
    saveHotel: (newHotel) => {
        const dataJSON = JSON.stringify(newHotel);
        fs.writeFileSync(database, dataJSON);
    }
}