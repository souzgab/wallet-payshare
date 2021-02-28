import { NextFunction } from 'express'


export class Authorization {
    public checkJwt() {
        return true
    }
}

export default new Authorization()