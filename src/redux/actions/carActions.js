import {carsService} from "../../services/carsService";

const carActionsTypes = {
    SET_CARS:'SET_CARS',
    SET_CAR_FOR_UPDATE:'SET_CAR_FOR_UPDATE'
}
const actions = {
    setCars: (payload) => ({type: carActionsTypes.SET_CARS, payload}),
    setCarForUpdate: (payload) => ({type: carActionsTypes.SET_CAR_FOR_UPDATE, payload})

}
const getCars = () =>async dispatch=>{
    const {data} = await carsService.getAll();
    dispatch(actions.setCars(data))

}
const create = (car) =>async dispatch=>{
await carsService.create(car)
    await dispatch(getCars())
}
const update = (id,car)=>async dispatch=>{
    await carsService.updateById(id,car)
    dispatch(actions.setCarForUpdate(null))
    await dispatch(getCars())
}

const deleteCar = (id) => async dispatch => {
    await carsService.deleteById(id)
    await dispatch(getCars())
}
const carActions ={
    getCars,
    create,
    update,
    deleteCar,
    setCarForUpdate:actions.setCarForUpdate

}
export {
    carActions,
    carActionsTypes
}