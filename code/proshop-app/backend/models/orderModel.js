import mongoose, { Mongoose } from 'mongoose';

const orderSchema = mongoose.Schema ( 
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        orderItems: [
            {
                name: { type:String, required: true},
                qty: { type:Number, required: true},
                image: { type:String, required: true},
                price: { type:Number, required: true},
                product:{ type:mongoose.Schema.Types.ObjectId, required: true, ref: 'Product'},
            }
        ],
        shippingAddress: {
                address1: {type:String, required: true},
                address2: { type:String, required: false},
                city: { type:String, required: false},
                state: { type:String, required: false},
        },
        paymentMethod: {
            type: String,
            required: true
        }, 
        paymentResult: {
            id: {type: String},
            status: {type: String},
            update_time: { type: String},
            email_address: { type:String}
        },
        taxPrice: {
            type: Number,
            required: true
        },
        shippingPrice: {
            type: Number,
            required: true
        },
        totalPrice: {
            type: Number,
            required: true
        },
        isPaid: {
            type: Boolean,
            required: true,
            default: false
        },
        isDelivered: {
            type: Boolean,
            required: true,
            default: false
        },
        paidAt: {
            type: Date
        },
        deliveredAt: {
            type: Date
        },
        name: {
            type: String, 
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        }
    },
     {
         timestamps: true
     }

)

const Order = mongoose.model('Order', orderSchema);

export default Order;