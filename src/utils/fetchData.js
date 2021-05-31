import axios from 'axios';

const fetchData = async() => {

    try {
        const res = await axios(`${process.env.REACT_APP_BASE_URL}/data.json`);
        return res.data;
    }
    catch(err){
        console.log(`LoadData error at LoadData: ${err}`);
    }       

}

export default fetchData;

