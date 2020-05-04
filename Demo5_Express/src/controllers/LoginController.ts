import { Router, Request, Response, NextFunction } from "express";
import { get, controller, use, post, validator } from "./decorators";
import bodyParser from "body-parser";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
              <form method="POST">
                  <div>
                      <label>Email</label>
                      <input name="email"/>
                  </div>
                  <div>
                      <label>Password</label>
                      <input name="password" type="password"/>
                  </div>
                  <button>Submit</button>
              </form>
          `);
  }

  @post("/login")
  @validator("email", "password")
  postLogin(req: RequestWithBody, resp: Response) {
    const { email, password } = req.body;
    if (email && password) {
      req.session = { loggedIn: true };
      resp.redirect("/");
    } else {
      resp.send("Invalid Password or User");
    }
  }
  @get('/logout')
  postLogout(req: Request, resp: Response) {
    req.session = undefined;
    resp.redirect("/");
  }
}
