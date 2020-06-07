<template>
    <div class="col-sm-12 my-3">
        <ul id="item-list" class="list-group" >
            <li class="list-group-item" id="item-0">
                <div class="row">
                    <div class="col-sm-4 product-name">
                        <h5>Product Name : {{ product.name }}</h5>
                    </div>
                    <div class="col-sm-3 product-price">
                        <h5>Cart Subtotal : {{ product.price *  product.quantity | currency }} </h5>
                    </div>
                    <div class="col-sm-5">
                        <div class="input-group">
                            <div class="product-amount">
                                <h5>Amount : </h5>
                        </div>
                        <select class="custom-select ml-3"  v-model="quantity" >
                            <option v-for="quantityOption in  quantityOptions" :key="quantityOption">{{ quantityOption }}</option>
                        </select>
                            <div class="input-group-append">
                                <button
                                    class="btn btn-info mr-3"
                                    type="button"
                                    @click="adjustProduct"
                                >
                                Edit
                                </button>
                                <button
                                    class="btn btn-danger"
                                    type="button"
                                    @click="deleteProduct"
                                >
                                Delete
                                </button>
                            </div>
                            </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import  {mapActions} from 'vuex';
export default {
    props: ['product'],
    data() {
        return {
            quantity: this.product.quantity,
            quantityOptions: [1, 2, 3, 4, 5],
        }
    },
    methods: {
        ...mapActions({
            deleteProductOrder:'removeProduct',
            editQuantity: 'editQuantity'
        }
        ),
        adjustProduct() {
            console.log('changed')
            const order = {
                productId: this.product.id,
                productPrice: this.product.price,
                quantity: this.quantity
            };
            this.editQuantity(order);
        },
        deleteProduct() {
            const order = {
                productId: this.product.id,
                productPrice: this.product.price,
                quantity: this.quantity
            };
            this.deleteProductOrder(order);
        }
    },

}
</script>
<style scopted>
.product-amount,
 .product-name, .product-price {
    display: flex;
    align-items:center;
    justify-content:start;

}
h5 {
    margin-bottom: 0;
}
.btn {
    border-radius: 0;
}

</style>