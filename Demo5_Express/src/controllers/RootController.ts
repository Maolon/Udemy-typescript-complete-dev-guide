import { Router, Request, Response, NextFunction } from "express";
import { get, controller, use, post, validator } from "./decorators";
import bodyParser from "body-parser";

function requireAuth(req: Request, resp: Response, next: NextFunction):void{
    if(req.session && req.session.loggedIn){
        next();
        return;
    }

    resp.status(403);
    resp.send('Not permitted');
}

@controller("")
class RootController {
  @get("/")
  getRoot(req: Request, resp: Response) {
    if (req.session && req.session.loggedIn) {
      resp.send(`
                <div>
                    <div>You are logged In</div>
                    <a href="/auth/logout">logout</a>
                </div>
            `);
    } else {
      resp.send(`
                <div>
                    <div>You are not logged In</div>
                    <a href="/auth/login">login</a>
                </div>
            `);
    }
  }
  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, resp: Response) {
    resp.send("Authorized Granted");
  }
}
