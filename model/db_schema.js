"use strict"
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminLogin = new Schema({
    full_name: { type: String, required: true },
    email: { type: String, required: true },
    mobile_no: { type: String, maxlength: 10, required: false },
    password: { type: String, required: false },
    admin_type : {type: String, required: true},
    added_date : {type: Date, required: true, default: ()=>new Date()},
    modified_date : {type: Date, required: true, default: ()=>new Date()},
    is_active : {type: Boolean, required: true, default: true}
});
const AdminLogin = mongoose.model("cw_admin_login", adminLogin);

module.exports = {
    AdminLogin: AdminLogin
}