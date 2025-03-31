"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/:n', (req, res) => {
    let sum = 0;
    let param = parseFloat(req.params.n);
    for (let i = 0; i <= param; i++) {
        sum = sum + i;
    }
    res.json({
        'Sum': sum
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on the ${PORT}`);
});
