import axios from 'axios'
const searchImage = async(term) => {
    const url = 'https//api.unsplash.com/search/photos/?client_id=kLUkurr2_eNlYV-qHH9umC9xY7m4FnV1hSqbpW-iSnY'


const response = await axios.get(url,{
    params:{
        query:'cars'
    }
})

console.log(response)


}
export default searchImage