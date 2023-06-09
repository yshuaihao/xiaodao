import { __awaiter, __generator } from "tslib";
import Koa from 'koa';
import Router from 'koa-router';
var port = 8000;
var app = new Koa();
var router = new Router();
router.get('/home', function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        ctx.response.body = '<h1>hello koa HOME</h1>';
        return [2 /*return*/];
    });
}); });
router.get('/login', function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        ctx.response.body = '<h1>Login</h1>';
        return [2 /*return*/];
    });
}); });
app.use(router.routes());
app.listen(port);
console.log("Serve started at port ".concat(port, "~"));
//# sourceMappingURL=index.js.map