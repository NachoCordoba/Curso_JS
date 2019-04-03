import { Router, Request, Response} from 'express';

const router = Router();

router.get('/',(req: Request,res: Response)=>{
    res.json({
        msg: 'Todo salio Bien'
    });
});

router.get('/:id',(req: Request,res: Response)=>{
    const id = req.params.id;
    res.json({
        id
    });
});

export default router;