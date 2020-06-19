import {
    reqTradeInfo,
    reqPayInfo
} from "@/api";

//管理订单支付相关数据的vuex模块
export default {
    state: {
        tradeInfo: {}, //交易信息
        payInfo: {},
    },
    mutations: {
        RECEIVE_TRADE_INFO(state, {
            tradeInfo
        }) {
            state.tradeInfo = tradeInfo;
        },
        RECEIVE_PAY_INFO(state, {
            payInfo
        }) {
            state.payInfo = payInfo;
        },
    },
    actions: {
        async getTradeInfo({
            commit
        }) {
            const result = await reqTradeInfo();
            if (result.code === 200) {
                const tradeInfo = result.data;
                commit("RECEIVE_TRADE_INFO", {
                    tradeInfo
                }); //提交的是包含数据的对象
            }
        },
        async getPayInfo({
            commit
        }, orderId) {
            const result = await reqPayInfo(orderId);
            if (result.code === 200) {
                const payInfo = result.data;
                commit("RECEIVE_PAY_INFO", {
                    payInfo
                });
                //提交的是包含数据的对象
            }
        },
    },
    getters: {},
};