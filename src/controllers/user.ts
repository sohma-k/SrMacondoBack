import { Request, Response } from "express"; // Importa Response

export const userlogin = (req: Request, res: Response) => {
    console.log(req.body);
  
    res.json({
      msg: 'Login User',
      body: req.body
    });
}

