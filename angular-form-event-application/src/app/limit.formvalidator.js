"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LimitValidator {
    static Limit(limit) {
        return (control) => {
            let val = Number(control.value);
            if (val != NaN && val > limit) {
                return { 'limit': { 'limit': limit, 'actualValue': val } };
            }
            else {
                return null;
            }
        };
    }
}
exports.LimitValidator = LimitValidator;
//# sourceMappingURL=limit.formvalidator.js.map