import axios from "axios";

const instance =axios.create({
    baseURL:'http://owu.linkpc.net/carsAPI/v1'
})
const Endpoints ={
    LOGIN :'/cars'
}
const Endpoints1 ={
    LOGIN: 'cars/${id}'
}
const Endpoints2 ={
    LOGIN: '/cars/${carForUpdate.id}'
}
export const apiServices = {
    postLoginAxios: (data) => {
        instance.post(Endpoints.LOGIN, data)
    },
    postLoginAxiosCar:(data)=>{
      instance.delete(Endpoints1.LOGIN,data)
          .then(() =>{
          setOnSave(prev=>!prev)
      })
    },
    postLoginAxioUpdete: (data)=> {
        instance.put(Endpoints2.LOGIN)
            .then(()=> {
            setOnSave(prev => !prev)
            setСarForUpdate(null)
            reset()
        })
    }



}