/*
    包含多个基于state的getter计算属性的对象
*/
export default {
    //购物车商品总数量
    totalCount(state) {
        return state.cartFoods.reduce((Count, food,) => Count + food.count, 0)
    },
    //购物车总价格
    totalPrice(state) {
        return state.cartFoods.reduce((Price, food) => Price + food.count * food.price, 0)
    },

    //满意和不满意，全部的筛选
    positiveSize(state) {
        return state.ratings.reduce((Count, rating) => Count + (rating.rateType === 0 ? 1 : 0), 0)
    }

}