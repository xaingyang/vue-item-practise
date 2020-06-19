export const cpMixin = {
    methods: {
        spendMoney(count) {
            this.money -= count;
        },
        gaveMoney(count) {
            this.money -= count;
            this.$parent.money += count;
        },
    },
}